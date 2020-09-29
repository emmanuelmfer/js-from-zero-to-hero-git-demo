const comments = require('../samples/comments');
const getPostComments = (req, res) => {
    const postId = req.params.postId;
    console.log(`Getting comments of post: ${postId}`);
    let postComments = comments[postId];
    if (!postComments) postComments = [];
    res.json(postComments);
};

exports.getPostComments = getPostComments;