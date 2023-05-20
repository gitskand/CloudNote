const connectToMongo= require('./db');
var cors = require('cors') 

connectToMongo();

const express = require('express')
const app = express()
const port = 5000


app.use(cors())
app.use(express.json())


app.use(express.json())



//making routes

app.use('/api/auth', require('./routes/auth'))
app.use('/api/note', require('./routes/note'))


if(process.env.NODE_ENV='production'){

  app.use(express.static('client/build'))
}

app.listen(port, () => {
  console.log(`CloudNote is listening on port http://localhost:${port}`)
})
