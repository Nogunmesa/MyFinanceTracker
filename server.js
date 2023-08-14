const express = require('express');
const cors = require('cors');
// const jwt = require('jsonwebtoken');

const app = express();

 app.use(cors({origin: 'http://localhost:3001'}));
// app.use(express.json());

// const secretKey = 'yourSecretKey';

// const users = [];

app.use('/login', (req, res) => {
//   const { username, password } = req.body;

//   if (isValidCredentials(username, password)) {
//     const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
     res.send({
       token: 'test123'
     });
//   } else {
//     res.status(401).send({
//       error: 'Invalid credentials',
     });
//   }
// });

// app.post('/register', (req, res) => {
//   const { username, password } = req.body;

//   if (username && password) {
//     if (!users.some(user => user.username === username)) {
//       users.push({ username, password });
//       res.status(201).send({
//         message: 'User registered successfully',
//       });
//     } else {
//       res.status(409).send({
//         error: 'Username already exists',
//       });
//     }
//   } else {
//     res.status(400).send({
//       error: 'Username and password are required',
//     });
//   }
// });

// function isValidCredentials(username, password) {
//   const user = users.find(u => u.username === username && u.password === password);
//   return !!user;
// }

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));


