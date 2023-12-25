// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../fetcher';
import CategoryProduct from './CategoryProduct';

// eslint-disable-next-line react/prop-types
const Category = ({id, title, onClick}) => {
    const [products, setProducts] = useState({
        errorMessage: '',
        data: []
    });
    const {categoryId} = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProducts(categoryId)
            setProducts(responseObject);
        }
        fetchData();
    }, [categoryId])

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
    );
};

export default Category;
