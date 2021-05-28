const express = require('express');
const app = express();
const fetch = require('node-fetch');
const PORT = process.env.PORT || 8080;

app.get('/api/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.get('/api/posts', (req, res) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => res.json(json));
});

app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT} 🚀`);
});
