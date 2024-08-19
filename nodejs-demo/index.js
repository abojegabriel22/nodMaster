// import fs from "fs"

// fs.writeFile("./demo-file.txt", "Hello world!!! file created by Nodejs", {encoding: "utf-8"}, function(){
//     console.log("file created!!!")
// })

// import os from "os"
// console.log("platform: "+ os.platform())
// console.log("Architecture:"+ os.arch())

import time, { creatNewFile, version } from "./utils/fs.js"
import log from "./utils/message.js"

creatNewFile("./demo.txt", "Hello world", function(){
    log("file created successfully!")
})
log(version, time)

