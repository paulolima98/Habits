// Back-end API RESTful

import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const app = Fastify();
const prisma = new PrismaClient();

/**
 * Método HTTP: Get, Post, Put, Patch, Delete
 */

app.get('/hello', () => {
  const habits = prisma.habit.findMany({
    where: {
      title: {

      }
    }
  });

  return habits;
});

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP Server running');
});