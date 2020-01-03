const express = require('express')
const app = express()

const mongoose = require ('mongoose')

//init middelware

app.use(express.json())

//Connect database

const db = "mongodb+srv://samira123:samira123@coachini-h0rgq.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(db, { useUnifiedTopology: true , useNewUrlParser: true },(err)=>{
    if(err) throw err
    console.log('database connected !')

})




app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))


app.listen(5000, ()=> console.log('server is listening on port 5000...'))