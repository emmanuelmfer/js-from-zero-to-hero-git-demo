const express = require('express');
const { getPostComments, postComment } = require('./routers/comments-router');

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    console.log('Serving root resource');
    res.send('Hello world!!!');
});

app.get('/posts/:postId/comments', getPostComments);
app.post('/comments', postComment);

app.listen(3000, () => {
    console.log(`Express is up and running`);
});