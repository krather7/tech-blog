const { Comment } = require('../models');

const commentData = [{
        comment_text: "Please write a comment",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Trolls troll",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Hello! Great post!",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;