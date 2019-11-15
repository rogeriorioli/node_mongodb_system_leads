 
const mongoose = require('mongoose')


const leadSchema = new mongoose.Schema({
   name :  {
     type : String,
     require : true
   },
   email :  {
    type : String,
    require : true
  },
   contacted : {
     type : Boolean,
     default : false
   },    
  createdAt : {
    type : Date,
   default : Date.now
  }
})

mongoose.model('Leads', leadSchema);