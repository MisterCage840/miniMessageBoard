const { Router } = require("express")
const indexRouter = Router()
// const messages = require("../messages")
const messagesController = require("../controllers/messagesController")

// indexRouter.get("/", (req, res) => {
//   res.render("index", { messages, links })
// })

// indexRouter.get("/message/:id", (req, res) => {
//   const message = messages[req.params.id]
//   if (!message) {
//     return res.status(404).send("Message not found")
//   }
//   res.render("messageDetails", { message, links })
// })

indexRouter.get("/", messagesController.messagesListGet)
indexRouter.get("/message/:id", messagesController.messageUserGet)

module.exports = indexRouter
