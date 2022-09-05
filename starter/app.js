require("./db/connect")
const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
const connectDB = require("./db/connect")
require("dotenv").config()
const notFound = require("./middlewares/not-found")

// middleware
app.use(express.static("./public"))
app.use(express.json()) // if we don't do this we do not have the data in req.body

// routes

// the root route for the tasks router
app.use("/api/v1/tasks", tasks)

// 404 function
app.use(notFound)

const port = 1500

// start the server only if we have succesfully connected to database
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
