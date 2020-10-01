const comments = require('../samples/comments');
const getPostComments = (req, res) => {
    const postId = req.params.postId;
    console.log(`Getting comments of post: ${postId}`);
    let postComments = comments[postId];
    if (!postComments) postComments = [];
    res.json(postComments);
};


const postComment = (req, res) =>{
    const comment = req.body;
    let postComments = comments[comment.postId];

    if (!postComments) {
        postComments = [];
        comments[comment.postId] = postComments;
    }
    postComments.push(comment);
    res.end();

}

exports.getPostComments = getPostComments;
exports.postComment = postComment;