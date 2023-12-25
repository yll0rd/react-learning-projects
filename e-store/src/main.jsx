import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductDetails from "./components/productDetails.jsx";
import Cart from "./components/cart.jsx";
import Checkout from "./components/checkout.jsx";
import Category from './components/Category.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<App />}/>
              <Route path='/products/:productId' element={<ProductDetails />}/>
              <Route path='/checkout' element={<Checkout />}/>
              <Route path='/cart' element={<Cart />}/>
              <Route path='/categories/:categoryId' element={<Category />}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
