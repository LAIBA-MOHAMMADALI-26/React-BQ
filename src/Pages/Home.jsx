import '../App.css'
import AppBar from '../components/AppBar';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
<<<<<<< HEAD

import FooterSection from '../Components/FooterSection';
import CategorySection from '../Components/CategorySection';
import NewArrivals from '../Components/NewArrivals';
import SpecialOffer from '../Components/SpecialOffer';
import Counter from '../Components/Counter';
import Sale from '../Components/Sale';
import AppBar2 from '../Components/AppBar2';
import Slider from '../Components/Slider';
=======
import HeaderSection from '../components/HeaderSection';
import FooterSection from '../components/FooterSection';
import CategorySection from '../components/CategorySection';

// import AppBar from '../components/AppBar'

>>>>>>> d2ec3b7ea35434d5b11f1d40aaf4fb096352c092


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