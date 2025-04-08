const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dns = require('dns');
const { promisify } = require('util');
const dnsLookup = promisify(dns.lookup);

const app = express();
const port = process.env.PORT || 3000;

// Basic Configuration
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// In-memory storage for URLs
const urlDatabase = new Map();
let counter = 1;

// Helper function to validate URL format
function isValidUrl(urlString) {
  try {
    const url = new URL(urlString);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (error) {
    return false;
  }
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// URL shortening endpoint
app.post('/api/shorturl', async (req, res) => {
  const originalUrl = req.body.url;
  
  if (!isValidUrl(originalUrl)) {
    return res.json({ error: 'invalid url' });
  }

  try {
    const urlObj = new URL(originalUrl);
    await dnsLookup(urlObj.hostname);
    
    const shortUrl = counter++;
    urlDatabase.set(shortUrl.toString(), originalUrl);
    
    res.json({
      original_url: originalUrl,
      short_url: shortUrl
    });
  } catch (error) {
    res.json({ error: 'invalid url' });
  }
});

// URL redirect endpoint
app.get('/api/shorturl/:short_url', (req, res) => {
  const shortUrl = req.params.short_url;
  const originalUrl = urlDatabase.get(shortUrl);
  
  if (originalUrl) {
    res.redirect(originalUrl);
  } else {
    res.json({ error: 'No short URL found for the given input' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 