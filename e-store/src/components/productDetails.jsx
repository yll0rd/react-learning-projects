// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../fetcher';

const ProductDetails = () => {
    const [product, setProduct] = useState({errorMessage: '', data: {}})
    const {productId} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProductById(productId)
            setProduct(responseObject);
        }
        fetchData();
    }, [productId])
    console.log(product)
    return (
        <article>
            <div className='category-product-title'>
                {product.data.title}
            </div>
            <figure>
                <div className='category-product-image-container'>
                    <img src={`../assets/${product.data.image}`} alt={product.data.title} />
                </div>
            </figure>
            <aside>
                <div className='category-product-info-dimensions'>
                    <h3>Dimensions</h3>
                    <label> {product.data.specs?.dimensions} </label>
                </div>
                { product.data.specs &&
                <div className='category-product-info-capacity'>
                    <h3>Capacity</h3>
                    <label> {product.data.specs.capacity} </label>
                </div>
                }
                { product.data.features &&
                <div className='category-product-info-features'>
                    <h3>Features</h3>
                    <ul>
                        {
                            product.data.features.map((f, index) => {
                                return <li key={`feature-${index}`} >{f}</li>
                            })
                        }
                    </ul>
                </div>
                }
            </aside>
            <aside className='category-product-finance'>
                <div className='category-product-finance-price'>
                    &pound;{product.data.price}
                </div>

                <div className='category-product-info-stock'>
                    <label>Stock Level: {product.data.stock}</label>
                    <label>FREE Delivery</label>
                </div>

                <div className='category-product-action'>
                    <button>Add to Basket</button>
                </div>
            </aside>

            <div>{ product.data?.description }</div>
        </article>
    );
};

export default ProductDetails;