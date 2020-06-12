import { IResolvers } from 'apollo-server-express';
import { ObjectId } from 'mongodb';

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
            const user = await db.users.findOne({ _id: new ObjectId(id) });

            if (!user) throw new Error('No user was found');

            return user;
        },
    },

    Mutation: {
        addUser: async (
            root: undefined,
            { user }: { user: User },
            { db }: { db: Database },
        ) => {
            const newUser = await db.users.save({
                ...user,
                _id: new ObjectId(),
            });

            if (!newUser) throw new Error('Cannot save user');

            return newUser.result;
        },

        deleteUser: async (
            root: undefined,
            { id }: { id: string },
            { db }: { db: Database },
        ) => {
            const user = await db.users.findOneAndDelete({
                _id: new ObjectId(id),
            });

            if (!user) throw new Error('No user was found');

            return user.value;
        },
    },

    // User: {
    //     id: (user: User) => user._id.toString(),
    // },
};
