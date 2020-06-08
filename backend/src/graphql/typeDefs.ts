import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type User {
        id: ID
        username: String
        email: String
    }

    input UserInput {
        username: String
        email: String
    }

    type Query {
        users: [User]
        getUser(id: ID): User
    }

    type Mutation {
        addUser(user: UserInput): User
        deleteUser(id: ID): User
    }
`;
