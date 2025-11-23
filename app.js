const express = require("express")
const path = require("path")

const indexRouter = require("./routes/indexRouter")
const newRouter = require("./routes/newRouter")

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use("/", indexRouter)
app.use("/new", newRouter)

app.listen(PORT, (error) => {
  if (error) {
    throw error
  }
  console.log(`App is listening on port ${PORT}`)
})
