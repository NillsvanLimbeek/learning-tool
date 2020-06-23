import React from 'react';
import { Redirect } from 'react-router-dom';

import { useAuth } from '../../lib/Context/Auth/AuthContext';

export const Dashboard = () => {
    const { user } = useAuth();

    if (user) {
        return (
            <div>
                <h3>Dashboard</h3>

                <p>{user._id}</p>
                <p>{user.email}</p>
            </div>
        );
    }

    return <Redirect to="/signin" />;
};
