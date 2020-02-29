import express from 'express';
import expressGraphQL from 'express-graphql';
import { buildSchema } from 'graphql';

import db from './db';
import setupGPIO from './gpio';

const schema = buildSchema(`
    type Query {
      user(id: Int!): User
      users: [User]
      brew(type: String!, userId: Int!): Coffee
      stop: Coffee
      orphans: [Coffee]
      assignOrphan(id: Int!, userId: Int!): Coffee
    },
    type User {
      id: Int
      name: String
      points: Int
    },
    type Coffee {
      id: Int
      type: String
      timestamp: Int
      userId: String
    }
`);

const getUser = args => {
  const { id } = args;
  return [].find(user => user.id === id);
};

const getUsers = () => [{ id: 123, name: 'jaakko', points: 2 }, { id: 111, name: 'jovan', points: 0 }];

const brewIt = (type, userId) => {
  console.log(type);
  //console.log(userId);
};

const root = {
  user: getUser,
  users: getUsers,
  brew: brewIt,
};

const app = express();

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));

setupGPIO();
