// importing mongoose module
const mongoose = require('mongoose')

// using mongoose to connect to mongodb via this URL
mongoose.connect(process.env.DATABASE_URL)

// storing the connection in a variable
const db = mongoose.connection

// code to notify that your database has connected
db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
})
