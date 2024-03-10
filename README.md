**Title: TypeScript Calculator CLI Documentation**

**Introduction:**
This documentation serves as a guide for understanding and utilizing a calculator program developed using TypeScript with a Command Line Interface (CLI). The calculator program allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

**Installation:**
Before using the calculator program, ensure that TypeScript and inquirer are installed on your system. You can install them using the following commands:

```
npm install -g typescript
npm install inquirer
npm install --save-dev @types/inquirer
```

**Usage:**
1. **Understanding the Code:**
   The calculator program is written in TypeScript and utilizes the inquirer library for obtaining user input via the command line interface.
   
2. **Reading the Code:**
   It is recommended to carefully read the provided TypeScript code to understand its functionality. Pay attention to the structure, function calls, and logic implemented.

3. **Executing the Program:**
   After understanding the code, execute the program by running the TypeScript file. Use the following command:
   
   ```
   tsc filename.ts && node filename.js
   ```
   Replace `filename.ts` with the name of your TypeScript file.

4. **Performing Calculations:**
   Once the program is running, the user will be prompted to enter the first number, followed by an arithmetic symbol (+, -, *, or /), and then the second number. After entering the inputs, the program will display the result of the calculation.

5. **Continuing Calculations:**
   After each calculation, the user is given the option to perform another calculation or exit the program.

**Code Explanation:**
- **getUserInput():** This function prompts the user to enter the first number, arithmetic symbol, and the second number. It returns an object containing these inputs.
- **calculate():** This function orchestrates the calculation process. It repeatedly calls getUserInput() to get user input and performs calculations based on the provided numbers and arithmetic symbol.

**Arithmetic Operations:**
The calculator supports the following arithmetic operations:
- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)

**Error Handling:**
The program includes basic error handling for invalid arithmetic symbols.

**Conclusion:**
This documentation provides an overview of the TypeScript calculator program with a Command Line Interface. By following the installation steps and understanding the code, users can utilize the calculator to perform basic arithmetic calculations conveniently from the command line.
