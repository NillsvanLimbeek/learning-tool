import { ObjectID } from 'mongodb';
import { User } from '../data';

export const users: User[] = [
    {
        _id: new ObjectID(),
        username: 'Nills',
        email: 'nills@vanlimbeek.nl',
    },
    {
        _id: new ObjectID(),
        username: 'Charlie',
        email: 'charlie@vanlimbeek.nl',
    },
    {
        _id: new ObjectID(),
        username: 'Kay',
        email: 'kay@vanlimbeek.nl',
    },
];
