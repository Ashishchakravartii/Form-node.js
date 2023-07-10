const express = require("express");
const router= express.Router();

const record= [
    // {
    //     name:"Ashish",
    //     contact:123456789,
    //     place:"Bhopal"
    // },
]

router.get("/",(req,res)=>{
    res.render("index",{db:record});
})

router.get("/form",(req,res)=>{
    res.render("form")
})
router.post("/form",(req,res)=>{
    record.push(req.body)
    res.redirect("/")
})

module.exports= router;