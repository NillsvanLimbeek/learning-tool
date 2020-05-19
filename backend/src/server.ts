import express from 'express';
import cors from 'cors';

import users from './routes/users';

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/users', users);

export default app;
