import mongoose from "mongoose";

 const Register =  new mongoose.Schema({
    username:String,
    email:{String,required:true,unique:true},
    password:{String,required:true,select:false}
})

export const  Registermodel = mongoose.model('auth',Register);