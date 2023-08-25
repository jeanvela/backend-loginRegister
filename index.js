const app = require('./src/app.js')
const { dbConnect } = require('./src/db.js')
require('dotenv').config()
const Port = process.env.PORT || 3001

app.listen(Port, async () => {
    await dbConnect()
    console.log(`%s listening at ${Port}`)
})
