import time from "./fs.js"
import chalk from "chalk"

export default function printMessage(message){
    console.log(`${chalk.green(message)}: ${chalk.blue(time())}`)
}