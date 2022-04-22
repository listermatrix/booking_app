import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import prisma from "@helpers/prisma";

export async function getServerSideProps() {
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
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [attendee, setAttendee] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(date, duration, attendee, additionalNotes);

    await router.push({
      pathname: "confirm",
      query: { date: date, duration: duration, attendee: attendee, additionalNotes: additionalNotes },
    });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Book a meeting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 ">
        <h1 className="font-bold">Booking </h1>
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Chose a date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Duration (Min)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="number"
                min={1}
                onChange={(e) => setDuration(e.target.value)}
                value={duration}
                placeholder="Duration"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Attendee
              </label>

              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setAttendee(e.target.value)}>
                {data.map((user, i) => (
                  // eslint-disable-next-line react/jsx-key
                  <option value={user.id} key={i}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Additional Notes
              </label>

              <textarea
                className="w-full h-16 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                onChange={(e) => setAdditionalNotes(e.target.value)}
                defaultValue={additionalNotes}></textarea>
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
