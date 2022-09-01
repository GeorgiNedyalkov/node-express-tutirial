# Node and Express Tutorial

Four projects:

# 1. Task Manager

Main goals:

- Learn how to set up and connect to the cloud database.
- Learn all CRUD operations on our data
  - Create
  - Read
  - Update
  - Delete

Project setup

- dependencies: dotenv, express, mongoose
- dev dependencies: nodemon
- scripts: "nodemon app.js"

- Install dependencies
- Spin up nodemon

Set up a basic server:

Sample Route structure:

// app.get("/api/v1/tasks") - get all the tasks
// app.post("/api/v1/tasks") - create a new task
// app.get("/api/v1/tasks/:id") - get single task
// app.patch("/api/v1/tasks:id") - update task
// app.delete("/api/v1/tasks:id") - delete task

- Set up the Router and Controllers
- Create a router and import it in the app
- Add express json middleware
- Write the controller function in the controllers/task.js file.
  Refactor the controller function in the routes.

The controller file for the tasks sets up the functionality for:

- Creating a task, reading a tasks, reading all tasks, updating a task and deleting a tasks
  We then export this funcitonality and import it in the routes file and connect it to the router

# 2. Store API

# 3. JWT

# 4. Jobs API
