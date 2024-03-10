import inquirer  from "inquirer";

async function getUserInput() {
    const numOne = await inquirer.prompt({
        name: "num",
        type: "number",
        message: "Enter Your First Number"
    
    });
    
    const symbol = await inquirer.prompt({
        name: "arithmeticSymbol",
        type: "input",
        message: "Enter your arithmetic symbol"
    });
    
    const numTwo = await inquirer.prompt({
        name: "num",
        type: "number",
        message: "Enter Your Second Number"
    
    });

    return {
        numOne: numOne.num,
        symbol: symbol.arithmeticSymbol,
        numTwo: numTwo.num
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

        continueCalculation = answer.condition === "Yes";
    } while (continueCalculation);
}

calculate()