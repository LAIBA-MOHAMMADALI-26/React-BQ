import '../App.css'
import AppBar from '../Components/AppBar';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';

import FooterSection from '../Components/FooterSection';
import CategorySection from '../Components/CategorySection';
import NewArrivals from '../Components/NewArrivals';
import SpecialOffer from '../Components/SpecialOffer';
import Counter from '../Components/Counter';
import Sale from '../Components/Sale';
import AppBar2 from '../Components/AppBar2';
import Slider from '../Components/Slider';


function Home() {

 


  return (

   < >
<div className="container-fluid mx-0 px-0 bg-dark text-white">

<AppBar/>

  <AppBar2/>



 <Slider/>

<NewArrivals/>

<Sale/>

<SpecialOffer/>

<CategorySection/>


<Counter/>



<FooterSection/>


</div>
  
   </>
  )

}

export default Home