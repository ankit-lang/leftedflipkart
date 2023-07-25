import React from 'react'
import Navbar from './Navbar'
import Banner from '../header/Banner'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
const Component = styled(Box)`
padding: 10px 10px;
background:#FBFBFB


`

const Home = () => {
  return (
    <>
      <Navbar/>
    <Component>
      <Banner/>
      </Component>
    </>
  )
}

export default Home
