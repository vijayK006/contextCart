import React, { useContext, useEffect, useState } from 'react'
import { ProductProvider } from '../Context/ContextProvider'

const Filter_Product = () => {
    const [inputValue, setInputValue] = useState(null)

    const { productCategories, setcheckedItem, productList } = useContext(ProductProvider)

    const [filteredList, setFilteredList] = useState(productList);

    useEffect(() => {
        let filteredProduct = productList;


        if (inputValue) {
        const convertedText = inputValue.toLowerCase();
            filteredProduct = filteredProduct.filter((items) => items.title.toLowerCase().includes(convertedText))
        }
        setFilteredList(filteredProduct);
        console.log(filteredProduct)
    }, [inputValue, productList])



    return (
        <>

            <input type='text' placeholder='Search product here ...' name='' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />


            {/* <button type='button' onClick={handleSearch}>Search</button> */}

            {
                productCategories.map((item, index) => (
                    <div className='d-flex form-continer py-2' key={index}>
                        <input
                            type='radio'
                            name="category"
                            id={item}
                            value={item}
                            onChange={(e) => setcheckedItem(e.target.value)}
                        />

                        <label for={item}>{item}</label>

                    </div>

                ))
            }

            <div className='d-flex form-continer py-2'>
                <input
                    type='radio'
                    name="category"
                    id='reset'
                    onChange={() => setcheckedItem(null)}
                />

                <label for='reset'>Reset</label>

            </div>

            <div>
                {filteredList.length > 0 ? (
                    filteredList.map((product) => (
                        <div key={product.id}>
                            <h3>{product.title}</h3>
                        </div>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>

        </>
    )
}

export default Filter_Product
