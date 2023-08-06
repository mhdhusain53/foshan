import React from "react";
import { Link } from "react-router-dom";

const SellerHomeNavbar = () => {
     return (
          <div>
               <nav className="bg-white bg-gray-100 text-lg">
                    <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
                         <a href="/" className="flex items-center">
                              <img src="/images/logo.png" className="w-16 mr-3" alt="Flowbite Logo" />
                              <span className=" ml-4 self-center text-2xl font-semibold whitespace-nowrap ">Foshan For Sellers</span>
                         </a>

                         <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                              <span className="sr-only">Search</span>
                         </button>
                         

                         <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-search">

                              <ul className="flex  p-4 md:p-0 mt-4 font-medium align-items-center justify-items-center border border-gray-100 rounded-lg  md:flex-row  md:space-x-8  ">
                                   <li>
                                        <Link to="/seller/login" className="text-center inline-block  py-2 pl-3 pr-4 text-white bg-yellow-500 hover:bg-yellow-600 rounded   " aria-current="page">Start Selling</Link>
                                   </li>
                                   <li>
                                   <Link to="/seller/login" className="text-center inline-block  py-2 pl-3 pr-4 text-white bg-blue-700 rounded   " aria-current="page">Login</Link>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </nav>
          </div>
     )
}

export default SellerHomeNavbar;