import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import {FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)
const facebookProvider = new FacebookAuthProvider()
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    
    const handleFacebookSignIn = () => {
        setIsLoading(true)
       return signInWithPopup(auth, facebookProvider)
    }

    const handleGoogleSignIn = () => {
        setIsLoading(true)
       return signInWithPopup(auth, googleProvider)
    }

    const handleGithubSignIn = () => {
        setIsLoading(true)
       return signInWithPopup(auth, githubProvider)
    }

    const handleSignOut = () => {
        setIsLoading(true)
        return signOut(auth)
    }

    const authInfo = {user, handleFacebookSignIn , handleGoogleSignIn, handleGithubSignIn, handleSignOut, isLoading}
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser)
            setIsLoading(false)
        })
        return () => unsubscribe()
    },[])

    return (
        <>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        </>
    );
};

export default AuthProvider;