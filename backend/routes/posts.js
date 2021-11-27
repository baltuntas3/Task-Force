const express = require('express')
const router = express.Router()

const PostsService = require('../services/posts_service')

router.get('/all', async (req, res) => {
  const posts = await PostsService.findAll()
  res.render('list', { items: posts })
})

router.get('/getAllJson', async (req, res) => {
  console.log(req.isAuthenticated()+"---<sss")
  console.log(req.user+"----------------<")
  if(req.user){
    const post = await PostsService.findAll()
    res.send(post)
  }
})

router.get('/getjson/:postId', async (req, res) => {
  const {postId}=req.params
  res.send(await PostsService.find(postId))
})


router.post('/', async (req, res) => {
    const post = await PostsService.add(req.body)
    res.send(post)
  })
module.exports = router