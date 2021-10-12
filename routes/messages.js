const express = require('express')
const router = express.Router()

const MessagesService = require('../services/messages_service')
const UserService = require('../services/user_service')

//all messages which sent to me
router.get('/inbox/:id', async (req, res) => {
  const messages = await MessagesService.find(req.params.id)
  res.render('list', { items: messages })
})

router.post('/', async (req, res) => {
    const messages = await MessagesService.add(req.body)
    res.send(messages)
})

router.get('/del/:id', async (req, res) => {
  const messages = await MessagesService.del(req.params.id)
  res.send(messages)
})


router.get('/send-message/:receiverId', async (req, res) => {
  const {receiverId}= req.params
  //const senderId=await UserService.find("60f5c357a281e40a501201b5")//"asfffd", currently logged in user
  const sendMessage = await MessagesService.sendMessage(receiverId,"naber??????")

  console.log(sendMessage)
  res.send(sendMessage)
  
})

router.get('/all', async (req, res) => {
  const messages = await MessagesService.findAll()
  res.render('list', { items: messages })
})

module.exports = router