const express = require("express")
const connectDB = require("./db/config")
const noteRoutes = require("./routes/notes")

const app = express()
app.use(express.json())
app.use("/notes", noteRoutes)

connectDB()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
