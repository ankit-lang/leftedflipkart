import React from "react";
import { navData } from "../constant/Data";

const Navbar = () => {
  return (
    <>
    <div
      style={{ display: "flex", marginTop: 60,height:80 , justifyContent: "space-evenly" }}
    >
      {navData.map((item) => (
        <div style={{textAlign:"center"}}>
          <img style={{ width: 64 }} src={item.url} alt="" />
          <p style={{ marginTop: -13, fontSize: 14 ,fontWeight:500}}>{item.text}</p>
        </div>
      ))}
    </div>
      
      </>
  );
};

export default Navbar;
