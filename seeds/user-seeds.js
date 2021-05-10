const { User } = require('../models');

const userData = [{
        username: 'kyle@gmail.com',
        password: 'password'

    },
    {
        username: 'mick@gmail.com',
        password: 'password'
    },
    {
        username: 'cassidy@yahoo.com',
        password: 'password'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;