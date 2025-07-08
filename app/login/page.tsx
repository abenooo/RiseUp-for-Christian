"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-fuchsia-50 to-fuchsia-100">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2 text-fuchsia-700">Welcome Back</h1>
        <p className="text-center text-gray-500 mb-8">
          Log in to continue your journey of faith and growth.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <Input
              type="password"
              placeholder="Your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold rounded-full py-3">
            Log In
          </Button>
        </form>
        <div className="text-center mt-6 text-sm text-gray-600">
          New to FaithConnect?{" "}
          <Link href="/signup" className="text-fuchsia-600 hover:underline font-medium">
            Create an account
          </Link>
        </div>
        <div className="text-center mt-2">
          <Link href="/" className="text-xs text-gray-400 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
