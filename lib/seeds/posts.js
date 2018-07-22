const { Post, Comment } = require('../models/Post')
const users = require('./users')

const posts = []

const comment = new Comment({
  title: 'Great article!',
  body: 'Wow, this article was tres dopenessness. Would read again.',
  user: users[1] // Talia
})

const post = new Post({
  title: 'Which Backstreet Boy is the most fly?',
  description: 'Philosophers have argued for countless centuries that AJ is clearly the flyest backstreet boy, however recently uncovered Egyptian runes reveal that...',
  user: users[0], // Mark
  comments: []
})

post.comments.push(comment)
posts.push(post)

module.exports = posts
