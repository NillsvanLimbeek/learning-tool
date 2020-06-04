import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Switch, Route, useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';

import { useAuth } from './context/auth/AuthContext';

import { AppWrapper } from './AppStyling';
import { Generic, Reset } from './styling';

import { Navigation } from './components/navigation/Navigation';
import { Register } from './views/register/Register';
import { PrivateRoute } from './PrivateRoute';
import { Profile } from './views/Profile';
import { Dashboard } from './views/Dashboard';
import { Videos } from './views/Videos';

const GlobalStyle = createGlobalStyle`
    ${Reset};
    ${Generic};
`;

function App() {
    const { user } = useAuth();
    const history = useHistory();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        if (user) {
            history.push('/dashboard');
        }

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [user, history]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <AppWrapper>
            <GlobalStyle />

            <Switch>
                <Route path="/signin" component={Register} />

                <Navigation>
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <PrivateRoute path="/videos" component={Videos} />
                    <PrivateRoute path="/profile" component={Profile} />
                </Navigation>
            </Switch>
        </AppWrapper>
    );
}

export default App;
