import { createContext, useEffect, useState, useContext } from 'react';



export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect(() => {
        // onAuthStateChanged is a function that checks if the user is authenticated

        // setTimeout(() => {
            setIsAuthenticated(false);
        // }, 3000);
    }, []);

    const login = async (email, password) => {
        // login function to authenticate the user
        // setUser(user);
        // setIsAuthenticated(true);
        try {
            
        } catch (error) {
            
        }
    };

    const logout = async () => {
        // logout function to sign out the user
        // setUser(null);
        // setIsAuthenticated(false);
        try {
            
        } catch (error) {
            
        }
    }

    const register = async (email, password, username, profileUrl) => {
        // register function to create a new user
        // setUser(user);
        // setIsAuthenticated(true);
        try {
            
        } catch (error) {
            
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