import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Button } from 'antd';

import { getChannels } from '../lib/fetch/fetch';

interface User {
    _id: string;
    username: string;
    email: string;
}

interface Users {
    users: User[];
}

const GET_USERS = gql`
    query getUsers {
        users {
            _id
            username
            email
        }
    }
`;

export const Videos = () => {
    const { data } = useQuery<Users>(GET_USERS);

    const getVideos = () => {
        getChannels();
    };

    return (
        <div>
            <h2>Videos</h2>

            <Button onClick={getVideos}>Get Channels</Button>

            <ul>
                {data &&
                    data.users.map((user: any, index: any) => (
                        <li key={index}>{user.username}</li>
                    ))}
            </ul>
        </div>
    );
};
