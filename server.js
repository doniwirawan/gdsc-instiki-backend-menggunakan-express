const express = require("express")
const connectDB = require("./db/config")
const noteRoutes = require("./routes/notes")
const routeNotFound = require("./middleware/routeNotFound")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use("/notes", noteRoutes)
app.use(routeNotFound)

connectDB()

const { PORT } = process.env

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
