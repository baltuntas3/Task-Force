const express = require('express')
const router = express.Router()
const UserService = require('../services/user_service')
const passport=require("passport")

router.get('/all', async (req, res) => {
  if(req.user){
    const people = await UserService.findAll()
    res.render('list', { items: people })
  }else
    res.status(403).send({msg:"izinsiz"})
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

router.post("/login",passport.authenticate("local"),(req,res)=>{
  console.log(req.user)
  if(req.user){
    res.status(200).send({msg:"successfully logged in.",user:req.user})
  }else{
    res.status(403).send("problem")
  }
  
})


module.exports = router