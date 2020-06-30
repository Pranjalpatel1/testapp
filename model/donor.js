const mongoose = require('mongoose');
const donorSchema = new mongoose.Schema({
    name:{
		type:String,
		required:true
  },
  gender:{
    type:String,
  required:true
  },
	email:{
		type:String,
		required:true
  },
  blood:{
    type:String,
  required:true
   },
	phone:{
		type:String,
		required:true
    },
   street:{
        type:String,
		required:true
    },
    city:{
        type:String,
		required:true
    },
    state:{
        type:String
    },
    date: {type: String, default: Date.now}
});
 module.exports = mongoose.model('Donor',donorSchema);