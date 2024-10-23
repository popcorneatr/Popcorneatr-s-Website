import React, { createContext, useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = (userData) => {
        setUser(userData); 
        // Persist user
        localStorage.setItem("user", JSON.stringify(userData));  
    };

    const logout = () => {
        setUser(null); 
        // Remove persisted user
        localStorage.removeItem("user"); 
        navigate("/")
    };

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
