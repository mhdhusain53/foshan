import React, { useState } from "react";
import SellerNavbar from "./SellerNavbar";
import Footer from "../Footer";

const Contract = () => {
     const [dialog, setDialog] = useState(false);
     const [def, setDef] = useState(true);

     return (
          <div>
               <SellerNavbar />
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
                              <button onClick={() => { setDialog(true) }} className="bg-yellow-500 hover:bg-yellow-600 flex-2 text-white px-2 py-1 shadow hover:shadow-2xl rounded">+ Create New Contract</button>
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

                         <div className={`${dialog == true ? "hidden" : ""} px-6 py-6 my-6  border mx-8  shadow hover:shadow-xl`}>
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

                         <div className={`absolute ${dialog == true ? "" : "hidden"} bg-gray-100 z-50 w-full h-full top-0 text-center`}>
                              <div className="bg-gray-300 w-3/4 h-2/5 mx-auto mt-8">

                              </div>
                              <p className="font-medium text-lg text-center my-4">* Add your Digital Signature</p>
                              <p className="font-medium text-lg text-center my-4">* Terms and Condition</p>
                              <div className="my-3 mt-6">

                                   <div class="mx-3 inline-block items-center text-center">
                                        <input onClick={() => { setDef(true) }} id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 " />
                                        <label for="default-radio-1" class="ml-2 text-bas font-normal ">Use default contract template</label>
                                   </div>
                                   <div class="mx-3 inline-block items-center">
                                        <input onClick={() => { setDef(false) }} id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2" />
                                        <label for="default-radio-2" class="ml-2 text-base font-normal ">Use your own contract</label>
                                   </div>

                              </div>

                              <div className={`text-center mt-8 mb-4 ${def == false ? "" : "hidden"}`}>
                                   <label className="block mb-2 font-medium text-lg" for="input">Upload your own contract</label>
                                   <input type="file" className="w-52" id="input"></input>
                              </div>

                              <a href="./detail">
                                   <button  className="text-white bg-green-700 mx-auto my-8 text-center shadow hover:shadow-xl px-3 py-1 rounded">Create Contract</button>

                              </a>

                         </div>


                    </div>
               </div>

               <Footer />
          </div>
     )
}

export default Contract;