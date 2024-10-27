import axios from "axios";
import { useEffect, useState } from "react";

const useProductDetails =(id)=>{

    const [productDetails, setProductDetails] = useState([])
useEffect(()=>{
axios.get(`https://fakestoreapi.com/products/${id}`)
.then(res=> {
    let responseData = res.data;
    setProductDetails(responseData)
})
.catch(err=> console.error(err))
},[id])

    return productDetails;
}

export default useProductDetails;