import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    hello: String
  }

  extend type Query {
    users: [User]
    user(id: ID!): User
  }
  extend type Mutation {
    signUp(name: String!, email: String!): User!

    deleteUser(id: ID!): User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }
`;
