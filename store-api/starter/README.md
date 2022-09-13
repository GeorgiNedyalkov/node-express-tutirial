# Store API

Install dependencies:
nodemon, mongoose, dotenv, express

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
