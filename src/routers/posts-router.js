const posts = require('../samples/posts');

const getPosts = (req, res) => {
    console.log(`Getting all posts`);
    res.json(posts);
};

const postPost = (req, res) => {
    console.log(`Posting post`);
    const post = req.body;
    let maxId;
    posts.forEach((currentPost) => {
        if (!maxId) 
            maxId = currentPost.id;
        else if (currentPost.id > maxId)
            maxId = currentPost.id;
    });
    const newId = maxId ? maxId + 1 : 1;
    post.id = newId;
    posts.push(post);
    res.send({
        id: newId
    });
};

exports.postPost = postPost;
exports.getPosts = getPosts;