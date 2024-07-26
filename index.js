const express = require('express')
require("dotenv").config()

const port = process.env.PORT 

const app = express()

app.get('/send/:message', (req, res) => {
   const message = req.params.message
   res.status(200).json({
      title: 'send test',
      message: message
   })
})

app.get('/receive', (req, res) => {
   res.status(200).json({
      title: 'receive test',
      message: 'this is a test for router receive'
   })
})

app.listen(port, () => {
   console.log(`Program running on ${port}`)
})