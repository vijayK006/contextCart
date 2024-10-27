import axios from 'axios';
import { useEffect, useState } from 'react'

const useProductCategoryList = (checkedItem) => {
const [productCategoriesList, setProductCategoriesList] = useState([]);
let categoriesApi = `https://fakestoreapi.com/products/category/${checkedItem}`;
 console.log(categoriesApi)

 useEffect(() => {
    axios
      .get(categoriesApi)
      .then((res) => setProductCategoriesList(res.data))
      .catch((err) => console.error(err));
  }, [checkedItem]);


  return productCategoriesList;
}

export default useProductCategoryList
