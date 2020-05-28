import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from './context/auth/AuthContext';

import { AppWrapper } from './AppStyling';
import { Generic, Reset } from './styling';

import { Navigation } from './components/navigation/Navigation';
import { Register } from './views/register/Register';
import { PrivateRoute } from './PrivateRoute';

const GlobalStyle = createGlobalStyle`
    ${Reset};
    ${Generic};
`;

function App() {
    return (
        <AppWrapper>
            <GlobalStyle />
            <AuthProvider>
                <Router>
                    <Switch>
                        <Route path="/signin" component={Register} />

                        <PrivateRoute
                            exact={true}
                            path="/"
                            component={Navigation}
                        />
                    </Switch>
                </Router>
            </AuthProvider>
        </AppWrapper>
    );
}

export default App;
