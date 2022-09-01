const express = require("express")
const app = express()
const tasks = require("./routes/tasks")

// middleware
app.use(express.json()) // if we don't do this we do not have the data in req.body

const port = 1500

// routes
// get request
app.get("/hello", (req, res) => {
  res.send(`Hello World`)
})

// the root route for the tasks router
app.use("/api/v1/tasks", tasks)

// listener
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`)
})
