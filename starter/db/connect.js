const mongoose = require("mongoose")

const connectionString =
  "mongodb+srv://gnedyalkov94:QqB6Wl9H8GsCcVFy@cluster0.dpskgsi.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority"

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
