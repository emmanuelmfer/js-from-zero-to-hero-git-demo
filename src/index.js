const express = require('express');
const { getPostComments } = require('./routers/comments-router');

const app = express();
app.get('/', (req, res) => {
    console.log('Serving root resource');
    res.send('Hello world!!!');
});

app.get('/posts/:postId/comments', getPostComments);

app.listen(3000, () => {
    console.log(`Express is up and running`);
});