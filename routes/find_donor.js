const express = require('express');
const router= express.Router();
const config = require('config');
const mongoose = require('mongoose')
const Donor = require('../model/donor');
let p=[];
router.get("/find",function(req,res){
    res.render("find.ejs",{datas: p });
});

router.post("/find",async (req,res)=>{
    console.log(req.body);
    let q={
        "blood":req.body.blood
    }
    if(req.body.city)
    {
        q.city=req.body.city
    }
    const data= await Donor.find(q);
    console.log(data);
    res.render("find.ejs",{datas:data})
});

module.exports=router;