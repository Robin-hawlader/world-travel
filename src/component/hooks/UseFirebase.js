import { initializeAuthentication } from "../firebase/firebase-init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";


initializeAuthentication();


const UseFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState('')
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const signInWithgoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, GoogleProvider)
            .finally(() => { setIsLoading(false) })

    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })

        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                alert(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    return {
        user,
        isLoading,
        setIsLoading,
        signInWithgoogle,
        logOut
    }

};

export default UseFirebase;