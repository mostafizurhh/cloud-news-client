import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
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

    /* create new user */
    const createUser = (email, password) => {
        setloading(true)/* solve reload issue  */
        return createUserWithEmailAndPassword(auth, email, password)
    }

    /* send verification email */
    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser)
    }

    /* user login */
    const loginWithEmail = (email, password) => {
        setloading(true)/* solve reload issue  */
        return signInWithEmailAndPassword(auth, email, password)
    }

    /* update user information */
    const updateUserInfo = (info) => {
        return updateProfile(auth.currentUser, info)
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

    const authInfo = { user, loading, createUser, emailVerification, providerLogin, loginWithEmail, updateUserInfo, logOut } /* to access all info of authInfo or AuthContext from anywhere else in the website  */


    return (
        /* set AuthContext provider */
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;