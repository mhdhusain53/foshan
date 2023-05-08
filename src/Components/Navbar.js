import React, { useState } from "react";

export default (props) => {

     const [drop, setDrop] = useState(false);
     var location = window.location.pathname;
     const [nav, setNav] = useState(false);
     console.log(props.login);
     const logout=()=>{

     }
     const profile = () => {
          if (props.login === false) {
               return (
                    <div>
                         <a href="/login" class="text-lg text-center inline-block  py-2 px-3 mx-2 text-white bg-blue-700 rounded shadow hover:shadow-xl" aria-current="page">Login</a>
                    </div>
               )
          } else {
               return (
                    <div>
                         <button id="dropdownDefaultButton" onClick={() => { setDrop(!drop) }} data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-700  rounded text-lg font-medium px-3 mx-2 py-2 text-center inline-flex items-center shadow hover:shadow-xl" type="button">
                              <svg className="w-5 h-5 ml-1 mr-2 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                              Profile
                              <svg class="w-4 h-4 ml-2 mr-1" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                         </button>
                         <div id="dropdown" class={` ${drop ? "" : "hidden"} relative z-10 mx-2 bg-white  rounded-lg shadow `}>
                              <ul class="text-sm text-gray-600 absolute z-10 bg-white w-full text-center font-normal" aria-labelledby="dropdownDefaultButton">
                                   <li className="border">
                                        <a href="/order" class="block px-4 py-2 hover:bg-gray-100">Orders</a>
                                   </li>
                                   <li className="border">
                                        <a href="/chats" class="block px-4 py-2 hover:bg-gray-100">Chats</a>
                                   </li>
                                   <li className="border">
                                        <a href="/enquiries" class="block px-4 py-2 hover:bg-gray-100">Enquiry</a>
                                   </li>
                                   <li className="border">
                                        <a href="./" class="block px-4 py-2 hover:bg-gray-100">Logout</a>
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
                    <nav className="flex items-center justify-between flex-wrap bg-gray-200 px-6">
                         <a href="./"><img src="/images/logo.png" className="w-20" /></a>
                         <div className="block sm:hidden">
                              <button onClick={() => setNav(!nav)} className="flex items-center px-3 py-2 border rounded text-blue-700 border-blue-700 hover:text-white hover:bg-yellow-400 bg-white hover:border-yellow-400">
                                   <svg className="fill-current  h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Home</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                              </button>
                         </div>
                         <div className=" block flex-grow  sm:w-auto">
                              <div className={`${nav ? "" : "hidden"}  sm:flex sm:items-center text-lg sm:text-2xl sm:justify-center text-black`}>
                                   <div class="relative w-80  ">
                                        <div class="absolute inset-y-0 left--2 flex items-center pl-3 pointer-events-none">
                                             <svg class="w-7 h-7 text-gray-500 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <input type="text" id="search-navbar" class="h-12  block w-full p-2 pl-12 text-base text-gray-800 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-600 focus:border-gray-600" placeholder="Search..." />
                                   </div>
                              </div>
                         </div>
                         <div>
                              <a href="./seller" class="text-lg font-medium text-center inline-block py-2 px-3 mx-2 text-white bg-yellow-500 rounded shadow hover:shadow-xl ">Become a Seller</a>
                         </div>
                         <div>
                              {profile()}
                         </div>
                    </nav>
               </div>
          </div>
     )
}