const express = require('express');
const mongoose = require('mongoose');
const requireDir =  require('require-dir')
const cors = require('cors')

const app = express();


app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://rogeriorioli:ro3007@cluster0-f3bh2.gcp.mongodb.net/test?retryWrites=true&w=majority' , { useNewUrlParser : true })

//mongo bd attlas

requireDir('./models')

//routes
app.use('/api' , require('./routes/routes'))



app.listen('3333');