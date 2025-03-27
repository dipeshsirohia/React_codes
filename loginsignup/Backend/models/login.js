const mongoose=require('mongoose');

const LoginSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
    },
    gmail:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    }
})

const User=mongoose.model('User',LoginSchema)
module.exports=User;
