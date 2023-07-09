import React, { useState } from "react";
import SellerNavbar from "./SellerNavbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";


const Contract = () => {
     const [dialog, setDialog] = useState(false);

     return (
          <div>
               <SellerNavbar />

               <div className="my-6 border mx-auto  px-8 py-1 rounded-full border-gray-600 text-center md:w-1/4 w-1/3 ">
                    <input type="text" className="outline-gray-50 appearance-none text-lg text-gray-600 focus:border-0 inline-block w-2/3 border-b-1 py-1 px-3" placeholder="Search Contract">

                    </input>
                    <svg className="w-7 h-7 text-gray-500 mr-2 inline-block " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>


               </div>
               <div className="grid grid-cols-3 md:mx-32 mx-6 my-12">
                    <div className="bg-blue-700 text-center px-4 mx-8 text-xl font-medium py-12">
                         <button className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">All Contracts</button>
                         <button className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Accepted Contracts</button>
                         <button className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Pending Contracts</button>
                         <button className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Rejected Contracts</button>
                    </div>


                    <div className="col-span-2 border relative">
                         <div className="px-8 my-6 flex">
                              <p className="text-3xl flex-1 font-light mx-auto">Contract Management</p>

                              <Link to="../seller/detail" >
                                   <button className="bg-yellow-500 hover:bg-yellow-600 flex-2 text-white px-2 py-1 shadow hover:shadow-2xl rounded">
                                        + Create New Contract
                                   </button>
                              </Link>


                         </div>

                         <div className="px-6 py-6 my-6  border mx-8  shadow hover:shadow-xl">
                              <p className="text-xl py-1 font-medium">Contract ID: # 404-6088121-1681909</p>
                              <p className="text-lg py-1 font-light">Name: <span className="font-normal">John T</span></p>
                              <p className="text-lg pb-1 font-light">Product: <span className="font-normal">Cashew</span></p>
                              <p className="text-lg pb-1 font-light">Quantity: <span className="font-normal">12 Tons</span></p>
                              <p className="text-lg pb-1 font-light">Address: <span className="font-normal">Survey No. 12, Near, Trimurti Chowk, Bharati Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra 411043</span></p>
                              <div className="flex justify-items-center mt-6">
                                   <p className="flex-1 inline-block">Status: <span className="text-green-700 font-medium">Accepted</span></p>
                                   <p className="flex-1 inline-block mx-6">Contract Date: <span className="font-medium">12-12-2022</span></p>
                                   <a className="flex-1 inline-block bg-green-700 text-center  py-1 text-white shadow hover:bg-green-800 hover:shadow-xl rounded-xl" href="./detail">
                                        <button className="inline-block ">Download Contract</button>
                                   </a>
                              </div>

                         </div>

                         <div className="px-6 py-6 my-6  border mx-8  shadow hover:shadow-xl">
                              <p className="text-xl py-1 font-medium">Contract ID: # 404-6088121-1681909</p>
                              <p className="text-lg py-1 font-light">Name: <span className="font-normal">John T</span></p>
                              <p className="text-lg pb-1 font-light">Product: <span className="font-normal">Cashew</span></p>
                              <p className="text-lg pb-1 font-light">Quantity: <span className="font-normal">12 Tons</span></p>
                              <p className="text-lg pb-1 font-light">Address: <span className="font-normal">Survey No. 12, Near, Trimurti Chowk, Bharati Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra 411043</span></p>
                              <div className="flex justify-items-center mt-6">
                                   <p className="flex-1 inline-block">Status: <span className="text-yellow-500 font-medium">Pending</span></p>
                                   <p className="flex-1 inline-block mx-6">Contract Date: <span className="font-medium">12-12-2022</span></p>
                                   {/* <button className="flex-1 inline-block bg-green-700  py-1 text-white shadow hover:bg-green-800 hover:shadow-xl rounded-xl">Download Contract</button> */}

                              </div>

                         </div>

                         <div className={` px-6 py-6 my-6  border mx-8  shadow hover:shadow-xl`}>
                              <p className="text-xl py-1 font-medium">Contract ID: # 404-6088121-1681909</p>
                              <p className="text-lg py-1 font-light">Name: <span className="font-normal">John T</span></p>
                              <p className="text-lg pb-1 font-light">Product: <span className="font-normal">Cashew</span></p>
                              <p className="text-lg pb-1 font-light">Quantity: <span className="font-normal">12 Tons</span></p>
                              <p className="text-lg pb-1 font-light">Address: <span className="font-normal">Survey No. 12, Near, Trimurti Chowk, Bharati Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra 411043</span></p>
                              <div className="flex justify-items-center mt-6">
                                   <p className="flex-1 inline-block">Status: <span className="text-red-500 font-medium">Rejected</span></p>
                                   <p className="flex-1 inline-block mx-6">Contract Date: <span className="font-medium">12-12-2022</span></p>
                                   {/* <button className="flex-1 inline-block bg-green-700  py-1 text-white shadow hover:bg-green-800 hover:shadow-xl rounded-xl">Download Contract</button> */}

                              </div>

                         </div>


                    </div>
               </div>

               <Footer />
          </div>
     )
}

export default Contract;