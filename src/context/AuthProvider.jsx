import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase.init';
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const userSignUp = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const userLogin = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleSignin = ()=>{
        return signInWithPopup(auth,provider)
    }
    const userSignout = ()=>{
        setUser(null)
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setUser(currentUser)
            }
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    const userAuth={
        user,
        userSignUp,
        userLogin,
        userSignout,
        googleSignin
    }
    return <AuthContext value={userAuth}>{children}</AuthContext>
};

export default AuthProvider;