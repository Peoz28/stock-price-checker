# Timestamp Microservice

A simple API that converts between Unix timestamps and human-readable dates.

## Links

- **Solution Link:** https://peoz28.github.io/timestamp-microservice-demo
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

Visit the live demo at: https://peoz28.github.io/timestamp-microservice-demo 

# Mean-Variance-Standard Deviation Calculator

A Python program that calculates mean, variance, standard deviation, max, min, and sum of a 3x3 matrix.

## Installation

1. Clone the repository
2. Install dependencies:
```bash
pip install -r requirements.txt
```

## Usage

Run the program:
```bash
python main.py
```

## Example

Input: `[0,1,2,3,4,5,6,7,8]`

Output:
```python
{
  'mean': [[3.0, 4.0, 5.0], [1.0, 4.0, 7.0], 4.0],
  'variance': [[6.0, 6.0, 6.0], [0.6666666666666666, 0.6666666666666666, 0.6666666666666666], 6.666666666666667],
  'standard deviation': [[2.449489742783178, 2.449489742783178, 2.449489742783178], [0.816496580927726, 0.816496580927726, 0.816496580927726], 2.581988897471611],
  'max': [[6, 7, 8], [2, 5, 8], 8],
  'min': [[0, 1, 2], [0, 3, 6], 0],
  'sum': [[9, 12, 15], [3, 12, 21], 36]
}
``` 