import {useEffect, useContext} from 'react'
import './App.css'
import Card from "./components/Card.jsx";
import Layout from "./components/Layout.jsx";
import {AppContext} from "./contexts/appContext.jsx";


function App() {
    const { state, read } = useContext(AppContext)
    const { items } = state

    useEffect(() => {
        read("stocks").then(console.log)
    }, []);

  return (
    <>
        <Layout>
            <h1>Gallery</h1>
            <div className='row'>
                {items.map((photo, index) => <Card photo={photo} key={index}/> )}
            </div>
        </Layout>
    </>
  )
}

export default App
