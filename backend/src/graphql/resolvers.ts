import { IResolvers } from 'apollo-server-express';
import { ObjectID } from 'mongodb';

import { Database } from '../data/types/database';
import { User } from '../data';

export const resolvers: IResolvers = {
    Query: {
        users: async (root: undefined, args: {}, { db }: { db: Database }) => {
            return await db.users.find({}).toArray();
        },

        getUser: async (
            root: undefined,
            { id }: { id: string },
            { db }: { db: Database },
        ) => {
            const user = await db.users.findOne({ _id: new ObjectID(id) });

            if (!user) throw new Error('No user was found');

            return user;
        },
    },

    // Mutation: {},

    User: {
        _id: (user: User) => user._id.toString(),
    },
};
