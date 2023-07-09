import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Order = (props) => {
     const [rating, setRating] = useState([0,0,0]);
     return (
          <div>
               <Navbar user={props.user}/>
               <div className="grid grid-cols-3 md:mx-32 mx-6 my-12">
                    <div className="bg-blue-700 text-center px-4 mx-8 text-xl font-medium py-12">
                         <button className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">All Orders</button>
                         <button className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Last month</button>
                         <button className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Last 3 months</button>
                         <button className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">last 6 months</button>
                    </div>


                    <div className="col-span-2 border">
                         <div className="px-8 my-6 flex">
                              <p className="text-3xl flex-1 font-light mx-auto">Previous Orders</p>
                         </div>

                         <div className="px-6 py-6 my-6  border mx-8 relative shadow hover:shadow-xl">
                              <div className="flex ">
                                   <p className="flex-1 text-xl py-1 font-medium">Order ID: # 404-6088121-1681909</p>
                                   <div>
                                        <button onClick={()=>{setRating(1)}} className="text-white text-sm bg-green-700 py-1 px-2 rounded hover:shadow-xl">Give Feedback</button>
                                   </div>
                              </div>
                              <p className="text-lg py-1 font-light">Name: <span className="font-normal">John T</span></p>
                              <p className="text-lg pb-1 font-light">Product: <span className="font-normal">Cashew</span></p>
                              <p className="text-lg pb-1 font-light">Quantity: <span className="font-normal">12 Tons</span></p>
                              <p className="text-lg pb-1 font-light">Address: <span className="font-normal">Survey No. 12, Near, Trimurti Chowk, Bharati Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra 411043</span></p>
                              <p className="text-lg pb-1 font-light ">Order Date: <span className="font-medium">12-12-2022</span></p>
                              <button className="inline-block text-lg text-purple-900 hover:underline decoration-1 decoration-blue-800 underline-offset-2">Read More</button>

                              <div className={`absolute ${rating == 1 ? "" : "hidden"} p-4 w-full h-full bg-white z-12 top-0 left-0`}>
                                   <p className=" mb-2 font-semibold text-lg text-center">Give Your Feedback</p>
                                   <div className="text-lg  py-4">
                                        <p className="inline-block text-base font-normal">Rate Out of 5 ⭐ : </p>
                                        <input className="px-1 border-b border-black  text-base font-medium outline-gray-400 appearance-none mx-2 focus:border-gray-500 w-8 inline-block [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number"></input>
                                        <p className="inline-block  text-base font-medium">/ 5  </p>
                                   </div>
                                   <textarea className="border border-gray-300 w-3/4 h-2/5  p-2 outline-gray-400" placeholder="Your feedback helps other to choose product accordingly."></textarea>
                                   <button onClick={()=>{setRating(0)}} className="text-white bg-green-700 py-1 px-2 rounded hover:shadow-xl mt-2 block">Submit</button>

                              </div>


                         </div>

                         <div className="px-6 py-6 my-6  border mx-8  shadow hover:shadow-xl">
                              <div className="flex ">
                                   <p className="flex-1 text-xl py-1 font-medium">Order ID: # 404-6088121-1681909</p>
                                   <p className="flex-1 text-right text-xl  pb-1 font-medium ">Your Rating: <span className="ml-1font-semibold">4.2 ⭐</span></p>
                              </div>
                              <p className="text-lg py-1 font-light">Name: <span className="font-normal">John T</span></p>
                              <p className="text-lg pb-1 font-light">Product: <span className="font-normal">Cashew</span></p>
                              <p className="text-lg pb-1 font-light">Quantity: <span className="font-normal">12 Tons</span></p>
                              <p className="text-lg pb-1 font-light">Address: <span className="font-normal">Survey No. 12, Near, Trimurti Chowk, Bharati Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra 411043</span></p>
                              <p className="text-lg pb-1 font-light ">Order Date: <span className="font-medium">12-12-2022</span></p>

                              <button className="inline-block text-lg text-purple-900 hover:underline decoration-1 decoration-blue-800 underline-offset-2">Read More</button>


                         </div>

                         <div className="px-6 py-6 my-6  border mx-8  shadow hover:shadow-xl">
                              <div className="flex ">
                                   <p className="flex-1 text-xl py-1 font-medium">Order ID: # 404-6088121-1681909</p>
                                   <p className="flex-1 text-right text-xl  pb-1 font-medium ">Your Rating: <span className="ml-1font-semibold">4.3 ⭐</span></p>
                              </div>
                              <p className="text-lg py-1 font-light">Name: <span className="font-normal">John T</span></p>
                              <p className="text-lg pb-1 font-light">Product: <span className="font-normal">Cashew</span></p>
                              <p className="text-lg pb-1 font-light">Quantity: <span className="font-normal">12 Tons</span></p>
                              <p className="text-lg pb-1 font-light">Address: <span className="font-normal">Survey No. 12, Near, Trimurti Chowk, Bharati Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra 411043</span></p>
                              <p className="text-lg pb-1 font-light ">Order Date: <span className="font-medium">12-12-2022</span></p>
                              <p className="text-lg pb-1 font-light ">Your Rating: <span className="font-medium">4.2 ⭐</span></p>
                              <button className="inline-block text-lg text-purple-900 hover:underline decoration-1 decoration-blue-800 underline-offset-2">Read More</button>

                         </div>




                    </div>
               </div>

               <Footer />
          </div>
     )
}

export default Order;