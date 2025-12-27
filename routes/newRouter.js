const { Router } = require("express")
const newRouter = Router()
const newMessagesController = require("../controllers/newMessagesController")
// const messages = require("../messages")

newRouter.get("/", newMessagesController.newMessageGet)
newRouter.post("/", newMessagesController.newMessagePost)

module.exports = newRouter
