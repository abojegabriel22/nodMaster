// let express = require("express")
// let request = require("request")
import express from "express"
import request from "request"
let port = 1212
let app = express()

app.get("/weather", function(req, res){
    let city = req.query.city?req.query.city: "Abuja"
    let url = `https://api.openweathermap.org/data/2.5/forecast/daily/?q=${city}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    //api calling
    request(url, function(err, response){
        if(err) throw err
        const output = JSON.parse(response.body)
        res.send(output)
    })
})



app.listen(port, function(err){
    if(err) throw err
    console.log("App is running on port "+ port)
})








// https://api.openweathermap.org/data/2.5/forecast/daily/?q=abuja&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29