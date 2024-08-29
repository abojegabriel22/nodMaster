
let express = require("express")
let productsRouter = express.Router()
let {getData} = require("./dbController")

function router(menu){

    productsRouter.route("/").get(async function(req, res){

        let query = {}
        let data = await getData("products", query)
        res.render("products", {title: "Products Page",Products:data,menu})
    })

    productsRouter.route("/list/:id").get(async function(req, res){
        let id = req.params.id
        let query = {"category_id":Number(id)}

        let data = await getData("products", query)
        res.render("products", {title: "Products Page",Products:data,menu})
        // console.log(req.params.id)
        // res.send("Ok")
    })
    
    productsRouter.route("/details").get (function(req, res){
        res.send("<h3>Details of products</h3>")
    })

    return productsRouter
}



module.exports = router