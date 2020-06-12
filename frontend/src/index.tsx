import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { ApolloProvider } from '@apollo/react-hooks';
import { AuthProvider, client } from './lib';

import App from './App';

render(
    <Router>
        <ApolloProvider client={client}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </ApolloProvider>
    </Router>,
    document.getElementById('root'),
);
