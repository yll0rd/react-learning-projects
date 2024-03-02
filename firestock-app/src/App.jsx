import { useState, useEffect, useReducer } from 'react'
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

const initialState = {
    items: photos,
    length: photos.length,
    inputs: {title: '', file: '', path: '', fileValue: ''},
    isCollapsed: true
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'setItem':
            return {...state, items: [state.inputs.path, ...state.items]}
        case 'clearInputs':
            return {...state, inputs: initialState.inputs, isCollapsed: true}
        case 'setInputs':
            return {...state, inputs: { ...state.inputs, ...action.payload}}
        case 'toggleIsCollapsed':
            return {...state, isCollapsed: action.payload.bool}
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { items, inputs, isCollapsed } = state
    const toggle = (bool) => dispatch({ type: 'toggleIsCollapsed', payload: {bool: bool}})
    const [countText, setCountText] = useState('')


    useEffect(() => {
        console.log(state)
    }, [state])

    useEffect(() => {
        setCountText(`You have ${items.length} image${items.length > 1 ? 's' : ''}`)
    }, [items.length]);

    const handleUploadFormOnChange = (event) => {
        if (event.target.name === 'title')
            dispatch({type: 'setInputs', payload : { title: event.target.value }})
        else if (event.target.name === 'file') {
            const file = event.target.files[0]
            dispatch({type: 'setInputs', payload : { file, path: URL.createObjectURL(file), fileValue: event.target.value }})
        }
    }

    const handleUploadFormSubmit = (event) => {
        event.preventDefault()
        dispatch({ type: 'setItem' })
        dispatch({ type: 'clearInputs' })
    }

  return (
    <>
        <Navbar />
        <div className="container text-center mt-5">
            <button className='btn btn-success float-end' onClick={() => toggle(!isCollapsed)}>{isCollapsed ? '+ Add' : 'Close' }</button>
            <div className='clearfix mb-4'></div>
            { !isCollapsed && <UploadForm handleUploadFormOnChange={handleUploadFormOnChange} input={inputs} handleUploadFormSubmit={handleUploadFormSubmit} /> }
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
