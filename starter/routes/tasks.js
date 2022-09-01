const express = require("express")
// invoke the express router
const router = express.Router()

const { getAllTasks } = require("../controllers/tasks")

// router.route(path)
// returns an instance of a single route which cn be use to handle HTTP verbs with optional middleware.

router.route("/").get(getAllTasks)

module.exports = router
