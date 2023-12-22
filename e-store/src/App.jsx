import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [results, setResults] = useState([])
  const [count, setCount] = useState(0)
    useEffect(() => {
        fetch("http://localhost:3001/categories")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setResults(data)
            })
    }, [])

  return (
      <>
      <header>My Store</header>
      <section>
          <nav>
              {
                  results.map(d => (
                      <div key={d.id}>{d.title}</div>
                  ))
              }
          </nav>

      <article>
          Main Area
      </article>
      </section>

      <footer>Footer</footer>
      </>
  );
}

export default App
