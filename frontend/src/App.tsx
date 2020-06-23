import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import 'antd/dist/antd.css';

import { useAuth, useAuthDispatch } from './lib';

import { GetUser, GetUserVariables } from './__generated__/GetUser';

import { AppWrapper } from './AppStyling';

import { Register } from './views';
import { Navigation } from './components';

const GET_USER = gql`
    query GetUser($id: String) {
        getUser(id: $id) {
            _id
            email
        }
    }
`;

function App() {
    const { firebaseUser } = useAuth();
    const dispatch = useAuthDispatch();
    const [getUser, { loading, error, data }] = useLazyQuery<
        GetUser,
        GetUserVariables
    >(GET_USER);
    const history = useHistory();

    useEffect(() => {
        if (firebaseUser) {
            getUser({ variables: { id: firebaseUser.uid } });

            if (data && data.getUser) {
                dispatch({ type: 'SET_USER', payload: data.getUser });
                history.push(`${data.getUser._id}/dashboard`);
            }
        }
    }, [firebaseUser, history, dispatch, getUser, data]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <AppWrapper>
            <Switch>
                <Route path="/signin" component={Register} />

                <Navigation />
            </Switch>
        </AppWrapper>
    );
}

export default App;
