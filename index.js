var express = require('express');

var app = express();
const fetch = require("node-fetch");
var bodyParser = require('body-parser');

const connectDB = require('./config/db');
 connectDB();
 app.use(express.json({extended:false}));

app.use(bodyParser.urlencoded({extended:"true"}));
app.set("view engine","ejs");
app.use(express.static(__dirname +"/public"));


app.get("/",async function(req,res){
    try {
    const response = await fetch("https://api.covid19india.org/data.json");
    if(response.status >= 400)
    {
        throw new Error("BAD ");
    }
    const data =await response.json();
    //console.log(data);
    res.render("index.ejs",{data:data.statewise[0]});
    }
    catch(err){
        console.log(err);
        console.log("Ssfdsfgd");
    }
});
require('./model/donor');
require('./model/user');
var authenticate = require('./routes/authentication.js');
app.use(authenticate);
var donateRoute = require('./routes/donate.js');
app.use(donateRoute);
var findRoute = require('./routes/find_donor.js');
app.use(findRoute);
app.get("/india",(req,res)=>
{
    res.render("india.ejs")
});
app.get("/world",(req,res)=>
{
    res.render("world.ejs")
});

const port=process.env.PORT || 3000;
app.listen(port,()=> console.log(`server running on port $(port)`));