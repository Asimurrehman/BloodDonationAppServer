const express = require('express');
const app = express();
const db = require('./config/db');
var cors = require('cors')

// app.use(cors())

db.connection.once('open', () => {
    console.log('db connected');
})
.on("error", error => {
    console.log("Error ->", error)
})

app.listen(process.env.PORT || 3000, function() {
    console.log('server is listening')
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', require('./routes/index.js'))