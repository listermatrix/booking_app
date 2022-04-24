import axios from "axios";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Router from "next/router";
import { useEffect, useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function redirectOnLogin() {
      const session = await getSession();
      if (session) window.location.replace("/");
    }
    redirectOnLogin();
  }, []);

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    return axios
      .post("/api/signup", {
        name,
        email,
        password,
      })
      .then(() => {
        alert("success");
        // console.log();
        window.location.replace("/");
      })
      .catch((e) => {
        setIsSubmitting(false);
        const errorMessage = e.response?.data?.message;
        console.log(errorMessage);
        alert(errorMessage || e.message);
      });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Sign up </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 ">
        <h1 className="font-bold">Start your 14-day free trial </h1>
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Email address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email address"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="**********"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-black rounded-lg focus:shadow-outline #hover:bg-indigo-800"
                type="submit">
                Sign up for free
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
