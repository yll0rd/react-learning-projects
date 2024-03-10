import React, {createContext, useContext, useMemo, useState} from 'react';
import FirebaseAuth from "../handlers/auth.js";

const { signIn, signOut, getCurrentUser } = FirebaseAuth
export const AuthContext = createContext()
const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    const login = () => signIn().then(setCurrentUser)

    const logout = () => signOut().then(() => setCurrentUser(null))

    const authenticate = () => getCurrentUser().then(setCurrentUser)

    const contextValues = useMemo(() => {
        return {
            currentUser,
            login,
            logout,
            authenticate
        }
    }, [currentUser, authenticate, login, logout]);
    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext)

export default AuthContextProvider;
