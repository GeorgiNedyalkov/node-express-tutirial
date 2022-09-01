const express = require("express")
const app = express()

const port = 1500

// routes
// get request
app.get("/hello", (req, res) => {
  res.send(`Hello World`)
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}...`)
})
