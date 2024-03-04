import {useEffect, useContext} from 'react'
import './App.css'
import Card from "./components/Card.jsx";
import Layout from "./components/Layout.jsx";
import {AppContext} from "./contexts/appContext.jsx";
import Firestore from "./handlers/firestore.js";

const { readDoc } = Firestore

function App() {
    const { state } = useContext(AppContext)
    const { items } = state

    useEffect(() => {
        console.log(state)
    }, [state])

    useEffect(() => {
        readDoc("stocks").then(console.log)
    }, []);

  return (
    <>
        <Layout>
            <h1>Gallery</h1>
            <div className='row'>
                {items.map((photo, index) => <Card photoSrc={photo} key={index}/> )}
            </div>
        </Layout>
    </>
  )
}

export default App
