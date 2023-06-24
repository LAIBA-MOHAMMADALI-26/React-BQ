

import React from 'react'
import '../App.css'
import CountUp from 'react-countup'




export default function Counter() {
  return (
    <>
    
    
    <section id="stats-counter" className="stats-counter">
      <div className="container" data-aos="zoom-out">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
            <h1  className="purecounter"><CountUp start={0} end={900} duration={5} delay={0}/></h1>
              
              <p>Products </p>
            
            </div>
          </div>
          {/* End  Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <h1  className="purecounter"><CountUp start={0} end={521} duration={5} delay={0}/></h1>
              
              <p>NeW Arrivals</p>
            </div>
          </div>
          {/* End  Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
            <h1  className="purecounter"><CountUp start={0} end={450} duration={5} delay={0}/></h1>
              
              <p>Offers</p>
            </div>
          </div>
          {/* End Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
            <h1  className="purecounter"><CountUp start={0} end={250} duration={5} delay={0}/></h1>
              
              <p>Categories</p>
            </div>
          </div>
          {/* End Item */}
        </div>
      </div>
    </section>
   
  </>
  
  )
}
