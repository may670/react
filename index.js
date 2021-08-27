const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')

// mongoDB 연결
mongoose.connect('mongodb+srv://may670:dbstjd67@cluster0.fayzy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
useNewUrlParser:true, useUnifiedTopology:true
}).then( () => console.log('MongoDB connected....'))
  .catch( err => console.log(err))




app.get('/',(req,res) => res.send('Hello,World!'))

app.listen(port, () => console.log('Example app listening on port ${port}!'))