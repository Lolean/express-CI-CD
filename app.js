const express = require('express');
const app = express();

// Route simple
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Route pour récupérer un utilisateur depuis la DB
const db = require('./db');
app.get('/user', async (req, res) => {
  const user = await db.getFirstUser();
  res.json(user);
});

module.exports = app;
