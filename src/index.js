const express = require('express');

const app = express();
app.get('/', (req, res) => {
    console.log('Serving root resource');
    res.send('Hello world!!!');
});

app.listen(3000, () => {
    console.log(`Express is up and running`);
});