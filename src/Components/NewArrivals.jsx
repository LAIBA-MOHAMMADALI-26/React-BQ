

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import '../App.css'


export default function NewArrivals() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products/category/womens-jewellery').then(json => setProducts(json.data.products))
  }, [])

  return (
    <div className="container ">
      <div className="my-5 text-center">
        <h1 >New Arrivals</h1>
       <hr className='m-auto w-25 h-35 text-white mb-2' style={{ color : 'white' }} />

        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos perferendis ipsum neque id culpa.</p>
      </div>


      <div className="container offers">
        <div className="row offer-overlay">

          {
            products.map((product, key) =>
              <div className="col-md-4 my-1 "  key={key}>
 <span className='bg-danger text-white p-2 ' style={{ position: 'relative', top: '50px', left: '10px', width: '50px', zIndex: '2'}}>New</span>
<Link className='text-decoration-none' to={`/products/${product.id}`}>
<Card>
                    <Card.Img  src={product.thumbnail} />
                   
                  </Card>
     
      </Link>



               
              </div>
            )
          }

        </div>
      </div>
    </div>
  )
}
