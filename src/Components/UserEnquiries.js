import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


const UserEnquiries = () => {
     const [dialog, setDialog] = useState(false);
     const setfinal = () => {
          setDialog(false);

     }

     return (
          <div>
               <Navbar />

               <div className="grid grid-cols-3 md:mx-32 mx-6 my-12">
                    <div className="bg-blue-700 text-center px-4 mx-8 text-xl font-medium pt-12">
                         <button className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Latest Requests First</button>
                         <button className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Oldest Requests First</button>
                         <button className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Frequent Buyers</button>

                    </div>


                    <div className="col-span-2 border relative">
                         <div className="text-center my-6">
                              <p className="text-3xl font-light mx-auto">Enquiries</p>
                         </div>

                         <div className="px-6 py-3 my-3   border mx-8  shadow hover:shadow-xl">
                              <div className="">
                                   <p className="text-lg py-1 font-light">Name: <span className="font-normal">John T</span></p>
                                   <p className="text-lg pb-1 font-light">Product: <span className="font-normal">Cashew</span></p>
                                   <p className="text-lg pb-1 font-light">Quantity: <span className="font-normal">12 Tons</span></p>
                                   <p className="text-lg pb-1 font-light">Address: <span className="font-normal">Survey No. 12, Near, Trimurti Chowk, Bharati Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra 411043</span></p>


                                   <button className="text-base text-purple-900 hover:underline decoration-1 decoration-blue-800 underline-offset-2">Read More</button>
                              </div>
                         </div>


                         <div className="px-6 py-3 my-3   border mx-8  shadow hover:shadow-xl">
                              <div className="">
                                   <p className="text-lg py-1 font-light">Name: <span className="font-normal">John T</span></p>
                                   <p className="text-lg pb-1 font-light">Product: <span className="font-normal">Cashew</span></p>
                                   <p className="text-lg pb-1 font-light">Quantity: <span className="font-normal">12 Tons</span></p>
                                   <p className="text-lg pb-1 font-light">Address: <span className="font-normal">Survey No. 12, Near, Trimurti Chowk, Bharati Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra 411043</span></p>


                                   <button className="text-base text-purple-900 hover:underline decoration-1 decoration-blue-800 underline-offset-2">Read More</button>
                              </div>
                         </div>


                         <div className="px-6 py-3 my-3   border mx-8  shadow hover:shadow-xl">
                              <div className="">
                                   <p className="text-lg py-1 font-light">Name: <span className="font-normal">John T</span></p>
                                   <p className="text-lg pb-1 font-light">Product: <span className="font-normal">Cashew</span></p>
                                   <p className="text-lg pb-1 font-light">Quantity: <span className="font-normal">12 Tons</span></p>
                                   <p className="text-lg pb-1 font-light">Address: <span className="font-normal">Survey No. 12, Near, Trimurti Chowk, Bharati Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra 411043</span></p>


                                   <button className="text-base text-purple-900 hover:underline decoration-1 decoration-blue-800 underline-offset-2">Read More</button>
                              </div>
                         </div>

                    </div>
               </div>

               <Footer />
          </div>
     )
}
export default UserEnquiries;