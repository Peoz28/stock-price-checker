const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for FCC testing
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});

// Serve static files
app.use(express.static('public'));

// Root endpoint
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// API endpoint
app.get('/api/:date?', (req, res) => {
    let date = req.params.date;
    let dateObj;

    if (!date) {
        // Handle empty date parameter - return current time
        dateObj = new Date();
    } else {
        // Check if the input is a Unix timestamp (all digits)
        if (/^\d+$/.test(date)) {
            dateObj = new Date(parseInt(date));
        } else {
            // Try parsing as a date string
            dateObj = new Date(date);
        }
    }

    // Check for invalid date
    if (dateObj.toString() === 'Invalid Date') {
        return res.json({ error: "Invalid Date" });
    }

    // Return both unix timestamp (in milliseconds) and UTC string
    res.json({
        unix: dateObj.getTime(),
        utc: dateObj.toUTCString()
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 