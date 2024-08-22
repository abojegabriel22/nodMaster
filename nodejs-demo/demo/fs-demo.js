import chalk from "chalk"
import fs from "fs"
import path from "path"

function getLibraryData(){
    const filename = "./demo/library.json"
    fs.readFile(filename, "utf-8", function(err, data){
        if(err){
            console.log(chalk.bgGrey(chalk.yellow("Error while trying to read file")))
        }

        const library = JSON.parse(data)
        console.log(library)
        library.isPublished = false
        fs.writeFile(filename, JSON.stringify(library), "utf-8", function(){
            console.log("new file written successfully")
        })
        // console.log(library)
    })
}
getLibraryData()