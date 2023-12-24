// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const CategoryProduct = ({id, title, image, specs, features, price, stock}) => {
    const navigate = useNavigate()
    return (
        <ProductInfoArticle>
            <ProductTitle>
                <Link to={`/products/${id}`}>{title}</Link>
            </ProductTitle>
            <figure>
                <ProductImageContainer>
                    <ProductImageContainerImage src={`./assets/${image}`} alt={title} />
                </ProductImageContainer>
            </figure>
            <aside>
                <ProductInfo>
                    <ProductInfoHeader>Dimensions</ProductInfoHeader>
                    <label> {specs.dimensions} </label>
                </ProductInfo>
                { specs.capacity &&
                <ProductInfo>
                    <ProductInfoHeader>Capacity</ProductInfoHeader>
                    <label> {specs.capacity} </label>
                </ProductInfo>
                }
                { features &&
                <ProductInfo>
                    <ProductInfoHeader>Features</ProductInfoHeader>
                    <ul>
                        {
                            features.map((f, index) => {
                                return <ProductInfoListItem key={`feature-${index}`} >{f}</ProductInfoListItem>
                            })
                        }
                    </ul>
                </ProductInfo>
                }
            </aside>
            <aside>
                <ProductInfoFinancePrice>
                    &pound;{price}
                </ProductInfoFinancePrice>

                <ProductInfoStock>
                    <ProductInfoStockLabel>Stock Level: {stock}</ProductInfoStockLabel>
                    <ProductInfoStockLabel>FREE Delivery</ProductInfoStockLabel>
                </ProductInfoStock>

                <ProductInfoAction>
                    <ProductInfoActionButton>Add to Basket</ProductInfoActionButton>
                </ProductInfoAction>
            </aside>
        </ProductInfoArticle>
    );
};

const ProductInfoArticle = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0.25fr 1fr 0.25fr;
    column-gap: 20px;
`;

const ProductTitle = styled.div`
    grid-column: 1 / span 3;
    color: darkslategray;
    font-weight: bold;
    font-size: 1.5em;
    padding-left: 10px;
`;

const ProductImageContainer = styled.div`
    padding: 10px;
    width: 60%
`;

const ProductImageContainerImage = styled.img`
    height: 100%;
    width: 100%
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProductInfoHeader = styled.h3`
    color: darkslategray;
    font-size: 1em;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 5px;
`;

const ProductInfoListItem = styled.li`
    padding-top: 5px;
`;

const ProductInfoStock= styled.div`
    display: flex;
    flex-direction: column;
    height: 20%;
    width: 30%;
    border-radius: 5px;
    background-color: lightgrey;
    font-size: 1em;
    font-weight: bold;
    margin-top: 20px;
    padding-top: 10px;
    padding-left: 10px;
`;

const ProductInfoStockLabel = styled.label`
    padding-bottom: 5px;
`;

const ProductInfoAction = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProductInfoActionButton = styled.button`
    width: 160px;
    height: 30px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: lightgray;
    border: solid 1px slategrey;
    font-weight: bold;
`;

const ProductInfoFinancePrice = styled.div`
    color: darkslategray;
    font-size: 2em;
    font-weight: bold;
    padding-top: 10px;
`;

export default CategoryProduct;