import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterSection() {
  return (
    <>
    {/* Hello world */}
    <div className="p-3 copyright bg-primary">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 p-1 p-lg-3 text-center text-lg-start">
            <p className="my-0">
              Copyright © 2023 <span className='fs-5'>AL SMART STORE </span>
               All Rights Reserved
            </p>
          </div>
          <div className="col-12 col-lg-6 p-1 p-lg-3 text-center text-lg-end">
            <p>
              Designed by
             
                ATIQA PASHA & LAIBA MOHAMMAD ALI
          
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}
