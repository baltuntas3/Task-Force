const express = require('express')
const bodyParser = require('body-parser')

const userRouter = require('./routes/users')


require('./mongo_connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use('/users', userRouter)

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('Server listening')
})
