import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Category from "./components/Category.jsx";
import {getCategories, getProducts} from "./fetcher.js";
import CategoryProduct from "./components/CategoryProduct.jsx";

function App() {
    const [categories, setCategories] = useState({errorMessage: '', data: []})
    const [products, setProducts] = useState({errorMessage: '', data: []})
    useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getCategories();
            setCategories(responseObject)
        }
        fetchData()
    }, [])

    const handleCategoryClick = id => {
        const fetchData = async () => {
            const responseObject = await getProducts(id);
            setProducts(responseObject)
        }
        fetchData()
    }

    const renderCategories = () => {
        return categories.data.map(c => (
            <Category id={c.id} title={c.title} key={c.id} onClick={() => handleCategoryClick(c.id)}/>
        ))
    }

    const renderProducts = () => {
        return products.data.map(p => (
            <CategoryProduct {...p} key={p.id} />
        ))
    }

  return (
      <>
      <header>My Store</header>
      <section>
          <nav>
              { categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
              { categories.data && renderCategories() }
          </nav>

      <article>
          { products.errorMessage && <div>Error: {products.errorMessage}</div>}
            <h1>Products</h1>
          { products && renderProducts() }
      </article>
      </section>

      <footer>Footer</footer>
      </>
  );
}

export default App
