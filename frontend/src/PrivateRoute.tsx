import React, { ComponentType } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from './context/auth/AuthContext';

type Props = {
    path: string;
    exact?: boolean;
    component: ComponentType;
};

export const PrivateRoute = ({ path, exact, component }: Props) => {
    const { user } = useAuth();

    return user ? (
        <Route path={path} exact={exact} component={component} />
    ) : (
        <Redirect to="/signin" />
    );
};
