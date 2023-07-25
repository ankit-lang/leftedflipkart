import product from "./Model/productschema.js";
import { products } from "./constant/data.js";


const Defaultdata = async ()=>{
    try{
        // await product.deleteMany({})
        // await product.insertMany(products);
        console.log("inserted")
    }
    catch(err){
        console.log(err)
    }

}

export default Defaultdata;