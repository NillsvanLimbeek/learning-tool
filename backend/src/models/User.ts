import { Schema, Document, model } from 'mongoose';

interface User {
    username: string;
    email: string;
    id: string;
}

const UserSchema = new Schema<User>({
    username: {
        type: String,
        required: [true, 'Please enter a Username'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please enter a Email'],
        unique: true,
        trim: true,
    },
});
