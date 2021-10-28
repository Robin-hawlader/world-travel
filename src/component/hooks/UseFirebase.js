import { initializeAuthentication } from "../firebase/firebase-init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";


initializeAuthentication();


const UseFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const signInWithgoogle = () => {
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch((error) => {
                alert(error.message)
            })
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })

        return () => unsubscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }
    return {
        user,
        signInWithgoogle,
        logOut
    }

};

export default UseFirebase;