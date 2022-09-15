# Store API

Install dependencies:
nodemon, mongoose, dotenv, express and epxress-async-error\*

1. Setup a basic server

Initialize express
Create folder structure:

- controllers
- db
- middleware
  - Error handler
  - Not found
- models
- routes

2. Connect to DB

- Set up environment variables
- Create the connection function
- Import the function and invoke it within start function

3. Set up the Router

- Set up the controllers: testing, get all products
- Set up the routes:
  - require express
  - invoke router form `express.Router()`
  - import controllers
  - Set the routes: getAllProducts and testing
- import router

4. Set up a new collection in Postman

- Set up two routes: get all products and static

5. Import express async errors package to eliminate wrapping or writting async functions for middlewares

6. Create a Model and Schema

- Import mongoose
- Create product schema with properties and validations

7. Populate the database with our json dummy data

8. Set up filter functionality

- In controllers

- Sort the data

- Set up fields

- Set a limit

- Set up pagination

- Set up numberic filters
