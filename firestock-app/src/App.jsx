import {useEffect, useContext} from 'react'
import './App.css'
import Card from "./components/Card.jsx";
import Layout from "./components/Layout.jsx";
import {AppContext} from "./contexts/appContext.jsx";
import {useAuthContext} from "./contexts/AuthContext.jsx";


function App() {
    const { state, read } = useContext(AppContext)
    const { items } = state
    const { authenticate } = useAuthContext()

    useEffect(() => {
        read("stocks").then(console.log)
        authenticate()
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
