const express = require('express')
const app = express()
const port = 3020

app.get('/hehe', (req, res) => {
  res.send('Hello World! 222 ')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})