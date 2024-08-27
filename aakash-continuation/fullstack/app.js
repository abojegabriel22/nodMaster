let express = require("express")
let app = express()
let port = 1110

let menu = [
    {
        link: "/", name: "Home"
    },
    {
        link: "/category", name: "Category"
    },
    {
        link: "/products", name: "Products"
    }
]

let categoryRouter = require("./src/controller/categoryRouter") (menu)
let productsRouter = require("./src/controller/productRouter") (menu)

//static file path
app.use(express.static(__dirname+"/public"))
//ejs file path
app.set("views","./src/views")
// view engine
app.set("view engine", "ejs")


//default route
app.get('/', (req, res) => {
    res.render("index",{title: "Home page"})
})


app.use("/products", productsRouter)
app.use("/category", categoryRouter)

app.listen(port, function(err){
    if (err) throw err
    console.log(`Server listening on port ${port}`)
})