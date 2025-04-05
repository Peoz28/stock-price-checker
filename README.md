# Timestamp Microservice

A simple timestamp microservice API built with Node.js and Express.

## Features

- Convert dates to Unix timestamps
- Convert Unix timestamps to dates
- Handle both date strings and Unix timestamps
- Return current timestamp if no date is provided

## API Endpoints

### GET /api/
Returns the current timestamp

### GET /api/:date
Returns the timestamp for the provided date

The date parameter can be:
- A date string (e.g., "2023-12-25")
- A Unix timestamp (e.g., "1703548800000")

## Example Usage

```bash
# Get current timestamp
GET /api/

# Get timestamp for specific date
GET /api/2023-12-25

# Get timestamp for Unix timestamp
GET /api/1703548800000
```

## Example Response

```json
{
    "unix": 1703548800000,
    "utc": "Mon, 25 Dec 2023 00:00:00 GMT"
}
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

## Live Demo

[View Live Demo](https://timestamp-microservice.freecodecamp.rocks) 