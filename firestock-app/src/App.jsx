import { useState, useEffect } from 'react'
import './App.css'
import Navbar from "./components/NavBar.jsx";
import Card from "./components/Card.jsx";
import UploadForm from "./components/UploadForm.jsx";


const photos = [
    'https://picsum.photos/id/1001/200/200',
    'https://picsum.photos/id/1002/200/200',
    'https://picsum.photos/id/1003/200/200',
    'https://picsum.photos/id/1004/200/200',
    'https://picsum.photos/id/1005/200/200',
    'https://picsum.photos/id/1006/200/200'
]

function App() {
    const [items, setItems] = useState(photos)
    const [isCollapsed, setIsCollapsed] = useState(true)
    const toggle = () => setIsCollapsed(!isCollapsed)
    const [countText, setCountText] = useState('')

    const initialUploadFormState = {
        title: '', file: '', path: '', fileValue: ''
    }
    const [input, setInput] = useState(initialUploadFormState)

    useEffect(() => {
        setCountText(`You have ${items.length} image${items.length > 1 ? 's' : ''}`)
    }, [items.length]);

    const handleUploadFormOnChange = (event) => {
        if (event.target.name === 'title')
            setInput(prev => ({...prev, title: event.target.value}))
        else if (event.target.name === 'file') {
            const file = event.target.files[0]
            setInput(prev => ({...prev, file, path: URL.createObjectURL(file), fileValue: event.target.value}))
        }
    }

    const handleUploadFormSubmit = (event) => {
        event.preventDefault()
        setItems([input.path, ...items])
        setInput(initialUploadFormState)
        setIsCollapsed(true)
    }

  return (
    <>
        <Navbar />
        <div className="container text-center mt-5">
            <button className='btn btn-success float-end' onClick={toggle}>{isCollapsed ? '+ Add' : 'Close' }</button>
            <div className='clearfix mb-4'></div>
            { !isCollapsed && <UploadForm handleUploadFormOnChange={handleUploadFormOnChange} input={input} handleUploadFormSubmit={handleUploadFormSubmit} /> }
            {countText}
            <h1>Gallery</h1>
            <div className='row'>
                {items.map((photo, index) => <Card photoSrc={photo} key={index}/> )}
            </div>
        </div>
    </>
  )
}

export default App
