const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'johnsmith',
    email: 'johnsmith@gmail.com',
    password: 'password'
  },
  {
    username: 'carlmoreno',
    email: 'carlmoreno@gmail.com',
    password: 'password'
  },
  {
    username: 'sabrinakane',
    email: 'sabrinakane@gmail.com',
    password: 'password'
  },
  {
    username: 'tylerhoward',
    email: 'tylerhoward@gmail.com',
    password: 'password'
  },
  {
    username: 'alexwolf',
    email: 'alexwolf@gmail.com',
    password: 'password'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;