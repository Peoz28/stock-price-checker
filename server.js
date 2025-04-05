const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for FCC testing
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});

// Trust proxy for IP address
app.set('trust proxy', true);

// Serve static files
app.use(express.static('public'));

// Root endpoint
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// API endpoint
app.get('/api/whoami', (req, res) => {
    // Get IP address
    const ipaddress = req.ip;
    
    // Get preferred language
    const language = req.headers['accept-language'];
    
    // Get software (user agent)
    const software = req.headers['user-agent'];

    // Return in the exact format required by FCC
    res.json({
        ipaddress: ipaddress,
        language: language,
        software: software
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 