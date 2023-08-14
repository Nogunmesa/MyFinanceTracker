const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];
const secretKey = 'myhellasecretkey';

//Register new user
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (username && password) { // User inputs a username and password
    if (!users.some(user => user.username === username)) { //username and password is unique
      users.push({ username, password });
      const token = jwt.sign({ username }, secretKey, { expiresIn: '1m' });
      res.status(201).send({
        message: 'User registered successfully',
        token,
      });
    } else {
      res.status(409).send({
        error: 'Username already exists',
      });
    }
  } else {
    res.status(400).send({
      error: 'Username and password are required',
    });
  }
});

app.use('/login', (req, res) => {
  const { username, password } = req.body;

  if (isValidCredentials(username, password)) {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1m' });
    res.send({
      token,
    });
  } else {
    res.status(401).send({
      error: 'Invalid credentials',
    });
  }
});

function isValidCredentials(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  return !!user;
}


app.listen(8080, () => console.log('API is running on http://localhost:8080'));
