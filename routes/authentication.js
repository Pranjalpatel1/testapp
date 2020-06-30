const express = require('express');
const router= express.Router();
const config = require('config');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose')
const User = require('../model/user');

router.get("/register",function(req,res){
    res.render("register.ejs");
});

router.get("/login",function(req,res){
    res.render("login.ejs");
});
module.exports=router;  

router.post("/register", async (req,res)=>{
    
try{
    const hashedPassword= await bcrypt.hash(req.body.password,10);
    
    console.log(req.body);
     let name=req.body.name;
     let email= req.body.email;
     let password= hashedPassword
    let user = new User({name,
        email,
        password
    });
   console.log(user.password);
 //user.save()
  
    res.redirect('/login');
}
catch{
    
     res.redirect('/register'); 
}

})