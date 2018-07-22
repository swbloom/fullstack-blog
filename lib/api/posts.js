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

router.post('/:post_id/comment', async (req, res, next) => {
  // grab the post id from the query params
  // grab the comment from the request body
  try {
    // find the post by id
    // push the new comment into the existing posts array
    // re-save the document
    // send back the updated document
  } catch (e) {
    // otherwise pass the error to the error handler
    next(e)
  }
})

router.delete('/:post_id/:comment_id', async (req, res, next) => {
  // grab the comment id and the post id from the request params
    // look up the post by id
    // iterate through the comments and filter out any posts that match the id passed in the params
    // resave the document
  } catch (e) {
    next(e)
  }
})

module.exports = router
