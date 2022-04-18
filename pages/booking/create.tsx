import Head from "next/head";
import Script from "next/script";

export default function BookingForm() {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <Head>
            <title>Booking Page</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="flex flex-col  w-full flex-1  mt-10 px-20">
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
              <Head>
                <title>Booking</title>
                <link rel="icon" href="/favicon.ico" />
              </Head>

              <main className="flex flex-col items-center justify-center w-full flex-1 px-20 ">
                <h1 className="font-bold">Select A Date </h1>
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center">
                    <div
                      className="datepicker relative form-floating mb-3 xl:w-96"
                      data-mdb-toggle-button="false">
                      <input
                        type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Select a date"
                        data-mdb-toggle="datepicker"
                      />
                      <label htmlFor="floatingInput" className="text-gray-700">
                        Select a date
                      </label>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
