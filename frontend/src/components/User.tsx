import React from 'react';
import { useAuth } from '../context/auth/AuthContext';

export const User = () => {
    const { user, signOut } = useAuth();

    return (
        <div>
            {user ? (
                <div>
                    <h4>User: {user.email}</h4>
                </div>
            ) : (
                <h4>Nothing</h4>
            )}

            <button onClick={() => signOut()}>Logout</button>
        </div>
    );
};
