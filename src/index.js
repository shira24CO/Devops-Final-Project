/* eslint linebreak-style: ["error", "windows"] */
const express = require('express');
const path = require('path');

const port = process.env.PORT || 4000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello From the server');
});
app.get('/Register', (req, res) => {
    res.sendFile(path.resolve(1));
});

app.listen(port, () => {
    console.log(`server is up and running at port ${port}`);
});
