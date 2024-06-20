import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useContext, useState } from "react"; // Import useState and useContext from react
import React from "react";
import { auth } from "../firebaseConfig";

// Create a context for authentication
const AuthContext = React.createContext();

// Custom hook to use the AuthContext
export function useAuth() {
    return useContext(AuthContext);
}

// AuthProvider component manages authentication state
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    // useEffect to listen for auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);

        // Cleanup function to unsubscribe from listener
        return () => unsubscribe();
    }, []);

    // Function to initialize user state based on auth state
    async function initializeUser(user) {
        if (user) {
            setCurrentUser(user); // Firebase user object can be directly set
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false); // Set loading to false after initialization
    }

    // Value object for the context provider
    const value = {
        currentUser,
        userLoggedIn,
        loading,
    };

    // Return the AuthContext provider with the children components
    return (
        <AuthContext.Provider value={value}>
            {!loading && children} {/* Render children only when not loading */}
        </AuthContext.Provider>
    );
}
