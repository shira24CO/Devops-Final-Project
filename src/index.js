const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const port = process.env.PORT || 4000;
const app = express();

app.get('/', (req, res ) => {
    console.log('A new request has arrived to index.js');
    res.send('Hello From the server');
});
app.get('/Register', (req, res ) => {

    res.sendFile(path.resolve('Register.js'));
});

app.listen(port, () => {
    console.log("server is up and running at port "+ port);
});

