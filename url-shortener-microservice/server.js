const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dns = require('dns');
const { promisify } = require('util');
const dnsLookup = promisify(dns.lookup);
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage for URLs
let urlDatabase = [];
let shortUrlCounter = 1;

// Helper function to validate URL format
function isValidUrl(url) {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch (e) {
    return false;
  }
}

// Helper function to check if URL is accessible
async function isUrlAccessible(url) {
  try {
    const urlObj = new URL(url);
    await dnsLookup(urlObj.hostname);
    return true;
  } catch (e) {
    return false;
  }
}

// POST /api/shorturl - Create a short URL
app.post('/api/shorturl', async (req, res) => {
  const { url } = req.body;
  
  if (!url) {
    return res.json({ error: 'URL is required' });
  }
  
  if (!isValidUrl(url)) {
    return res.json({ error: 'invalid url' });
  }
  
  // Check if URL is accessible
  const accessible = await isUrlAccessible(url);
  if (!accessible) {
    return res.json({ error: 'invalid url' });
  }
  
  // Check if URL already exists in database
  const existingUrl = urlDatabase.find(entry => entry.original_url === url);
  if (existingUrl) {
    return res.json({
      original_url: existingUrl.original_url,
      short_url: existingUrl.short_url
    });
  }
  
  // Create new short URL
  const shortUrl = shortUrlCounter++;
  urlDatabase.push({
    original_url: url,
    short_url: shortUrl
  });
  
  res.json({
    original_url: url,
    short_url: shortUrl
  });
});

// GET /api/shorturl/:short_url - Redirect to original URL
app.get('/api/shorturl/:short_url', (req, res) => {
  const shortUrl = parseInt(req.params.short_url);
  const urlEntry = urlDatabase.find(entry => entry.short_url === shortUrl);
  
  if (!urlEntry) {
    return res.status(404).json({ error: 'Short URL not found' });
  }
  
  res.redirect(urlEntry.original_url);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 