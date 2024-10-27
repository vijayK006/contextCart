import { createContext, useState } from "react";
import useProductList from "./Cart/useProductList";
import useProductCategory from "./Cart/useProductCategory";
import useProductCategoryList from "./Cart/useProductCategoryList";
import useProductDetails from "./Cart/useProductDetails";

export const ProductProvider = createContext()

export const ContextWraper = (props) => {

    const productList = useProductList()
    const productCategories = useProductCategory()

    const [checkedItem, setcheckedItem] = useState(null);
    const productCategoriesList = useProductCategoryList(checkedItem)
    const [productDetailsId, setProductDetailsId] = useState(null)
    const productDetails = useProductDetails(productDetailsId)

    return (
        <ProductProvider.Provider value={{
            productList,
            productCategories,
            productCategoriesList,
            setcheckedItem,
            setProductDetailsId,
            productDetails,
            checkedItem
        }}>
            {props.children}
        </ProductProvider.Provider>
    )
}