import Head from "next/head";
import "tw-elements";

export default function Manage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
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
              Cancelled
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
                      <thead className="bg-white border-b">
                        <tr>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Date
                          </th>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Description
                          </th>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-gray-100 border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Mark
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Otto
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
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
  );
}
