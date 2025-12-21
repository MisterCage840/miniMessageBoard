const pool = require("./pool")

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM koyebdb")
  return rows
}

async function getMessageById(messageId) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    messageId,
  ])
  return rows[0]
}

async function insertMessage(username, messageText) {
  await pool.query("INSERT INTO koyebdb (username,messageText) VALUES ($1)", [
    username,
    messageText,
  ])
}

module.exports = {
  getAllMessages,
  insertMessage,
  getMessageById,
}
