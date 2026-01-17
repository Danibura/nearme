import { pgTable, integer, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  nickname: varchar().notNull().unique(),
  email: varchar().notNull().unique(),
  password: varchar().notNull(),
});
