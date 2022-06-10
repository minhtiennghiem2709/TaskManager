const express = require("express")
const app = express()
const morgan = require("morgan")
app.use(morgan("tiny"))
const connectDB = require("./db/connect")
const tasks = require("./routes/tasks")

require("dotenv").config()
const port = 3000
//middleware
app.use(express.json())

//Routes
app.get("/", (req, res) => {
  res.send("Hello Wold!")
})

app.use("/api/v1/tasks", tasks)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (err) {
    console.log(err)
  }
}

start()
