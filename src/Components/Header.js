import React, { Component } from "react";
import Cart from '../Icons/Cart'

export default class Header extends Component {
  render() {
    return (
      <div
        className="container-fluid w-full h-24 bg-gray-200 "
      >
        <div className="grid grid-cols-4 justify-items-center">
          <div className="col-lg-2 col-sm-3 col-xs-12 col-md-2">
            <div className="mt-2">
              <img alt="logo" src="/logo.png" style={{ width: 80 }} />
            </div>
          </div>
          {/* search form */}
          <form className=" mt-8 mr-10">
            <div className="flex">
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                type="button"
              >
                All categories{" "}
                <svg
                  aria-hidden="true"
                  className="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-96 z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Search..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-red-700 rounded-r-lg border border-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
          <div>
            <Cart className="" width={30} />
          </div>
        </div>
      </div>
    );
  }
}
