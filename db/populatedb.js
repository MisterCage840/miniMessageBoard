require("dotenv").config()
const { Client } = require("pg")

const SQL = `
CREATE TABLE IF NOT EXISTS public.messages (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  messageText VARCHAR(255) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Ensure the seed rows cannot be duplicated
CREATE UNIQUE INDEX IF NOT EXISTS messages_seed_unique
  ON public.messages (username, messageText);

INSERT INTO public.messages (username, messageText)
VALUES
  ('Amando','Hi there'),
  ('Charles','Hello World')
ON CONFLICT (username, messageText) DO NOTHING;
`

async function main() {
  console.log("seeding...")
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  })
  await client.connect()
  await client.query(SQL)
  await client.end()
  console.log("done")
}

main()
