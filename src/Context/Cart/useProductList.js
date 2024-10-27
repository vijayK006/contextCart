import axios from 'axios'
import { useEffect, useState } from 'react'

const useProductList = () => {
    const [productList, setProductList] = useState([])
    let productApi = `https://fakestoreapi.com/products`

    useEffect(() => {
        axios.get(productApi)
            .then(res => {
                setProductList(res.data)
            })
            .catch(err => console.error(err))
    }, [productApi])

  return productList 
}

export default useProductList
