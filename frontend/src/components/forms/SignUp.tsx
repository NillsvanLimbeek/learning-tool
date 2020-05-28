import React, { useState } from 'react';
import axios from 'axios';

import { useAuth } from '../../context/auth/AuthContext';

import { Form } from './FormStyling';
import { BaseButton } from '../base-button/BaseButton';
import { BaseInput } from '../base-input/BaseInput';

export const SignUp = () => {
    const { createUserWithEmailAndPassword } = useAuth();

    const [signUp, setSignUp] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(false);

    const setInput = (e: React.FormEvent<HTMLInputElement>) => {
        setSignUp({ ...signUp, [e.currentTarget.name]: e.currentTarget.value });
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const { email, password } = signUp;
        e.preventDefault();

        setSignUp({ email: '', password: '' });

        createUserWithEmailAndPassword(email, password)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));

        // createUserWithEmailAndPassword(signUp.email, signUp.password).then(
        //     (res: any) => {
        // // create user in db
        // const user: firebase.User = res.user;
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:5000/users',
        //     data: {
        //         username: user.email,
        //         email: user.email,
        //         _id: user.uid,
        //     },
        // })
        // .then((res) => console.log(res))
        // .catch((err) => console.log(err));
        //     },
        // );
    };

    return (
        <Form onSubmit={onSubmit}>
            <BaseInput
                type="email"
                name="email"
                value={signUp.email}
                placeholder="Email"
                onChange={setInput}
                required
            />

            <BaseInput
                type="password"
                name="password"
                value={signUp.password}
                placeholder="Password"
                onChange={setInput}
                required
            />

            <BaseButton>Sign up</BaseButton>
        </Form>
    );
};
