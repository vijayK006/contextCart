import React from 'react'
import Navbar from '../Layouts/Navbar'
import { Col, Container, Row } from 'react-bootstrap'
import ProductListCard from '../Components/ProductListCard'
import Filter_Product from '../Components/Filter-Product'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <>
    <Navbar/>

<div className='breadcrumb-card py-5 bg-light'>
  <h1 className='text-center'>Shop Now</h1>
  <p className='text-center'>Home /  Shop </p>
</div>

<Container className='mt-5 pt-5'> 
<Row>
  <Col md={3}>

<div className='shadow'>
<Filter_Product/>
</div>

  </Col>

  <Col md={9}>
  <ProductListCard/>
  </Col>
</Row>
</Container>

    </>
  )
}

export default Home
