import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useProductCategory = () => {
const [productCategories, setProductCategories] = useState([]);
let categoriesApi = `https://fakestoreapi.com/products/categories`;
 
useEffect(()=>{
    axios.get(categoriesApi)
    .then(res=> {
        setProductCategories(res.data);
    })
    .catch(err=> console.log(err))
},[categoriesApi])

  return productCategories;
}

export default useProductCategory
