import axios from "axios";
import { useSession } from "next-auth/react";
import { router } from "next/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import prisma from "@helpers/prisma";

export async function getStaticProps() {
  const attendees = await prisma.attendee.findMany({
    select: {
      id: true,
      email: true,
      name: true,
    },
  });
  return {
    props: {
      data: attendees,
    },
  };
}

function BookingForm({ data }) {
  const router = useRouter();
  const query = router.query;
  const _date = query.date;
  const _duration = query.duration;
  const _attendee = query.attendee;
  const _notes = query.additionalNotes;

  const { data: session, status } = useSession();

  const [name, setName] = useState(data[0].name ?? "");
  const [email, setEmail] = useState(data[0].email ?? "");
  // const [attendee, setAttendee] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState(_notes);

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    console.log(name, email, _date, _attendee, _notes);
    // await router.push("/booking/create");

    return axios
      .post("/api/booking", { name, email, _date, _attendee, _notes, _duration })
      .then(() => {
        alert("success");
        window.location.replace("/private");
      })
      .catch((e) => {
        const errorMessage = e.response?.data?.message;
        console.log(errorMessage);
        alert(errorMessage || e.message);
      });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Confirm a booking</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 ">
        <h1 className="font-bold">Booking Confirmation </h1>
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Your Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="John doe"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="abc@mail.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                + Additional Guests
              </label>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Additional Notes
              </label>

              <textarea
                className="w-full h-16 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                onChange={(e) => setAdditionalNotes(e.target.value)}
                defaultValue={additionalNotes}
                readOnly={true}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-black rounded-lg focus:shadow-outline #hover:bg-indigo-800"
                type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default BookingForm;
