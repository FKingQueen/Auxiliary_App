import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';
import { db, firebaseAuth } from '../firebaseConfig.js';



export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect(() => {
        // onAuthStateChanged is a function that checks if the user is authenticated
        const unsub = onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                setUser(user);
                setIsAuthenticated(true);
                updateUserData(user.uid);
            } else {
                setUser(null);
                setIsAuthenticated(false);
            }
        });

        return unsub;
    }, []);

    const login = async (email, password) => {
        // login function to authenticate the user
        // setUser(user);
        // setIsAuthenticated(true);
        try {
            const response = await signInWithEmailAndPassword(firebaseAuth, email, password);
            return { success: true};
        } catch (e) {
            let msg = e.message;
            if(msg.includes('(auth/invalid-email)')) msg = "Invalid email address";
            if(msg.includes('(auth/invalid-credential)')) msg = "Invalid Credentials";
            if(msg.includes('(auth/wrong-password)')) msg = "Wrong password";
            return { success: false, msg };
        }
    };

    const updateUserData = async (userId) => {
        // update user data in firestore
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()) {
            const data = docSnap.data();
            setUser({...user, username: data.username, profileUrl: data.profileUrl, userId: data.userId});
            return { success: true, data };
        }
    }

    const logout = async () => {
        // logout function to sign out the user
        // setUser(null);
        // setIsAuthenticated(false);
        try {
            await signOut(firebaseAuth);
            return { success: true };
        } catch (e) {
            return { success: false, msg: e.message, error: e };
        }
    }

    const register = async (email, password, username, profileUrl) => {
        // register function to create a new user
        // setUser(user);
        // setIsAuthenticated(true);
        try {
            const response = await createUserWithEmailAndPassword(firebaseAuth, email, password);
            console.log('response.user', response.user);

            await setDoc(doc(db, "users", response?.user?.uid), {
                username: username,
                profileUrl: profileUrl,
                userId: response?.user?.uid,
            });

            return { success: true, data: response?.user };
        } catch (e) {
            let msg =  e.message;
            if(msg.includes('(auth/invalid-email)')) msg = "Invalid email address";
            if(msg.includes('(auth/email-already-in-use)')) msg = "Email already in use";
            return { success: false, msg };
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register }}>
            {children}  
        </AuthContext.Provider>
    );
}


export const useAuth = () => { 
    const value = useContext(AuthContext);
    if(!value) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return value;
}