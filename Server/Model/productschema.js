import mongoose from "mongoose";

const productschme = new mongoose.Schema({
    id : {type:String,
        required :true,
    unique:true,
    },
    url : String,
    detailUrl : String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discont:String,
    tagline:String,


})

const product = new mongoose.model('product',productschme)
export default product;
