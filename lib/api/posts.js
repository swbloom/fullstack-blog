const express = require('express')
const Router = express.Router
const router = Router()
const { Post } = require('../models/Post')

router.get('/', async (req, res, next) => {
  try {
    const docs = await Post.find()
    res.status(200).send(docs)
  } catch (e) {
    next(e)
  }
})

// GET /:post_id
router.get('/:post_id', async (req, res, next) => {
  try {
    // req.params.post_id
    const { post_id } = req.params
    const doc = await Post
      .findById(post_id)
      .populate('user')
      .populate('comments.user')
    res.status(200).send(doc)
  } catch (e) {
    next(e)
  }
})

module.exports = router
