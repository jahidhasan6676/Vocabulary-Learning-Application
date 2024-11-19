import { createContext, useEffect, useState } from "react";
import auth from "../utilities/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";



export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // google popup
    const googlePopup = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // sign up user
    const userRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut user
    const userLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //    update profile
    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

    // value pass
    const authInfo = {
        userRegister,
        userLogin,
        user,
        setUser,
        userLogOut,
        googlePopup,
        updateUserProfile
    }


    // observation setup
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscriber();
        }
    }, [])
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;