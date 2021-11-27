const express = require('express')
const session = require("express-session")
const userRouter = require('./routes/users')
const postRouter= require('./routes/posts')
const messageRouter=require('./routes/messages')
const store = new session.MemoryStore()
const cors=require('cors')
const passport=require('passport')
const local= require("./strategies/local")

require('./mongo_connection')

const app = express()

app.use(cors({credentials: true, origin: 'http://localhost:8080'}))
app.set('view engine', 'pug')
app.use(session({
  secret:"sir",
  cookie:{maxAge:300000},
  saveUninitialized:false,
  store
}))
app.use(express.json());
app.use(passport.initialize())
app.use(passport.session())

app.use('/users', userRouter)
app.use('/posts', postRouter)
app.use('/messages', messageRouter)


app.listen(3000, () => {
  console.log('Server listening')
})
