import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Category from "./components/Category.jsx";
import {getCategories, getProducts} from "./fetcher.js";
import CategoryProduct from "./components/CategoryProduct.jsx";
import { Link } from 'react-router-dom';

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
        return categories.data.map(c => {
            return <li key={c.id}><Link to={`/categories/${c.id}`}>{c.title}</Link></li>
            // return <Category id={c.id} title={c.title} key={c.id} onClick={() => handleCategoryClick(c.id)}/>
        })
    }


  return (
      <>
      <header>My Store</header>
      <section>
          <nav>
              { categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
              <ul>
                { categories.data && renderCategories() }
              </ul>
          </nav>

      <main>
          
      </main>
      </section>

      <footer>Footer</footer>
      </>
  );
}

export default App
