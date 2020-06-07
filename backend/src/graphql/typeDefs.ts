import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
    }

    type Query {
        users: [User!]!
        getUser(id: ID): User
    }
`;
