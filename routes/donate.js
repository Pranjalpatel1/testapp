const express = require('express');
const router= express.Router();
const config = require('config');
const mongoose = require('mongoose')
const Donor = require('../model/donor');
//const Donor = mongoose.model("Donor");


router.get("/donate",function(req,res){
    res.render("donate.ejs");
});
router.post("/donate",(req,res)=>{
    console.log(req.body);
   /* const email= req.body.email.toString();
    let userEmail= await donor.findOne({email:email});
    const phone= req.body.phone.toString();
    let userPhone= await donor.findOne({email:email});
    console.log(user);
    //console.log(email);
    if(userEmail||userPhone)
    {
       return res.status(422).json({error:"donor already exists"});
    }
    else{
       let person = new donor();
       person=req.body;
       await person.save();
    }*/
   /* function p(){
    return new Promise((resolve,reject)=>{
    const email= req.body.email.toString();
    let userEmail= Donor.findOne({email:email});
    console.log(userEmail);
    console.log(Donor);

    if( Donor.findOne({email:email}))
    { 
        console.log("pagaal");
        reject("user already exist");
    }

    else{
        resolve("no such user");
        console.log("helllllllo");
    }
    })
}
   p().then((message)=>{
    let person = new Donor();
    person=req.body;
    person.save();
    console.log(person);
   }).catch((error)=>{
    return res.status(422).json({error:error});
   })
*/
const email= req.body.email.toString();
let findval=1;
Donor.findOne({email:email})
	.then((savedUser)=>{
		if(savedUser){
            findval=0;
			return res.status(422).json({error:"user already exists with that email"})
        }
    }).then(()=>{
        const phone= req.body.phone.toString();
        Donor.findOne({phone:phone})
        .then((savedUser)=>{
            if(savedUser){
                findval=0;
                return res.status(422).json({error:"user already exists with that phone"})
            }
        }).then(()=>{
            if(findval)
            {
    let person = new Donor(req.body);
    person.save()
    console.log(person);
            }
      }).catch(err=>{
        console.log(err)
    })
 })
 });

 module.exports=router;