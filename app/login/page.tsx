"use client";

import React from "react";
import Link from "next/link";
import { login } from "@/src/actions";
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className=" flex flex-col">
        <h1 className="text-2xl font-semibold">Log into your account</h1>
        <form action={login} className="flex flex-col gap-y-4 mt-4">
          <input
            type="text"
            name="username"
            placeholder="Nickname or Email"
            className="border-b border-stone-700 p-2  mt-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border-b border-stone-700 p-2  mt-2"
          />

          <button
            type="submit"
            className="bg-stone-50 text-stone-800 p-2 rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
      <div className="mt-4 text-stone-400 text-center flex flex-wrap justify-center">
        <div>Don`t have an account yet?</div>
        <Link href="/signup" className="font-semibold px-2">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
