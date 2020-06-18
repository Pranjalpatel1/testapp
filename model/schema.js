const mongoose = require('mongoose');
const donor = new mongoose.Schema({
    name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	phone:{
		type:String,
		required:true
    },
    gender:{
        type:String,
		required:true
    },
    blood:{
        type:String,
		required:true
    },
    address:{
        type:String,
		required:true
    },
    city:{
        type:String,
		required:true
    },
    state:{
        type:String,
    },
    date: {type: String, default: Date.now}
});
 module.exports = mongoose.model('Donor',donor);