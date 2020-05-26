import { ObjectID } from 'mongodb';

export interface User {
    _id: ObjectID;
    username: string;
    email: string;
}
