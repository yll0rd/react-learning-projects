import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createStore, combineReducers } from "redux"
import allReducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);


// // STORE -> GLOBALIZED STATE

// // ACTION INCREMENT
// const increment = () => {
//   return {
//     type: 'INCREMENT',
//   }
// }

// // ACTION DECREMENT
// const decrement = () => {
//   return {
//     type: 'DECREMENT',
//   }
// }

// // REDUCER
// const counter = (state=0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// }

// let store = createStore(counter);

// // Display it in the console
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH
// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(decrement())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
