import inquirer  from "inquirer";

async function getUserInput() {
    let userInputContinue: boolean = true;
    let numOne: number = 0;
    let symbol: string = '';
    let numTwo: number = 0;

    do {
        const userInputOne = await inquirer.prompt({
            name: "num",
            type: "number",
            message: "Enter Your First Number"
        });

        if (isNaN(userInputOne.num) ) {
            console.log(`invalid number please try again`);
        } else {
            numOne = userInputOne.num;
            userInputContinue = false;
        }
    } while (userInputContinue);

    userInputContinue = true;
    
    do {
        const arithmeticSymbol = await inquirer.prompt({
            name: "symbol",
            type: "input",
            message: "Enter your arithmetic symbol"
        });
    
        if (arithmeticSymbol.symbol === "+" || arithmeticSymbol.symbol === "-" || 
            arithmeticSymbol.symbol === "*" || arithmeticSymbol.symbol === "/") {
                symbol = arithmeticSymbol.symbol;
                userInputContinue = false;
        } else {
            console.log(`Invalid arithmetic symbol, please try again`);
        }
    } while (userInputContinue);

    userInputContinue = true;

    do {
        const userInputTwo = await inquirer.prompt({
            name: "num",
            type: "number",
            message: "Enter Your Second Number"
        });

        if (isNaN(userInputTwo.num)) {
            console.log(`invalid number please try again`);
        } else {
            numTwo = userInputTwo.num;
            userInputContinue = false;
        }
    } while (userInputContinue);

    return {
        numOne: numOne,
        symbol: symbol,
        numTwo: numTwo
    }
}


async function calculate() {
    let continueCalculation: boolean = true;
    do {
        const userInput = await getUserInput();
        const {numOne, symbol, numTwo} = userInput;

        switch (symbol) {
            case "+":
                console.log(`${numOne} + ${numTwo} = ${numOne + numTwo}`);
                break;
            
            case "-":
                console.log(`${numOne} - ${numTwo} = ${numOne - numTwo}`);
                break;

            case "*":
                console.log(`${numOne} * ${numTwo} = ${numOne * numTwo}`);
                break;

            case "/":
                console.log(`${numOne} / ${numTwo} = ${numOne / numTwo}`);
                break;
            default:
                console.log(`Invalid arithmetic symbol`);
                
                break;
        }

        let answer = await inquirer.prompt({
            name: "continue",
            type: "list",
            message: "Do you want to perform another calculation?",
            choices: ["Yes", "No"]
        });

        continueCalculation = answer.continue === "Yes";
    } while (continueCalculation);
}

calculate()