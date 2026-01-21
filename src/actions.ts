"use server";

import db from "@/src/index";
import { users } from "@/src/db/schema";
import { eq, or } from "drizzle-orm";
import bcrypt from "bcryptjs";

export const signup = async (formData: FormData) => {
  const nickname = formData.get("nickname") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const sameUsers = await db
      .select()
      .from(users)
      .where(or(eq(users.nickname, nickname), eq(users.email, email)));
    if (sameUsers.length > 0) {
      return { success: false, message: "User already exists" };
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      await db
        .insert(users)
        .values({ nickname: nickname, email: email, password: hashedPassword });
      return { success: true, message: "User created successfully" };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Error during user creation",
    };
  }
};

export const login = async (formData: FormData) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  try {
    const ris = await db
      .select()
      .from(users)
      .where(or(eq(users.nickname, username), eq(users.email, username)))
      .limit(1);

    if (ris.length > 0) {
      const isPasswordValid = await bcrypt.compare(password, ris[0].password);
      if (isPasswordValid)
        return { success: true, message: "Login successful" };
      else return { success: false, message: "Password incorrect" };
    } else return { success: false, message: "Nickname or email incorrect" };
  } catch (error) {
    return { success: false, message: "Error during login" };
  }
};
