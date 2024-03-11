// eslint-disable-next-line no-unused-vars
import React, {useContext, useEffect, useMemo} from 'react';
import List from "./List.jsx";
import {useAuthContext} from "../contexts/AuthContext.jsx";
import {AppContext} from "../contexts/appContext.jsx";

const Stocks = () => {
    const { state } = useContext(AppContext)
    const { currentUser } = useAuthContext()

    // const items = []
    const items = useMemo(() => {
        const currentUserDisplayName = currentUser?.displayName.split(" ").join("")
        const filtered = state.items.filter(item => item.userName === currentUserDisplayName?.toLowerCase())
        return currentUser ? filtered : []
    }, [currentUser, state.items])

    return (
        <>
            <h1>My Stock Images</h1>
            <List items={items} />
        </>
    )
};

export default Stocks;
