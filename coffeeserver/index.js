import express from 'express';
import expressGraphQL from 'express-graphql';
import { buildSchema } from 'graphql';

import db from './db';

// GraphQL schema
const schema = buildSchema(`
    type Query {
        course(id: Int!): Course
        courses(topic: String): [Course]
    },
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
`);

const getCourse = args => {
  const { id } = args;
  return [].filter(course => course.id === id)[0];
};

const getCourses = args => {
  if (args.topic) {
    const { topic } = args;
    return [].filter(course => course.topic === topic);
  }
  return [];
};

const root = {
  course: getCourse,
  courses: getCourses,
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
