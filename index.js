var express = require('express');

var app = express();
var bodyParser = require('body-parser');

const connectDB = require('./config/db');
 connectDB();
 app.use(express.json({extended:false}));

app.use(bodyParser.urlencoded({extended:"true"}));
app.set("view engine","ejs");
app.use(express.static(__dirname +"/public"));


app.get("/",function(req,res){
    res.render("index.ejs");
});


var donateRoute = require('./routes/donate.js');
app.use(donateRoute);


const port=process.env.PORT || 3000;
app.listen(port,()=> console.log(`server running on port $(port)`));