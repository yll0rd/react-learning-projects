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
        if (products.data.length > 0)
            return products.data.map(p => (
                <CategoryProduct {...p} key={p.id} />
            ))
        else
            return <div>No results Found</div>

    }

  return (
      <div>
          { products.errorMessage && <div>Error: {products.errorMessage}</div>}
        
          { products && renderProducts() }
      </div>
  )
}

export default SearchResult