import React, { createContext, useEffect, useReducer } from 'react';
import { auth } from '../../lib/auth/firebase';

import { State, Props } from './authTypes';
import AuthReducer from './authReducer';

const initialState: State = {
    user: null,
    createUserWithEmailAndPassword: (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    },
    signInWithEmailAndPassword: async (email: string, password: string) => {
        return auth.signInWithEmailAndPassword(email, password);
    },
    signOut: () => {
        return auth.signOut();
    },
};

const AuthContext = createContext<State | undefined>(undefined);

function AuthProvider({ children }: Props) {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            dispatch({ type: 'SET_USER', payload: user });
        });
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                createUserWithEmailAndPassword:
                    state.createUserWithEmailAndPassword,
                signInWithEmailAndPassword: state.signInWithEmailAndPassword,
                signOut: state.signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = React.useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider');
    }

    return context;
}

export { AuthProvider, useAuth };
