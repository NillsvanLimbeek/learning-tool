import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { AuthProvider } from './context/auth/AuthContext';

import { Navigation } from './components/navigation/Navigation';

import { AppWrapper } from './AppStyling';
import { Generic, Reset } from './styling';

const GlobalStyle = createGlobalStyle`
    ${Reset};
    ${Generic};
`;

function App() {
    return (
        <AppWrapper>
            <GlobalStyle />
            <AuthProvider>
                <Navigation />
            </AuthProvider>
        </AppWrapper>
    );
}

export default App;
