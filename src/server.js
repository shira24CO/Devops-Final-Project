const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('src/Register.html'));
});

app.get('/Register.css', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Register.css'));
});

module.exports = app;