const express = require('express');
const { getPosts, postPost } = require('./routers/posts-router');
const { getPostComments } = require('./routers/comments-router');

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    console.log('Serving root resource');
    res.send('Hello world!!!');
});

app.get('/posts', getPosts);
app.post('/posts', postPost);
app.get('/posts/:postId/comments', getPostComments);

app.listen(3000, () => {
    console.log(`Express is up and running`);
});