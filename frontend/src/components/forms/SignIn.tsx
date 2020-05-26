import React, { useState } from 'react';
import { useAuth } from '../../context/auth/AuthContext';

export const SignIn = () => {
    const { signInWithEmailAndPassword } = useAuth();

    const [signIn, setSignIn] = useState({ email: '', password: '' });

    const setInput = (e: React.FormEvent<HTMLInputElement>) => {
        setSignIn({ ...signIn, [e.currentTarget.name]: e.currentTarget.value });
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        signInWithEmailAndPassword(signIn.email, signIn.password);
        setSignIn({ email: '', password: '' });
    };

    return (
        <div>
            <h3>Sign In</h3>
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    name="email"
                    value={signIn.email}
                    placeholder="Email"
                    onChange={setInput}
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={signIn.password}
                    placeholder="Password"
                    onChange={setInput}
                    required
                />

                <button>Sign in</button>
            </form>
        </div>
    );
};
