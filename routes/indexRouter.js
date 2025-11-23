const { Router } = require("express")
const indexRouter = Router()
const messages = require("../messages")

const links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "New message" },
]

indexRouter.get("/", (req, res) => {
  res.render("index", { messages, links })
})

indexRouter.get("/message/:id", (req, res) => {
  const message = messages[req.params.id]
  if (!message) {
    return res.status(404).send("Message not found")
  }
  res.render("messageDetails", { message, links })
})

module.exports = indexRouter
