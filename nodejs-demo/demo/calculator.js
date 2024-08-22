import yargs from "yargs"
import { hideBin } from "yargs/helpers"
import chalk from "chalk"

const {x, y, operation} = yargs(hideBin(process.argv)).argv
console.log(x, y, operation)


if(typeof x !== "number" || typeof y !== "number" || typeof operation !== "string"){
    console.log(chalk.red("Invalid arguments passed"))
}


let result = 0



switch(operation){
    case "+":
        result = x + y
        break

    case "-":
        result = x - y
        break

    case "/":
        result = x / y
        break

    case "*":
        result = x * y
        break

    default:
        break
}


console.log(`Result is:  ${result}`)