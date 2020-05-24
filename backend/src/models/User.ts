import { Schema, Document, model } from 'mongoose';

export interface User extends Document {
    username: string;
    email: string;
    _id: Schema.Types.ObjectId;
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
    _id: {
        type: String,
        required: [true, 'Please add an ID'],
    },
});

export default model<User>('User', UserSchema);
