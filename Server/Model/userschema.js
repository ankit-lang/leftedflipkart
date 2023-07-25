import mongoose from "mongoose";



const userschema = mongoose.Schema({
    firstname: {
        type :String,
        trim :true,
        required : true,
        min :5,
        max :20,

    },
    lastname: {
        type :String,
        trim :  true,
        required : true,
        min :5,
        max :20,

    },
    username: {
        type :String,
        required : true,
        lowercase : true,
        unique : true,
        trim :  true,
        max :20,

    },
    email: {
        type :String,
        required : true,
        unique : true,
         lowercase :true,
         trim : true,
        

    },
    password: {
        type :String,
        required : true,
       

    },
    mobile: {
        type :Number,
        unique : true,
        required : true,
       

    },



})
const User = mongoose.model("user",userschema)
export default User