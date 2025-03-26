# Calculator Application

This project is a simple calculator application that provides basic arithmetic operations. It is implemented in both Python and JavaScript, allowing users to utilize the calculator in different environments.

## Project Structure

```
calculator-app
├── python
│   ├── calculator.py          # Main logic for the calculator (Python)
│   └── tests
│       └── test_calculator.py # Unit tests for the Python calculator
├── javascript
│   ├── calculator.js          # Main logic for the calculator (JavaScript)
│   └── tests
│       └── test_calculator.js # Unit tests for the JavaScript calculator
├── package.json               # Configuration file for npm
├── requirements.txt           # Python dependencies
└── README.md                  # Project documentation
```

## Installation

### Python

1. Ensure you have Python installed on your machine.
2. Navigate to the `python` directory.
3. Install the required packages using pip:

   ```
   pip install -r requirements.txt
   ```

### JavaScript

1. Ensure you have Node.js and npm installed on your machine.
2. Navigate to the root directory of the project.
3. Install the required packages using npm:

   ```
   npm install
   ```

## Usage

### Python

To use the calculator in Python, you can run the `calculator.py` file:

```
python python/calculator.py
```

### JavaScript

To use the calculator in JavaScript, you can run the `calculator.js` file:

```
node javascript/calculator.js
```

## Running Tests

### Python

To run the unit tests for the Python calculator, navigate to the `tests` directory and run:

```
python -m unittest test_calculator.py
```

### JavaScript

To run the unit tests for the JavaScript calculator, navigate to the `tests` directory and run:

```
npm test
```

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. Your contributions are welcome!