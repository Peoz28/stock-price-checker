# URL Shortener Microservice

A simple URL shortener microservice built with Node.js and Express.

## Features

- Shorten long URLs to easily shareable short URLs
- Validate input URLs
- Redirect from short URLs to original URLs
- Clean and responsive user interface

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Peoz28/url-shortener-microservice.git
```

2. Install dependencies:
```bash
cd url-shortener-microservice
npm install
```

3. Start the server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## API Endpoints

- `POST /api/shorturl` - Create a short URL
  - Body: `{ "url": "https://example.com" }`
  - Response: `{ "original_url": "https://example.com", "short_url": 1 }`

- `GET /api/shorturl/:short_url` - Redirect to original URL

## Technologies Used

- Node.js
- Express.js
- HTML/CSS
- JavaScript

## License

MIT 