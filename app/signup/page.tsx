"use client";

import React from "react";
import Link from "next/link";
import { signup } from "@/src/actions";
const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className=" flex flex-col">
        <h1 className="text-2xl font-semibold">Create an account</h1>
        <form action={signup} className="flex flex-col gap-y-4 mt-4">
          <input
            type="text"
            name="nickname"
            placeholder="Nickname"
            className="border-b border-stone-700 p-2  mt-2"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
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
            Signup
          </button>
        </form>
      </div>
      <div className="mt-4 text-stone-400 text-center flex flex-wrap justify-center">
        <div>Already have an account?</div>
        <Link href="/login" className="font-semibold px-2">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
