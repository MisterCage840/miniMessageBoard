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

indexRouter.get("/message/:id", (req, res) => {
  const message = messages[req.params.id]
  if (!message) res.status(400).send("Message not found")
  res.render("messageDetails", { message })
})

module.exports = indexRouter
