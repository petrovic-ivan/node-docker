const express = require('express');
const redis = require('redis');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(3000, () => {
    console.log('Listen on port 3000.');
});