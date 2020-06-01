import express from 'express';

const app = express();

app.get('/users', (request, response) => {

  response.json([
    'Junior',
    'Tony',
    'Gabriel',
    'João'
  ]);
  console.log('Listagem de usuários');
});

app.listen(3333);
