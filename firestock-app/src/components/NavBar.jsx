import {useAuthContext} from "../contexts/AuthContext.jsx";
import {useContext, useMemo, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {AppContext} from "../contexts/appContext.jsx";


const LogIn = () => {
    const { login, currentUser } = useAuthContext()
    return (
        !currentUser && <button type="button" className="btn btn-warning" onClick={login}>
            Login
        </button>
    );
}

const LogOut = () => {
    const { logout, currentUser } = useAuthContext()
    return (
        currentUser && <button type="button" className="btn btn-danger" onClick={logout}>
            LogOut
        </button>
    );
}


function Navigation() {
    const { pathname } = useLocation()
    const { currentUser } = useAuthContext()
    return(
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* remove all links except HOME */}
            <li className="nav-item">
                <Link className={`nav-link ${pathname === '/' ? "active" : ""}`} aria-current="page" to="/">
                    Home
                </Link>
            </li>
            {currentUser && <li className="nav-item">
                <Link className={`nav-link ${pathname === '/myimages' ? "active" : ""}`} aria-current="page" to="/myimages">
                    My Stocks Images
                </Link>
            </li>}
            {currentUser && <li className="nav-item">
                <Link className={`nav-link ${pathname === '/profile' ? "active" : ""}`} aria-current="page" to="/profile">
                    Profile
                </Link>
            </li>}
        </ul>
    )
}

const SearchForm = () => {
    const [text, search] = useState(null)
    const { filterItems: filter } = useContext(AppContext)
    const handleOnChange = e => {
        search(e.target.value)
        filter(e.target.value)
    }
    const handleOnSubmit = event => {
        event.preventDefault()
        filter(text)
        console.log(`Searching ${text}`)
    }
    return(
        <form className="d-flex">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleOnChange}
            />
            <button className="btn btn-outline-success" type="submit" onClick={handleOnSubmit}>
                Search
            </button>
        </form>
    )
}

const DropDown = () => {
    const { currentUser } = useAuthContext()
    // const username = useMemo(() => currentUser?.displayName || "Profile", [currentUser])
    const username = useMemo(() => currentUser?.displayName, [currentUser])

    const avatar = useMemo(() => {
        return currentUser ?
            <img className="avatar" src={currentUser?.photoURL} alt={currentUser?.displayName} width={34} height={34}/>
            :
            "Login"
    }, [currentUser])

    return( <ul className="navbar-nav mb-2 mb-lg-0">
        {" "}
        {/* remove ms-auto */}
        <li className="nav-item dropdown">
            <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {avatar}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                    <a className="dropdown-item text-center" href="#">
                        {username ? <Link to='/profile'>{username}</Link> : ''}
                    </a>
                    <li><hr className="dropdown divider"/></li>
                </li>
                <div className="d-flex justify-content-center">
                    <LogIn />
                    <LogOut />
                </div>
            </ul>
        </li>
    </ul>)
}



function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    ⚡ Firestock
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {Navigation()}
                    {SearchForm()}
                    {DropDown()}
                </div>
            </div>
        </nav>)
}
export default Navbar