

// express
const express=require("express");
// connection for config
const {connection} =require("./config/db");
// product route from router

const ProductRoute=require("./routes/product.route");

const app=express();

app.use(express.json());


// products route

app.use("/products",ProductRoute);


app.get("/",(req,res)=>{
    res.send("HomePage");
})

app.get("/about",(req,res)=>{
    res.send("AboutPage");
})

app.listen(8001,async()=>{
    try{
        await connection
        console.log("Connected to DB Successfully")
    }
    catch(err){
        console.log("Connection failed");
        console.log(err);
    }
    console.log("Listening to Port 8001");
})
