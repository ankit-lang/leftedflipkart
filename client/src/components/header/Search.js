import { InputBase } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search"
import React from 'react'

const Search = () => {
  return (
    <div>
      <InputBase  placeholder=' Search for products,brands and more' style={{ paddingLeft:20,background:"white" ,width:420, marginLeft:10,borderRadius:2}}/>
      {/* <span><SearchIcon/></span> */}
      < SearchIcon style={{marginLeft: -30,color : "blue" ,position : "absolute",height:30}}/>
    </div>
  )
}

export default Search
