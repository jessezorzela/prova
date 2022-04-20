const express = require('express')
const routes = require('./router')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://jesse:21062002@cluster0.acbf8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express();
app.use(express.json())
app.use(routes)
app.listen(3000)
console.log('servidor js com Nodemon em http://localhost:3000')