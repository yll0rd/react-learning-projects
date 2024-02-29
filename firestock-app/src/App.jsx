import { useState } from 'react'
import './App.css'
import Navbar from "./components/NavBar.jsx";
import Card from "./components/Card.jsx";


const photos = [
    'https://picsum.photos/id/1001/200/200',
    'https://picsum.photos/id/1002/200/200',
    'https://picsum.photos/id/1003/200/200',
    'https://picsum.photos/id/1004/200/200',
    'https://picsum.photos/id/1005/200/200',
    'https://picsum.photos/id/1006/200/200'
]

function App() {

  return (
    <>
        <Navbar />
        <div className="container text-center mt-5">
            <h1>Gallery</h1>
            <div className='row'>
                {photos.map((photo, index) => <Card photoSrc={photo} key={index}/> )}
            </div>
        </div>
    </>
  )
}

export default App
