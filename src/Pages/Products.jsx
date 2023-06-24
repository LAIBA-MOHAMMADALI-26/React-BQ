import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
<<<<<<< HEAD
=======
import '/src/css/products.css'
>>>>>>> d2ec3b7ea35434d5b11f1d40aaf4fb096352c092
export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then(json => setProducts(json.data.products))
  }, [])

  return (
<<<<<<< HEAD
    <div className="container">
      <div className="my-5 text-center">
        <h1>Products</h1>
        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos perferendis ipsum neque id culpa.</p>
=======
    <>

    <div className="container-fluid product">
      <div className="my-5 text-center">
        <h1>PRODUCTS</h1>
        <img src="/src/img1.png" alt="" />
        <p className="text-secondary text-white">The page displaying all products in the e-commerce store, often referred to as the "Product Listing" or "Shop" page, serves as a central hub where customers can browse and explore the range of products available for purchase. </p>
>>>>>>> d2ec3b7ea35434d5b11f1d40aaf4fb096352c092
      </div>


      <div className="container">
        <div className="row">

          {
            products.map((product, key) =>
              <div className="col-md-4" key={key}>
                <Link to={`/products/${product.id}`} className='text-decoration-none'>
<<<<<<< HEAD
                  <Card>
=======
                  <Card className='car'>
>>>>>>> d2ec3b7ea35434d5b11f1d40aaf4fb096352c092
                    <Card.Img variant="top" src={product.thumbnail} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>{product.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            )
          }

        </div>
      </div>
    </div>
<<<<<<< HEAD
=======
    </>
>>>>>>> d2ec3b7ea35434d5b11f1d40aaf4fb096352c092
  )
}
