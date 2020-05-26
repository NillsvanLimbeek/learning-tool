import { IResolvers } from 'apollo-server-express';

import { Database } from '../data/types/database';
import { User } from '../data';

export const resolvers: IResolvers = {
    Query: {
        users: async (root: undefined, args: {}, { db }: { db: Database }) => {
            return await db.users.find({}).toArray();
        },
    },
    User: {
        _id: (user: User) => user._id.toString(),
    },
};
