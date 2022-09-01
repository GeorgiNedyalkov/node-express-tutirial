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

- Set Up and Test Postman with all of our routes

## REST API

We are building a server. We want to create a REST API, an HTTP interface so that other apps
like frontend apps can interact with out data.

REST - Representational, State, Transfer

_Pattern_ that combines verbs, route paths and data

- Get - api/tasks - Get All Tasks
- Post - api/tasks - Create Task
- Get - api/tasks/:id - Get Task
- Put/ Patch - api/tasks/:id - Update Task
- Delete - api/tasks/:id - Delete Task

Our API allows users to pefrom CRUD operations on our data.

## MongoDB

Document based database.

- NoSQL, Non Relational DB
- Store JSON
- Easy to get started
- Free cloud hosting

Create a cluster in MongoDB Atlas
Set up:

- Database access
- Network acess

Set up as environment variable later.

Once our database is ready we need to connect to the server.

## Mongoose

An object data modeling library for node.js

Install mongoose.

Set up a connection to our server.

- Import mongoose
- connect mongoose
- require in app
- Refactor to use environment variables

Set up structure for future documents using Schema

- create models folder
- create task.js file
- create our schema and wrap it in a module
- create new tasks in the controllers

# 2. Store API

# 3. JWT

# 4. Jobs API
