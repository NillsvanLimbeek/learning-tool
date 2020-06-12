import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';

import { useAuth } from './lib';

import { AppWrapper } from './AppStyling';

import { Navigation } from './components';

import { Register } from './views';

function App() {
    const { user } = useAuth();
    const history = useHistory();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        if (user) {
            history.push('/dashboard');
        }

        setLoading(false);
    }, [user, history]);

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
