import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type User {
        _id: String
        email: String
    }

    input UserInput {
        _id: String
        email: String
    }

    type Query {
        users: [User]
        getUser(id: String): User
    }

    type Mutation {
        addUser(user: UserInput): User
        deleteUser(id: String): User
    }
`;
