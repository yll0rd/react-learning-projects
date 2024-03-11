import React, {useContext, useEffect, useMemo} from 'react';
import {AppContext} from "../contexts/appContext.jsx";
import List from "./List.jsx";

const Home = () => {
    const { state, read } = useContext(AppContext)
    const { count, items } = state

    useEffect(() => {
        read("stocks").then(console.log)
    }, []);

    const countText = useMemo(() => {
        return `You have ${state.count} image${state.count > 1 ? 's' : ''}`
    }, [state.count])

    return (
        <>
            <h1>Gallery</h1>
            {count > 0 && countText}
            <List items={items} />
        </>
    );
};

export default Home;
