import User from "../Model/userschema.js";

export const usersignup = async(req,res) => {
    try{
        const exist = user.findone({username : req.body.username}) 
        if(exist){
          return  res.status(401).json({message :"username already exist"})
        }
    const user = req.body

    
    const newuser  = new User(user)
    await newuser.save();
    res.status(200).json({user});
}catch(err){
    res.status(500).json({message:err.message}   )
}

}