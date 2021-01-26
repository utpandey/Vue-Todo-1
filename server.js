const express = require('express');
const app = express()
const mongoose = require('mongoose')
const { PORT, mongoUri } = require('./config')
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(cors())
app.use(morgan('tiny'));
app.use(bodyParser.json())

mongoose
    .connect('mongodb+srv://admin:10Str@whats@cluster0.ytuwh.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log('MongoDB db conn....'))
    .catch((err) => console.log(err))

app.get('/', (req, res) => res.send('Hello World'))

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))