import React from 'react'

import { bannerData } from '../constant/Data'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'


const Banner = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }}
    
  return (
    <div >
    <Carousel autoPlay={true} interval={2000} infiniteLoop={true} showThumbs={false} responsive={responsive}
    >
      
        {
            bannerData.map((item)=>(
              <div>
                <img style={{height:160}} src={item.url} alt="" />
                </div>
                ))
        }
        
        
        </Carousel>
        
        </div>
  )
}

export default Banner
