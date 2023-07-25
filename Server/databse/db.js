import mongoose from "mongoose"

// mongo passwrd = rankit LZCYEZ5PMTBJjqtz



export const Connection = async (username,password) =>{
    // console.log(username)
    // console.log(password)

    const URL =  `mongodb+srv://${username}:${password}@cluster0.kjezl0f.mongodb.net/?retryWrites=true&w=majority`
    try{
       const connect = await mongoose.connect(URL).then(()=>{
        console.log("connected")
       })
    }catch(error){
        console.log("error in connecting to db",error.message)
    }

}