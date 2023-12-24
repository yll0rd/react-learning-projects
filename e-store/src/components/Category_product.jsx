// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link, useNavigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Category_Product = ({id, title, image, specs, features, price, stock}) => {
    const navigate = useNavigate()
    return (
        <article>
            <div className='category-product-title'>
                <Link to={`/products/${id}`}>{title}</Link>
            </div>
            <figure>
                <div className='category-product-image-container'>
                    <img src={`./assets/${image}`} alt={title} />
                </div>
            </figure>
            <aside>
                <div className='category-product-info-dimensions'>
                    <h3>Dimensions</h3>
                    <label> {specs.dimensions} </label>
                </div>
                { specs.capacity &&
                <div className='category-product-info-capacity'>
                    <h3>Capacity</h3>
                    <label> {specs.capacity} </label>
                </div>
                }
                { features &&
                <div className='category-product-info-features'>
                    <h3>Features</h3>
                    <ul>
                        {
                            features.map((f, index) => {
                                return <li key={`feature-${index}`} >{f}</li>
                            })
                        }
                    </ul>
                </div>
                }
            </aside>
            <aside className='category-product-finance'>
                <div className='category-product-finance-price'>
                    &pound;{price}
                </div>

                <div className='category-product-info-stock'>
                    <label>Stock Level: {stock}</label>
                    <label>FREE Delivery</label>
                </div>

                <div className='category-product-action'>
                    <button onClick={() => navigate((`products/${id}`))}>View product</button>
                    <button>Add to Basket</button>
                </div>
            </aside>
        </article>
    );
};

export default Category_Product;