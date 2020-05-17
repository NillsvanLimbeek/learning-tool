import React, { useState } from 'react';
import { useAuth } from '../context/auth/AuthContext';

export const SignUp = () => {
    const { createUserWithEmailAndPassword } = useAuth();

    const [signUp, setSignUp] = useState({ email: '', password: '' });
    const [error, setError] = useState<string | null>(null);

    const setInput = (e: React.FormEvent<HTMLInputElement>) => {
        setSignUp({ ...signUp, [e.currentTarget.name]: e.currentTarget.value });
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        createUserWithEmailAndPassword(
            signUp.email,
            signUp.password,
        ).then((res: any) => console.log(res));
        setSignUp({ email: '', password: '' });
    };

    return (
        <div>
            <h3>Sign Up</h3>
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    name="email"
                    value={signUp.email}
                    placeholder="Email"
                    onChange={setInput}
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={signUp.password}
                    placeholder="Password"
                    onChange={setInput}
                    required
                />

                <button>Sign up</button>

                {error && <p>Error</p>}
            </form>
        </div>
    );
};
