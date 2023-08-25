const app = require('./src/app.js')
const { dbConnect } = require('./src/db.js')
require('dotenv').config()
const Port = process.env.PORT

dbConnect()
app.listen(Port, () => {
    console.log(`%s listening at ${Port}`)
})
