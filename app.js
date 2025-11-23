const express = require("express")
const indexRouter = require("./routes/indexRouter")
const app = express()
const path = require("path")
const newRouter = require("./routes/newRouter")
const PORT = "3000"

app.use(express.urlencoded({ extended: true }))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use("/", indexRouter)
app.use("/new", newRouter)

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})
