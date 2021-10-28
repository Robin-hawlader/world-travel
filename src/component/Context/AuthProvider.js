import React from 'react';
import { createContext } from 'react';
import UseFirebase from '../hooks/UseFirebase';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allContext = UseFirebase();
    return (
        <AuthContext.Provider value={UseFirebase()}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;