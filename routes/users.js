const express = require('express')
const router = express.Router()

const UserService = require('../services/user_service')

router.get('/all', async (req, res) => {
  const people = await UserService.findAll()
  res.render('list', { items: people })
})
router.get('/all/json', async (req, res) => {
  const people = await UserService.findAll()
  res.send({ items: people })
})

router.post('/', async (req, res) => {
    const user = await UserService.add(req.body)
    res.send(user)
  })

module.exports = router