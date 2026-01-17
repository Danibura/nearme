"use server";

import db from "@/src/index";
import { users } from "@/src/db/schema";
import { eq } from "drizzle-orm";

export const signup = async (formData: FormData) => {
  const nickname = formData.get("nickname") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await db
      .insert(users)
      .values({ nickname: nickname, email: email, password: password });
  } catch (err) {
    console.error("Signup DB error:", err);
    throw new Error("Errore durante la creazione dell'utente nel database.", {
      cause: err,
    });
  }
};

export const login = async (formData: FormData) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  try {
    const ris = await db
      .select()
      .from(users)
      .where(eq(users.nickname, username));

  } catch (error) {}
};
