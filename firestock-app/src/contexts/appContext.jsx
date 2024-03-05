import {createContext, useReducer } from "react";
import Firestore from "../handlers/firestore.js";

const { readDoc } = Firestore

export const AppContext = createContext()

const photos = [
    // 'https://picsum.photos/id/1001/200/200',
    // 'https://picsum.photos/id/1002/200/200',
    // 'https://picsum.photos/id/1003/200/200',
    // 'https://picsum.photos/id/1004/200/200',
    // 'https://picsum.photos/id/1005/200/200',
    // 'https://picsum.photos/id/1006/200/200'
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
                items: [action.payload.item, ...state.items],
                count: state.count + 1
            }
        case 'setItems':
            return {
                ...state,
                items: action.payload.items,
                count: action.payload.items.length
            }
        case 'clearInputs':
            return {...state, inputs: initialState.inputs, isCollapsed: true}
        case 'setInputs':
            return {...state, inputs: { ...state.inputs, ...action.payload}}
        case 'toggleIsCollapsed':
            return {...state, isCollapsed: action.payload.bool}
    }
}

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const read = async () => {
        const items = await readDoc("stocks")
        dispatch({ type: "setItems", payload: { items } })
        return items
    }

    const contextValues = {
        state,
        dispatch,
        read
    }
    return (<AppContext.Provider value={contextValues}>
        {children}
    </AppContext.Provider>
    )
}

export default AppContextProvider