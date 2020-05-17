import React, { createContext, useEffect, useReducer } from 'react';
import { auth } from '../../firebase';

type State = {
    user: firebase.User | null;
    createUserWithEmailAndPassword: (
        email: string,
        password: string,
    ) => Promise<firebase.auth.UserCredential>;
    signInWithEmailAndPassword: (
        email: string,
        password: string,
    ) => Promise<firebase.auth.UserCredential>;
    signOut: () => Promise<void>;
};

type Props = {
    children: React.ReactNode;
};

type Dispatch = (action: Action) => void;
type Action = { type: 'SET_USER'; payload: any };

const initialState: State = {
    user: null,
    createUserWithEmailAndPassword: (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    },
    signInWithEmailAndPassword: (email: string, password: string) => {
        return auth.signInWithEmailAndPassword(email, password);
    },
    signOut: () => {
        return auth.signOut();
    },
};

const AuthContext = createContext<State | undefined>(undefined);

function AuthReducer(state: State, action: Action) {
    switch (action.type) {
        case 'SET_USER': {
            return { ...state, user: action.payload };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

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
