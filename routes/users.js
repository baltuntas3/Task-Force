const express = require('express')
const router = express.Router()

const UserService = require('../services/user_service')

router.get('/all', async (req, res) => {
  const people = await UserService.findAll()
  res.render('list', { items: people })
})
router.get('/all/json', async (req, res) => {
  const users = await UserService.findAll()
  res.send(users)
})

router.post('/', async (req, res) => {
    const user = await UserService.add(req.body)
    res.send(user)
  })

router.get('/profile/:id', async (req, res) => {
  const user = await UserService.find(req.params.id)
  res.send(user)
})

router.get('/:id/peers-over-18', async (req, res) => {
  const user = await UserService.find(req.params.id)
  const peers = await user.findPeersOver18()
  console.log(user)
  res.send(peers)
})

module.exports = router