
let express = require("express")
let categoryRouter = express.Router()
let {getData} = require("./dbController")


function router(menu){
    
    categoryRouter.route("/").get(async function(req, res){

        let query = {}
        let data = await getData("category", query)

        res.render("category",{title:"Category Page", category:data, menu})
    })
    
    // categoryRouter.route("/details").get(async function(req, res){
    //     await res.send("<h3>Details of category</h3>")
    // })

    return categoryRouter
}



module.exports = router