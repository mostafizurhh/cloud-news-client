import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import app from '../../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app); /* to implement any signin method */

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); /* get user info  */

    const providerLogin = (provider) => { /* google or any other login method */
        return signInWithPopup(auth, provider)
    }

    /* observe user activity and unmount user when not needed */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, providerLogin } /* to access all info of authInfo or AuthContext from anywhere else in the website  */


    return (
        /* set AuthContext provider */
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;