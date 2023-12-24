import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../fetcher';

const ProductDetails = () => {
    const [products, setProducts] = useState({errorMessage: '', data: []})
    const {productId} = useParams();

    React.useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProductById(productId)
            setProducts(responseObject);
        }
        fetchData();
    }, [productId])

    return (
        <div>ProductDetail {productId} title:{products.data.title}</div>
    );
};

export default ProductDetails;