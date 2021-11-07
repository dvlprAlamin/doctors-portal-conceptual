import firebaseInitialize from "../firebase/firebase.init";
import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, getIdToken } from 'firebase/auth'


firebaseInitialize();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isAdmin, setIsAdmin] = useState(false)
    const [loading, setLoading] = useState(true)
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const logout = () => {
        return signOut(auth)
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => localStorage.setItem('idToken', idToken))
            } else {
                setUser({})
            }
            setLoading(false)
        })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/isAdmin?email=${user.email}`)
            .then(res => res.json())
            .then(data => setIsAdmin(data))


    }, [user.email])

    console.log(isAdmin)
    return {
        googleSignIn,
        user,
        logout,
        loading,
        isAdmin

    }
}

export default useFirebase;