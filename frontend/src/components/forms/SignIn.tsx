import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../context/auth/AuthContext';

import { Form, ErrorText } from './FormStyling';

import { BaseInput } from '../base-input/BaseInput';
import { BaseButton } from '../base-button/BaseButton';

export const SignIn = () => {
    const { signInWithEmailAndPassword } = useAuth();
    const history = useHistory();

    const [signIn, setSignIn] = useState({ email: '', password: '' });
    const [error, setError] = useState(false);

    const setInput = (e: React.FormEvent<HTMLInputElement>) => {
        setSignIn({ ...signIn, [e.currentTarget.name]: e.currentTarget.value });
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        signInWithEmailAndPassword(signIn.email, signIn.password)
            .then((res) => {
                setSignIn({ email: '', password: '' });
                history.push('/');
            })
            .catch((err) => {
                setError(true);
                console.error(err);
            });
    };

    return (
        <Form onSubmit={onSubmit}>
            <BaseInput
                name="email"
                placeholder="E-mail"
                type="email"
                value={signIn.email}
                onChange={setInput}
                required
            />

            <BaseInput
                name="password"
                placeholder="Password"
                type="password"
                value={signIn.password}
                onChange={setInput}
                required
            />

            {error && <ErrorText>Oops...</ErrorText>}

            <BaseButton>Sign In</BaseButton>
        </Form>
    );
};
