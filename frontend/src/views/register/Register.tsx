import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import { useAuth } from '../../context/auth/AuthContext';

import { RegisterWrapper, Buttons, Tab } from './RegisterStyling';

import { Box } from '../../components/box/Box';

import { SignUp } from '../../components/forms/SignUp';
import { SignIn } from '../../components/forms/SignIn';

export const Register = () => {
    const [view, setView] = useState<'signIn' | 'signUp'>('signIn');

    const { user } = useAuth();
    const history = useHistory();

    useEffect(() => {
        if (user) {
            history.push('/');
        }
    }, [user, history]);

    return (
        <RegisterWrapper>
            <Box>
                <Buttons>
                    <Tab
                        active={view === 'signIn'}
                        onClick={() => setView('signIn')}
                    >
                        Sign In
                    </Tab>
                    <Tab
                        active={view === 'signUp'}
                        onClick={() => setView('signUp')}
                    >
                        Sign Up
                    </Tab>
                </Buttons>

                <AnimatePresence>
                    {view === 'signIn' ? <SignIn /> : <SignUp />}
                </AnimatePresence>
            </Box>
        </RegisterWrapper>
    );
};
