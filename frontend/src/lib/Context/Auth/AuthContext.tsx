import React, { createContext, useEffect, useReducer } from 'react';
import { Firebase } from '../../';

import { State, Props } from './authTypes';
import AuthReducer from './authReducer';

const initialState: State = {
    user: null,
    firebaseUser: null,
    createUserWithEmailAndPassword: (email, password) => {
        return Firebase.createUserWithEmailAndPassword(email, password);
    },
    signInWithEmailAndPassword: async (
        email: string,
        password: string,
        value: 'local' | 'session' | 'none',
    ) => {
        Firebase.setPersistence(value)
            .then((res) => {
                return Firebase.signInWithEmailAndPassword(email, password);
            })
            .catch((err) => console.log(err));
    },
    signOut: () => {
        return Firebase.signOut();
    },
};

const AuthContext = createContext<State | undefined>(undefined);

function AuthProvider({ children }: Props) {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    useEffect(() => {
        Firebase.onAuthStateChanged((user) => {
            dispatch({ type: 'SET_USER', payload: user });
        });
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                firebaseUser: state.firebaseUser,
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
