import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ProductProvider } from '../Context/ContextProvider';
import { Link } from 'react-router-dom';
const ProductListCard = () => {
  const { productList, productCategoriesList } = useContext(ProductProvider);
  return (
    <>

      <Row>

        {productCategoriesList.length > 0 ? (
          productCategoriesList.map((items, index) => (
            <Col md={4} key={index} className='my-3'>
            <Link to={`/product-details/${items.id}`}>
               <div className='card p-2 h-100 cart-items'>
                <div className='card-img'>
                  <img src={items.image} alt={items.category} />
                </div>
                <span>{items.rating.rate} - reviews ({items.rating.count}) </span>
                <h6 className='text-center'>{items.title}</h6>
                <p className='text-center'>{items.category}</p>
                <p className='price text-center'>${items.price}</p>
              </div>
            </Link>
             
            </Col>
          ))
        ) : (
          productList.map((items, index) => (
            <Col md={4} key={index} className='my-3'>
            <Link to={`/product-details/${items.id}`}>
                 <div className='card p-2 h-100 cart-items'>
                <div className='card-img'>
                  <img src={items.image} alt={items.category} />
                </div>
                <span>{items.rating.rate} - reviews ({items.rating.count}) </span>
                <h6 className='text-center'>{items.title}</h6>
                <p className='text-center'>{items.category}</p>
                <p className='price text-center'>${items.price}</p>
              </div>
            </Link>
           
            </Col>
          ))
        )}



      </Row>
    </>

  )
}

export default ProductListCard
