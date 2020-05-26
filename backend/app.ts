import { connectDatabase } from './src/database';
import { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import app from './src/server';
import { typeDefs, resolvers } from './src/graphql';

// load env
dotenv.config({ path: './config/config.env' });

// connect db with mongoose
// mongoose.connect(process.env.LOCAL_DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.once('open', () => {
//     console.log('DB Connected!');
// });

async function mount(app: Application) {
    const db = await connectDatabase();

    // connect with apollo server
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: () => ({ db }),
    });
    server.applyMiddleware({ app, path: '/graphql' });

    // start the app
    app.set('port', process.env.PORT || 5000);
    app.listen(app.get('port'), () => {
        console.log(`App started on port: ${app.get('port')}`);
    });
}

mount(app);
