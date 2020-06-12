import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from './context/auth/AuthContext';
import { ApolloProvider } from '@apollo/react-hooks';

import { client } from './lib/graphql/client';

import App from './App';

render(
    // <React.StrictMode>
    <Router>
        <ApolloProvider client={client}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </ApolloProvider>
    </Router>,
    // </React.StrictMode>,
    document.getElementById('root'),
);
