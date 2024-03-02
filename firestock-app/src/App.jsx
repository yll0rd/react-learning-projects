import { useEffect, useReducer, useMemo} from 'react'
import './App.css'
import Card from "./components/Card.jsx";
import Layout from "./components/Layout.jsx";


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
    count: photos.length,
    inputs: {title: '', file: '', path: '', fileValue: ''},
    isCollapsed: true
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'setItem':
            return {
                ...state,
                items: [state.inputs.path, ...state.items],
                count: state.count + 1
            }
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


    useEffect(() => {
        console.log(state)
    }, [state])

    const countText = useMemo(() => {
        return `You have ${state.count} image${state.count > 1 ? 's' : ''}`
    }, [state.count])

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
        <Layout
            isCollapsed={isCollapsed}
            onSubmit={handleUploadFormSubmit}
            onChange={handleUploadFormOnChange}
            countText={countText}
            toggle={toggle}
            inputs={inputs}
        >
            <h1>Gallery</h1>
            <div className='row'>
                {items.map((photo, index) => <Card photoSrc={photo} key={index}/> )}
            </div>
        </Layout>

    </>
  )
}

export default App
