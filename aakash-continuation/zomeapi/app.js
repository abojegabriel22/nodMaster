import express from "express"
import dotenv from"dotenv"
import cors from "cors"
import bodyParser from"body-parser"
import {dbConnect, getData} from"./controller/dbController"

let app = express()
dotenv.config()
let port = process.env.PORT


app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.send("hello mr")
})

//get citites rout
app.get("/location", async(req, res)=>{
    let query = {}
    let collection = "location"
    let output = await getData(collection, query)
    res.status(200).send(output)
})

// get restaurants
app.get("/restaurants", async (req, res) => {
    let query = {}
    let collection = "restaurants"
    let output = await getData(collection, query)
    res.status(200).send(output)
})








app.listen(port, function(){
    dbConnect()
    console.log(`Server listening on port ${port}`)
})