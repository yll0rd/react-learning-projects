import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {getCategories} from "./fetcher.js";
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import ProductDetails from './components/productDetails.jsx';
import Category from './components/Category.jsx';
import Cart from './components/cart.jsx';
import Checkout from './components/checkout.jsx';
import Home from './components/Home.jsx';

function App() {
    const [categories, setCategories] = useState({errorMessage: '', data: []})
    useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getCategories();
            setCategories(responseObject)
        }
        fetchData()
    }, [])


  return (
      <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout categories={categories} />}>
                    <Route index element={<Home />}/>
                    <Route path='/products/:productId' element={<ProductDetails />}/>
                    <Route path='/checkout' element={<Checkout />}/>
                    <Route 
                        path='/cart' 
                        element={<Cart />}
                    />
                    <Route 
                        path='/categories/:categoryId' 
                        element={<Category />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
      </>
  );
}

export default App
