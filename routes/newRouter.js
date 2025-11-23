const { Router } = require("express")
const newRouter = Router()
const messages = require("../messages")

newRouter.get("/", (req, res) => {
  res.render("form")
})

newRouter.post("/", (req, res) => {
  const { user, messageTxt } = req.body
  messages.push({ user: user, text: messageTxt, added: new Date() })
  res.redirect("/")
})

module.exports = newRouter
