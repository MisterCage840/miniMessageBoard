const db = require("../db/queries")

const links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "New message" },
]

exports.newMessageGet = async (req, res) => {
  res.render("form", { links })
}

exports.newMessagePost = async (req, res) => {
  const { user, messageTxt } = req.body
  if (!user || !messageTxt) {
    return res.redirect("/new")
  }
  await db.insertMessage(user, messageTxt)
  res.redirect("/")
}
