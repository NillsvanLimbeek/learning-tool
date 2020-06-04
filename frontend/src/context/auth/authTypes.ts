export type State = {
    user: firebase.User | null;
    createUserWithEmailAndPassword: (
        email: string,
        password: string,
    ) => Promise<firebase.auth.UserCredential>;
    signInWithEmailAndPassword: (
        email: string,
        password: string,
        value: 'local' | 'session' | 'none',
    ) => Promise<void>;
    signOut: () => Promise<void>;
};

export type Props = {
    children: React.ReactNode;
};

export type Dispatch = (action: Action) => void;
export type Action =
    | { type: 'SET_USER'; payload: any }
    | { type: 'SET_ERROR'; payload: any };
