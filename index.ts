import * as express from 'express';
import graphiql from 'graphql-playground-middleware-express';
import { ApolloServer } from 'apollo-server-express';
import * as morgan from 'morgan';
const serverless = require('serverless-http');
import schema from './src/schema';
import resolvers from './src/resolvers';
import { prisma } from './src/generated/prisma-client';

const app = express();
app.use(morgan('dev'));

app.use(require('./restful'));

app.disable('etag');

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: {
        prisma,
    },
    introspection: true,
    playground: true,
});

server.applyMiddleware({ app });

app.get('/playground', graphiql({ endpoint: '/graphql' }));

const handler = serverless(app);

export { handler };
