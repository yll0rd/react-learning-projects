import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { getProductByQuery } from '../fetcher';
import CategoryProduct from "./CategoryProduct.jsx";

const SearchResult = () => {
    const [products, setProducts] = useState({
        errorMessage: '',
        data: []
    });
    let [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('s')

    useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProductByQuery(query)
            setProducts(responseObject);
        }
        fetchData();
    }, [query])

    const renderProducts = () => {
        return products.data.map(p => (
            <CategoryProduct {...p} key={p.id} />
        ))
    }

  return (
      <div>
          { products.errorMessage && <div>Error: {products.errorMessage}</div>}
          <h1>Products</h1>
          { products && renderProducts() }
      </div>
  )
}

export default SearchResult