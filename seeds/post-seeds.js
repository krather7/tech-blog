const { Post } = require('../models');

const postData = [{
        title: 'Technology Today',
        content: 'Technology is changing every day.  Staying up to date requires research and the ability to constantly learn.',
        user_id: 1

    },
    {
        title: 'Stonks',
        content: 'Investing in the stock market sounds like good advice.  Is the current market going to continue with this growth or is it in a bubble ready to burst?',
        user_id: 2
    },
    {
        title: 'Console Wars',
        content: 'New games for Playstation 5, the Nintendo Switch, and XBOX are being released every day.  Which console is pulling ahead?',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;