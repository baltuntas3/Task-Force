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


router.get('/send-message/:receiverId', async (req, res) => {//think about it
  //const senderId=await UserService.find("60f5c357a281e40a501201b5")//"asfffd",
  //const receiverId=await UserService.find(req.params.receiverId)
  const messages=await MessagesService.find("610a0f1a4aa305060ccd7126")//look here
  const find= await messages.findTheGroup("6108b66168346e30f495f912")//this is my inbox
  messages.messages.push({sender:"60f5c357a281e40a501201b5",message:"nbr asdas"})//we are sent a message to someone 

  console.log(find)
  res.send(find)
  
})

router.get('/all', async (req, res) => {
  const messages = await MessagesService.findAll()
  res.render('list', { items: messages })
})

module.exports = router