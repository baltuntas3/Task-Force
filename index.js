const express = require('express')
const bodyParser = require('body-parser')
const cors=require('cors')
const userRouter = require('./routes/users')
const postRouter= require('./routes/posts')
const messageRouter=require('./routes/messages')
//const passport=require("")

require('./mongo_connection')

const app = express()
app.use(cors())
app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use('/users', userRouter)
app.use('/posts', postRouter)
app.use('/messages', messageRouter)


app.listen(3000, () => {
  console.log('Server listening')
})
