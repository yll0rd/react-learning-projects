// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react'
import './App.css';
import Layout from "./components/Layout.jsx";
import AppContextProvider from "./contexts/appContext.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useAuthContext} from "./contexts/AuthContext.jsx";
import Home from "./components/Home.jsx";
import Stocks from "./components/Stocks.jsx";


function App() {
    const { authenticate } = useAuthContext()

    useEffect(() => {
        authenticate();
    }, []);


  return (
    <>
        <AppContextProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={<Home />} />
                        <Route path="/stocks" element={<Stocks/>}/>
                    </Route>
                </Routes>
            </Router>
        </AppContextProvider>
        {/*<Layout />*/}
    </>
  )
}

export default App
