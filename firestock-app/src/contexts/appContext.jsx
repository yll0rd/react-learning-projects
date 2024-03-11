import {createContext, useMemo, useReducer} from "react";
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
    placeholders: photos,
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
                placeholders: [action.payload.item, ...state.items],
                count: state.count + 1
            }
        case 'setItems':
            return {
                ...state,
                items: action.payload.items,
                placeholders: action.payload.items,
                count: action.payload.items.length
            }
        case 'clearInputs':
            return {...state, inputs: initialState.inputs, isCollapsed: true}
        case 'setInputs':
            return {...state, inputs: { ...state.inputs, ...action.payload}}
        case 'toggleIsCollapsed':
            return {...state, isCollapsed: action.payload.bool}
        case 'FilterItems':
            return {
                ...state,
                items: action.payload.results
            }
    }
}

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const read = async () => {
        const items = await readDoc("stocks")
        dispatch({ type: "setItems", payload: { items } })
        return items
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const filterItems = input => {
        if (input === "" || !input) {
            dispatch({ type: "setItems", payload: { items: state.placeholders } })
        }
        let list = state.placeholders.flat()
        let results = list.filter((item => {
            const name = item.title.toLowerCase();
            const searchInput = input.toLowerCase()
            return name.indexOf(searchInput) > -1
        }))
        dispatch({ type: "FilterItems", payload: { results } })
    }


    const contextValues = useMemo(() => {
        return {
            state,
            dispatch,
            read,
            filterItems,
        };
    }, [state, dispatch, read, filterItems]);
    return (<AppContext.Provider value={contextValues}>
        {children}
    </AppContext.Provider>
    )
}

export default AppContextProvider