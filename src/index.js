const express = require('express');
const { getPosts, postPost } = require('./routers/posts-router');

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    console.log('Serving root resource');
    res.send('Hello world!!!');
});

app.get('/posts', getPosts);
app.post('/posts', postPost);

app.listen(3000, () => {
    console.log(`Express is up and running`);
});