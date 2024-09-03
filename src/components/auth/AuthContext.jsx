import {React, createContext, useState } from 'react';
import axios from 'axios';

// Create the context
const AuthContext = createContext();

// AuthProvider component to wrap your app
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const login = async (email, password) => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/auth/login', { email, password }, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true, // Send cookies with the request
            });

            if (response.data.status) {
                setUser({ email }); // Set the user data in context
            }
        } catch (error) {
            console.error("Login failed:", error.response?.data?.message || error.message);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null); // Clear the user data
        // Optionally clear the token from cookies here
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
