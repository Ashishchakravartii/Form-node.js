const express = require("express");
const app= express();
const indexRouter= require("./routes/index")


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(__dirname+"/public"))

app.set("view engine","ejs");
app.set("views",__dirname+"/views");

app.use("/",indexRouter);

app.listen(3000,()=>{
    console.log("Server Running...")
})