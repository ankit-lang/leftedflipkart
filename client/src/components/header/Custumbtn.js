import { Button } from "@mui/material";
import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logindialog from "../Login/login";
// import "../../App.css"
const Custumbtn = () => {
  const [open,setopen] = useState(false)

  const opendialog = ()=>{
    setopen(true)
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: 12,
        margin: 20,
      }}
    >
      <Button
        variant="contained"
        onClick={()=>{
          opendialog()
        }}
        style={{
          color: "#2874f0",
          background: "white",
          height: 35,
          textTransform: "none",
          paddingLeft: 15,
          paddingRight: 15,
          fontWeight: "bold",
        }}
      >
        Login
      </Button>
      <p className="head">Become a Seller</p>
      <p className="head">More</p>
      <ShoppingCartIcon style={{ marginTop: 5 }} className="head" />
      <span style={{ margin: 0 }}>cart</span>
      {/* <p className='head' style={{position: 'absolute',right : 174,bottom : -8}}>cart</p> */}
      <Logindialog open={open} setopen={setopen} />
    </div>
  );
};

export default Custumbtn;
