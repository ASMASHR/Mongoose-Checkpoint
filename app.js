const express=require('express')
var bodyParser = require('body-parser')
const connectDB = require('./config/connectDB')
const router=require('./routes/contact')
const app =express()
const port=4000
connectDB()

 app.use(express.json())
app.use('/api/exemple',router)

app.listen(port,()=>{console.log(`the server is running at http://localhost:${port}`)})