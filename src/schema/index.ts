import { gql } from 'apollo-server-express';

import testSchema from './test';
import crudSchema from './test';

const linkSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, testSchema, crudSchema];
