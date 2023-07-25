import React from 'react'
import {AppBar, Toolbar,styled,Box} from "@mui/material"
import Search from './Search'
import Custumbtn from './Custumbtn'
// import { yellow } from '@mui/material/colors'
const Styleheader = styled(AppBar)`
background : #2874f0;
height : 55px;
`
const BOX = styled(Box)`
margin-left:5%;
line-height: 0;
margin-right:15px;
`



const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <div>
      <Styleheader>
        <Toolbar style={{minHeight: 55}}>
            <BOX>
                <img src={logoURL} alt="LOGO" style = {{width:75}}/>
                <div style={{display: "flex"}} >
                <p style = {{fontSize : 10 , fontStyle: 'italic'}}>Explore &nbsp;<span style= {{color: "yellow"}}>plus</span></p>
                <img style={{width : 10 , height: 10 , marginLeft :5}} src={subURL} alt="LOGO" />
                </div>
            </BOX>
            <Search/>
            <Custumbtn/>
        </Toolbar>
      </Styleheader>
    </div>
  )
}

export default Header
