const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Contacts Service!'));

app.listen(8080);
