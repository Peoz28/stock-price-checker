const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/:date?', (req, res) => {
    let date = req.params.date;
    let dateObj;

    if (!date) {
        dateObj = new Date();
    } else {
        if (isNaN(date)) {
            dateObj = new Date(date);
        } else {
            dateObj = new Date(parseInt(date));
        }
    }

    if (dateObj.toString() === 'Invalid Date') {
        res.json({ error: 'Invalid Date' });
        return;
    }

    res.json({
        unix: dateObj.getTime(),
        utc: dateObj.toUTCString()
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 