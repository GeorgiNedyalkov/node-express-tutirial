require("dotenv").config()
// async errors

const express = require("express")
const app = express()
const port = process.env.PORT || 3001

const connectDB = require("./db/connect")
const productsRouter = require("./routes/products")

const notFoundMiddleware = require("./middleware/not-found")
const errorMiddleware = require("./middleware/error-handler")

// express json middleware
app.use(express.json())

// routes

// home route
app.get("/", (req, res) => {
  res.send("<h1>Store API</h1><a href='/api/v1/products'>products route<a/>")
})

// base route path
app.use("/api/v1/products", productsRouter)

// products route
app.use(notFoundMiddleware)
app.use(errorMiddleware)

// start function
const start = async () => {
  try {
    // connect db
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Listening on port: ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
