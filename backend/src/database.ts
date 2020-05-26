import { MongoClient } from 'mongodb';
import { Database } from './data/types/database';

export const connectDatabase = async (): Promise<Database> => {
    const client = await MongoClient.connect(process.env.LOCAL_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = client.db('learning-tool');

    return {
        users: db.collection('users'),
    };
};
