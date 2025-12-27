const db = require("../db/queries")

const links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "New message" },
]

exports.messagesListGet = async (req, res) => {
  const messages = await db.getAllMessages()
  res.render("index", { messages, links })
}

exports.messageUserGet = async (req, res) => {
  const message = await db.getMessageById(req.params.id)
  if (!message) {
    return res.status(404).send("Message not found")
  }
  res.render("messageDetails", { message, links })
}
