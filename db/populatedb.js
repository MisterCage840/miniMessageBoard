require("dotenv").config()
const { Client } = require("pg")

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  messageText VARCHAR (255),
  created_at TIMESTAMPTZ DEFAULT NOW()

);

INSERT INTO messages (username,messageText) 
VALUES
  ('Amando','Hi there'),
  ('Charles', 'Hello World');
`

async function main() {
  console.log("seeding...")
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  })
  console.log("DB:", process.env.DATABASE_URL)
  await client.connect()
  await client.query(SQL)
  await client.end()
  console.log("done")
}

main()
