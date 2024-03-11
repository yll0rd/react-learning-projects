// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react'
import './App.css';
import Layout from "./components/Layout.jsx";
import AppContextProvider from "./contexts/appContext.jsx";
import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";
import {useAuthContext} from "./contexts/AuthContext.jsx";
import Home from "./components/Home.jsx";
import Stocks from "./components/Stocks.jsx";
import Single from "./components/Single.jsx";
import NotFound from "./components/NotFound.jsx";
import Profile from "./components/Profile.jsx";


const PrivateRoutes = () => {
    const { currentUser } = useAuthContext()
    if (!currentUser) return <NotFound />
    return <Outlet />
}

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
                        <Route element={<PrivateRoutes />}>
                            <Route path="/myimages" element={<Stocks/>}/>
                            <Route path="/profile" element={<Profile />}/>
                        </Route>
                        <Route path="/stocks/:id" element={<Single/>}/>
                        <Route path="*" element={<NotFound />}/>
                    </Route>
                </Routes>
            </Router>
        </AppContextProvider>
        {/*<Layout />*/}
    </>
  )
}

export default App
