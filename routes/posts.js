const express = require('express')
const router = express.Router()

const PostsService = require('../services/posts_service')

router.get('/all', async (req, res) => {
  const posts = await PostsService.findAll()
  res.render('list', { items: posts })
})

router.post('/', async (req, res) => {
    const post = await PostsService.add(req.body)
    res.send(post)
  })
module.exports = router