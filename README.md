# Timestamp Microservice

A simple API that converts between Unix timestamps and human-readable dates.

## Links

- **Solution Link:** https://peoz28.github.io/timestamp-microservice-demo/
- **Source Code:** https://github.com/Peoz28/timestamp-microservice

## Features

- Convert dates to Unix timestamps
- Convert Unix timestamps to dates
- Handle both date strings and Unix timestamps
- Return current timestamp if no date is provided

## API Endpoints

- `GET /api/` - Returns current timestamp
- `GET /api/:date` - Returns timestamp for specific date

## Example Usage

- `GET /api/` - Get current timestamp
- `GET /api/2023-12-25` - Get timestamp for December 25, 2023
- `GET /api/1703548800000` - Get date for Unix timestamp

## Example Response

```json
{
    "unix": 1703548800000,
    "utc": "Mon, 25 Dec 2023 00:00:00 GMT"
}
```

## Installation

1. Clone the repository
2. Run `npm install`
3. Run `npm start`
4. Access the API at `http://localhost:3000`

## Live Demo

Visit the live demo at: https://peoz28.github.io 