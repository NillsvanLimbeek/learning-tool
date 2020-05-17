import React from 'react';

import { AuthProvider } from './context/auth/AuthContext';

import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { User } from './components/User';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <SignUp />
                <SignIn />
                <User />
            </AuthProvider>
        </div>
    );
}

export default App;
