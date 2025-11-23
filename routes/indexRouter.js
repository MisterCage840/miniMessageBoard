const { Router } = require("express")
const indexRouter = Router()
const messages = require("../messages")

const links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "New Message" },
]

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages, links: links })
})

module.exports = indexRouter
