import React, { useState } from "react";
import { Link } from "react-router-dom";

export default (props) => {

     const [drop, setDrop] = useState(false);
     const logout = () => {
          localStorage.removeItem("user");
          window.location.pathname = "./";
     }
     const profile = () => {
          if (props.user === false) {
               return (
                    <div>
                         <Link to="/login" className="text-sm md:text-lg text-center inline-block py-1 md:py-2 px-2 md:px-3 mx-2 text-white bg-blue-700 rounded shadow hover:shadow-xl" aria-current="page">Login</Link>
                    </div>
               )
          } else {
               return (
                    <div className="ml-6">
                         <button id="dropdownDefaultButton" onClick={() => { setDrop(!drop) }} data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-700  rounded text-sm md:text-lg font-medium md:px-3 px-2 mx-2 py-1 md:py-2 text-center inline-flex items-center shadow hover:shadow-xl" type="button">
                              <svg className="md:w-5 w-4 h-4 md:h-5 ml-1 mr-2 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                              {props.user.name}
                              <svg className="w-4 h-4 ml-2 mr-1" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                         </button>
                         <div id="dropdown" className={` ${drop ? "" : "hidden"} relative z-10 mx-2 bg-white  rounded-lg shadow `}>
                              <ul className="text-sm text-gray-600 absolute z-10 bg-white w-full text-center font-normal" aria-labelledby="dropdownDefaultButton">
                                   <li className="border">
                                        <Link to="/order" className="block px-4 py-2 hover:bg-gray-100">Orders</Link>
                                   </li>
                                   <li className="border">
                                        <Link to="/chats" className="block px-4 py-2 hover:bg-gray-100">Chats</Link>
                                   </li>
                                   <li className="border">
                                        <Link to="/enquiries" className="block px-4 py-2 hover:bg-gray-100">Enquiry</Link>
                                   </li>
                                   <li className="border">
                                        <Link to="/contract" className="block px-4 py-2 hover:bg-gray-100">Contract</Link>
                                   </li>
                                   <li  className="border">
                                        <a onClick={()=>logout()} href="/" className="block px-4 py-2 hover:bg-gray-100">Logout</a>
                                   </li>

                              </ul>
                         </div>

                    </div>
               )
          }
     }

     return (
          <div>
               <div>
                    <nav className="flex items-center justify-between flex-wrap bg-gray-200 py-3 px-6">
                         <Link to="/marketplace"><img src="/images/logo.png" className="sm:w-20 w-16 " /></Link>

                         <div className={` mx-auto md:flex flex-wrap flex-auto px-4  text-center `} >
                              <div className={` mx-auto flex-auto text-center text-lg md:text-2xl inline-block text-black`}>
                                   <div className="relative mx-auto md:w-80 text-center w-56 ">
                                        <div className="absolute inset-y-0 left--2 flex items-center pl-3 pointer-events-none">
                                             <svg className="sm:w-7 sm:h-7 w-5 h-7 text-gray-500 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                        </div>
                                        <input type="text" id="search-navbar" className="sm:h-12 h-8 block w-full p-2 pl-12 text-sm sm:text-base text-gray-600 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-600 focus:border-gray-600" placeholder="Search..." />
                                   </div>
                              </div>
                              <div className="md:inline-block block mx-auto my-4 sm:mt-0">
                                   <div className="inline-block">
                                        <Link to="/seller" className="md:text-lg text-sm font-medium  text-center inline-block md:py-2 py-1 md:px-3 px-2 mx-2 text-white bg-yellow-500 rounded shadow hover:shadow-xl ">Become a Seller</Link>
                                   </div>
                                   <div className="inline-block">
                                        {profile()}
                                   </div>
                              </div>
                         </div>


                    </nav>
               </div>
          </div>
     )
}