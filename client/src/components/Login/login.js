import React, { useState } from 'react'
import {Button, Dialog, TextField} from "@mui/material"
import { authenticatesignup } from '../../Service/api';




const Logindialog = ({open,setopen}) => {
  

 
const signupInitialValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  mobile:""
  
};


const [Sign,setsign] = useState(signupInitialValues)

const signupbtn =  async() =>{
  let response = await   authenticatesignup(Sign)
}

 const onInputChange = ( e) =>{
  setsign({...Sign,[e.target.name] : e.target.value})
  console.log(Sign)
 }


  const accountloginsignup ={
    login:{view : "login"},
    signup : {view : "signup"}
  }
  const [account,toogleaccount] = useState(accountloginsignup.login)

  const signup = ()=>{
    toogleaccount(accountloginsignup.signup)
  }

  const closedialog =()=>{
    setopen(false)
    toogleaccount(accountloginsignup.login)
  }
  return (
  <Dialog open={open} onClose={closedialog}>
    <div style={{width:"90vh",height:"85 vh",display:"flex"}}>
      <div style={{background:"blue",width:"20vw"}}>
      <div style={{padding:10,color:"white"}}>
        <h5>Login</h5>
        <p>Get access to your Orders,Wishlist and Recommendation</p>
        </div>
        <img  style={{width:"20vw",position:"relative",}} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png" alt="" />
      </div>
      { account.view === "login"  ?
      <div style={{display:"flex",padding:10,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <TextField style={{marginTop: 20}} variant='standard' label="Enter Email/Mobile number" />
        <TextField style={{marginTop: 0}} variant='standard' label="Enter Password"/>
        <p style={{    fontSize:"10px",marginLeft: "19px"}}>By continuing, you agree to flipkart Term of use and Privacy Policy</p>
        <Button style={{marginTop:13,width:"80%",textTransform:"none",background:"orange",color:"white",}}>Login</Button>
        <p>OR</p>
        <Button style={{textTransform:"none",width:"80%",boxShadow:"0 2px 4px 0 rgb(0 0 0/20%)"}}>Request OTP</Button>
        <p  onClick={()=>signup()} style={{fontSize:"14px",color:"blue",cursor:"pointer"    ,fontWeight: 600}}>New to flipkart? create account</p>
      </div>
        :
        <div style={{display:"flex",width:"70%",padding:10,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <TextField onChange={(e)=>onInputChange(e)} name='firstname' style={{marginTop: -5 ,padding: 2,fontSize: 15}} variant='standard' label="Enter Firstname" />
        <TextField onChange={(e)=>onInputChange(e)} name='lastname' style={{padding: 2,fontSize: 15}} variant='standard' label="Enter Lastname" />
        <TextField onChange={(e)=>onInputChange(e)} name='username' style={{padding: 2,fontSize: 15}} variant='standard' label="Enter USername" />
        <TextField onChange={(e)=>onInputChange(e)} name='email' style={{padding: 2,fontSize: 15}} variant='standard' label="Enter Email" />
        <TextField onChange={(e)=>onInputChange(e)} name='mobile' style={{padding: 2,fontSize: 15}} variant='standard' label="Enter Mobile number" />
        <TextField onChange={(e)=>onInputChange(e)} name='password' style={{padding: 2,fontSize: 15}} variant='standard' label="Enter Password" />
        <Button onClick={()=>signupbtn()}  style={{marginTop:13,width:"80%",textTransform:"none",background:"orange",color:"white",}}>Continue</Button>
      </div>

      }
    </div>

  </Dialog>
  )
}

export default Logindialog
