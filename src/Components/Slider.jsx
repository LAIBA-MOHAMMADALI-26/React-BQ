import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectFade } from 'swiper';
import { Link } from 'react-router-dom'




export default function Slider() {




  return (
    <Swiper style={{ backgroundColor: 'none'}}
    modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      spaceBetween={0}
      effect="fade"
      slidesPerView={1}
      navigation
      pagination={{ clickable: true  }}
      scrollbar={{ draggable: true }}
    // onSlideChange={() => console.log('slide change')}
    // onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide >
    <div className="home-banner-text "  style={{position: 'relative', top: '150px',  zIndex: '99'}}>
    <h1 className='text-center' style={{ fontSize : '50px' }}  >AL SMART STORE</h1>
    <h2 className='text-center' style={{ fontSize : '50px' }}>Shop smarter – shop online!</h2>
    <Link  className="btn btn-primary  text-uppercase mt-4 "to='/products' style={{position: 'relative', left: '600px', fontSize : '30px',border :'2px solid white'  }}>
     Shop Now
    </Link>
  </div>

  
        
    <img src="https://www.logistica360.pe/wp-content/uploads/2023/04/E-commerce-en-Peru-crecio-30-en-el-2022-alcanzando-US-12.1-mil-millones-.jpg" alt=""  style={{ width:'100%' , height: '100vh ',position: 'absolute', top: '0px' }} />  
    {/* <div className="container"><img src="https://phonebazar.pk/wp-content/uploads/2022/01/Buy-Vivo-Y15s-online-540x540.jpg" alt="" /></div> */}
    </SwiperSlide>
    <SwiperSlide><img src="https://content.pymnts.com/wp-content/uploads/2016/06/online-shopping-price.jpg" alt="" style={{ width:'100%' , height: '100vh '}} /></SwiperSlide>
    <SwiperSlide><img src="https://internetretailing.net/wp-content/uploads/2022/01/Online_shopping1_Thumb.jpg" alt="" style={{ width:'100%', height: '100vh '}}/></SwiperSlide>
    {/* <SwiperSlide>Slide 4</SwiperSlide> */}
    
  </Swiper>
  )
}
