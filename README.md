# Command Line Interface Calculator Documentation

## Overview
This project implements a simple command line interface (CLI) calculator using TypeScript. Users can input two numbers and an arithmetic operation symbol, and the calculator will perform the corresponding calculation.

## Installation
To use the calculator, you need to install TypeScript and the Inquirer package. You can do this by running the following commands in your terminal:

```bash
npm install -g typescript
npm install inquirer
npm install --save-dev @types/inquirer
```

## Usage
1. After installing the required packages, you can run the calculator using the following command:
    ```bash
    ts-node <path_to_your_file>
    ```
    Replace `<path_to_your_file>` with the path to your TypeScript file.

2. Once the calculator is running, follow the prompts to input the first number, arithmetic symbol, and second number.

3. The calculator will display the result of the calculation based on the input provided.

4. After each calculation, you will be asked if you want to perform another calculation. Choose "Yes" to continue or "No" to exit the calculator.

## Features
- Supports addition (+), subtraction (-), multiplication (*), and division (/) operations.
- Validates user input to ensure it is a valid number and a valid arithmetic symbol.
- Allows users to perform multiple calculations in a single session.

## Code Explanation
- The `getUserInput` function prompts the user to enter the first number, arithmetic symbol, and second number. It validates each input to ensure it is valid.
- The `calculate` function calls `getUserInput` to get user input and then performs the calculation based on the input provided.
- The `switch` statement inside the `calculate` function determines the operation to perform based on the arithmetic symbol.
- The calculator continues to prompt the user for input and perform calculations until the user chooses to exit.

## Conclusion
This CLI calculator provides a simple and user-friendly way to perform basic arithmetic calculations from the command line. It is written in TypeScript, making it easy to understand and maintain. Feel free to customize and extend the calculator according to your needs. If you have any questions or feedback, please reach out to the developer, Huzaifa Ahmed.
