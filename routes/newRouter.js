const { Router } = require("express")
const newRouter = Router()
const messages = require("../messages")

const links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "New message" },
]

newRouter.get("/", (req, res) => {
  res.render("form", { links })
})

newRouter.post("/", (req, res) => {
  const { user, messageTxt } = req.body
  if (!user || !messageTxt) {
    return res.redirect("/new")
  }

  messages.push({ user, text: messageTxt, added: new Date() })
  res.redirect("/")
})

module.exports = newRouter
