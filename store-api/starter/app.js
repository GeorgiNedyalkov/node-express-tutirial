require("dotenv").config()
// async errors

const express = require("express")
const app = express()
const port = process.env.PORT || 3001

const notFoundMiddleware = require("./middleware/not-found")
const errorMiddleware = require("./middleware/error-handler")

// express json middleware
app.use(express.json())

// route
app.get("/", (req, res) => {
  res.send("<h1>Store API</h1><a href='/api/v1/products'>products route<a/>")
})

// products route
app.use(notFoundMiddleware)
app.use(errorMiddleware)

// start function
const start = async () => {
  try {
    // connect db
    app.listen(port, console.log(`Listening on port: ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
