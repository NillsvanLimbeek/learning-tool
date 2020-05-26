import { Collection } from 'mongodb';
import { User } from './user';

export interface Database {
    users: Collection<User>;
}
