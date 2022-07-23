import { createContext, useEffect, useState, useContext } from "react";
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged, 
    updateCurrentUser,
    GoogleAuthProvider,
    signInWithPopup,} 
    from "firebase/auth";
import { auth } from "../firebase";
import { Spinner } from "react-bootstrap";


const userAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const [pending, setPending] = useState(true);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = (e) => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setPending(false);
        }); 
        return () => {
            unsubscribe();
        }
    }, []);

    if (pending) {
        return <Spinner animation="border" role="status" className="d-flex align-items-center p-10 m-10 ml-10">
             <span className="visually-hidden">Loading...</span>
        </Spinner>
    }
    return <userAuthContext.Provider value={ {user, signUp, logIn, logOut } }>{ children }</userAuthContext.Provider>
    
}

export const useUserAuth = () => {
    return useContext(userAuthContext);
}