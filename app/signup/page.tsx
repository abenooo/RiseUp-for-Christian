"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-fuchsia-50 to-fuchsia-100">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2 text-fuchsia-700">Create Your Account</h1>
        <p className="text-center text-gray-500 mb-8">
          Join FaithConnect Ethiopia and grow in faith with a supportive Christian community.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <Input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
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
              placeholder="Create a password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold rounded-full py-3">
            Sign Up
          </Button>
        </form>
        <div className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-fuchsia-600 hover:underline font-medium">
            Log in
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
