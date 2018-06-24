const User = require('../models/User')
const { Post } = require('../models/Post')
const users = require('./users')
const posts = require('./posts')
const mongoose = require('mongoose')
const uri = 'mongodb://localhost:27017/blog'

const truncateDatabase = async () => {
  return Promise.all([User.deleteMany(), Post.deleteMany()])
}

const makeSeeds = async () => {
  // wait for mongoose to connect to our database
  await mongoose.connect(uri)

  // delete all current content in our database
  await truncateDatabase()

  // save user seeds into database
  await Promise.all(users.map(user => user.save()))

  // save seeded posts into the database
  await Promise.all(posts.map(post => post.save()))

  // close database connection
  mongoose.connection.close()
}

makeSeeds()
