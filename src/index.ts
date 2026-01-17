import "server-only";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error(
    "DATABASE_URL non è disponibile. Assicurati che sia definita in .env/.env.local e che questo modulo venga importato solo lato server. Poi riavvia `npm run dev`.",
  );
}

const sql = neon(connectionString);
const db = drizzle({ client: sql });

export default db;
