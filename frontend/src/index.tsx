import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from './context/auth/AuthContext';

import App from './App';

render(
    // <React.StrictMode>
    <Router>
        <AuthProvider>
            <App />
        </AuthProvider>
    </Router>,
    // </React.StrictMode>,
    document.getElementById('root'),
);
