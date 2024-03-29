import React, { useState } from "react";
import { Link } from "react-router-dom";

export default () => {
     var location = window.location.pathname;
     const [nav, setNav] = useState(false);
     return (
          <div>
               <div>
                    <nav className="flex items-center justify-between flex-wrap bg-gray-200 px-6">
                         <img src="/images/logo.png" className="w-20" />

                         <div className="block sm:hidden">
                              <button onClick={() => setNav(!nav)} className="flex items-center px-3 py-2 border rounded text-blue-700 border-blue-700 hover:text-white hover:bg-yellow-400 bg-white hover:border-yellow-400">
                                   <svg className="fill-current  h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Home</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                              </button>
                         </div>
                         <div className="w-full block flex-grow  sm:w-auto">

                              <div className={`${nav ? "" : "hidden"}  sm:flex sm:items-center text-lg sm:text-2xl sm:justify-center text-black`}>
                              <Link to="/seller/profile" className={`${location === "/seller/profile" ? "underline decoration-4 decoration-blue-800 underline-offset-8 " : "hover:font-medium hover:text-blue-800"} font-normal block mt-4 sm:inline-block ms:mt-0 mr-8`}>
                                       Profile
                                   </Link>
                                   <Link to="/seller/orders" className={`${location === "/seller/orders" ? "underline decoration-4 decoration-blue-800 underline-offset-8 " : "hover:font-medium hover:text-blue-800"} font-normal  block mt-4 sm:inline-block ms:mt-0 mr-8`}>
                                       Orders
                                   </Link>
                                   <Link to="/seller/chats" className={`${location === "/seller/chats" ? "underline decoration-4 decoration-blue-800 underline-offset-8  " : "hover:font-medium hover:text-blue-800"} font-normal block mt-4 sm:inline-block ms:mt-0 mr-8`}>
                                        Chats
                                   </Link>
                                   <Link to="/seller/enquiries" className={`${location === "/seller/enquiries" ? "underline decoration-4 decoration-blue-800 underline-offset-8 " : "hover:font-medium hover:text-blue-800"} font-normal block mt-4 sm:inline-block ms:mt-0 mr-8`}>
                                        Enquiries
                                   </Link>
                                   <Link to="/seller/contract" className={`${(location === "/seller/contract")||(location === "/seller/detail") ? "underline  decoration-4 decoration-blue-800 underline-offset-8 " : "hover:font-medium hover:text-blue-800"} font-normal block mt-4 sm:inline-block ms:mt-0 mr-8`}>
                                        Contract Management
                                   </Link>
                                   <Link to="/seller/add" className={`${(location === "/seller/add") ? "underline  decoration-4 decoration-blue-800 underline-offset-8 " : "hover:font-medium hover:text-blue-800"} font-normal block mt-4 sm:inline-block ms:mt-0 mr-8`}>
                                        Add Products
                                   </Link>
                                   
                              </div>
                         </div>

                    </nav>
               </div>
          </div>
     )
}