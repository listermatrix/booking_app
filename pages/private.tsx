import Head from "next/head";
import Router from "next/router";
import Script from "next/script";

export default function Manage() {
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
            <ul
              className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
              id="tabs-tab"
              role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  href="#tabs-home"
                  className="nav-link block  font-medium  text-xs  leading-tight  uppercase  border-x-0 border-t-0 border-b-2 border-transparent  px-6  py-3  my-2  hover:border-transparent hover:bg-gray-100  focus:border-transparent  active"
                  id="tabs-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-home"
                  role="tab"
                  aria-controls="tabs-home"
                  aria-selected="true">
                  Upcoming
                </a>
                <button
                  onClick={() => Router.push("/booking/create")}
                  className="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                  Create
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  href="#tabs-profile"
                  className="nav-link block  font-medium  text-xs  leading-tight  uppercase  border-x-0 border-t-0 border-b-2 border-transparent  px-6  py-3  my-2  hover:border-transparent hover:bg-gray-100  focus:border-transparent"
                  id="tabs-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-profile"
                  role="tab"
                  aria-controls="tabs-profile"
                  aria-selected="false">
                  Past
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  href="#tabs-messages"
                  className="nav-link block  font-medium  text-xs  leading-tight  uppercase  border-x-0 border-t-0 border-b-2 border-transparent  px-6  py-3  my-2  hover:border-transparent hover:bg-gray-100  focus:border-transparent"
                  id="tabs-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-messages"
                  role="tab"
                  aria-controls="tabs-messages"
                  aria-selected="false">
                  Cancelled.
                </a>
              </li>
            </ul>
            <div className="tab-content" id="tabs-tabContent">
              <div
                className="tab-pane fade show active"
                id="tabs-home"
                role="tabpanel"
                aria-labelledby="tabs-home-tab">
                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full">
                          <thead className="bg-white border-b"></thead>
                          <tbody>
                            <tr className="bg-gray-100 border-b">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                1
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                Mark
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <div className="flex space-x-2 justify-center">
                                  <button
                                    type="button"
                                    className="inline-block px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                    Cancel
                                  </button>
                                  <button
                                    type="button"
                                    className="inline-block px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                    Reschedule
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="tabs-profile"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab">
                Tab 2 content
              </div>
              <div
                className="tab-pane fade"
                id="tabs-messages"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab">
                Tab 3 content
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
