import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductProvider } from '../Context/ContextProvider';

const ProductDetails = () => {
    const {setProductDetailsId,productDetails} = useContext(ProductProvider)
    const {id} = useParams();
    setProductDetailsId(id)

  return (
    <>
      <h1>Product details  ID is {id}</h1>
      <p><b>Product name is </b> {productDetails.title}</p>
    </>
  )
}

export default ProductDetails
