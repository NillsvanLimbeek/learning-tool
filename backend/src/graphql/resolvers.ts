import { IResolvers } from 'apollo-server-express';

import { Database } from '../data/types/database';
import { User } from '../data';

export const resolvers: IResolvers = {
    Query: {
        users: async (
            _root: undefined,
            _args: {},
            { db }: { db: Database },
        ) => {
            return await db.users.find({}).toArray();
        },

        getUser: async (
            _root: undefined,
            { id }: { id: string },
            { db }: { db: Database },
        ) => {
            const user = await db.users.findOne({ _id: id });

            if (!user) throw new Error('No user was found');

            return user;
        },
    },

    Mutation: {
        addUser: async (
            _root: undefined,
            { user }: { user: User },
            { db }: { db: Database },
        ) => {
            const newUser = await db.users.insertOne({
                ...user,
                _id: user._id,
            });

            if (!newUser) throw new Error('Cannot save user');

            return newUser;
        },

        deleteUser: async (
            _root: undefined,
            { id }: { id: string },
            { db }: { db: Database },
        ) => {
            const user = await db.users.findOneAndDelete({
                _id: id,
            });

            if (!user) throw new Error('No user was found');

            return user.value;
        },
    },
};
