const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('User Service!'));

app.listen(8080);
