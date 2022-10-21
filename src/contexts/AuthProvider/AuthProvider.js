import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app); /* to implement any signin method */

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); /* get user info  */
    const [loading, setloading] = useState(true)/* solve reload issue */

    /* google or any other login method */
    const providerLogin = (provider) => {
        setloading(true)/* solve reload issue  */
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setloading(true)/* solve reload issue  */
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginWithEmail = (email, password) => {
        setloading(true)/* solve reload issue  */
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setloading(true)/* solve reload issue  */
        return signOut(auth)
    }
    /* observe user activity and unmount user when not needed */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser);
            setloading(false) /* solve reload issue */
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, loading, createUser, providerLogin, loginWithEmail, logOut } /* to access all info of authInfo or AuthContext from anywhere else in the website  */


    return (
        /* set AuthContext provider */
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;