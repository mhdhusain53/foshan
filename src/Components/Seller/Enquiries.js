import React, { useState } from "react";
import SellerNavbar from "./SellerNavbar";
import Footer from "../Footer";


const Enquiries = () => {
     const [dialog,setDialog]=useState(false);
     const setfinal=()=>{
          setDialog(false);
  
      }

     return (
          <div>
               <SellerNavbar />

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

                         <div className="px-6 py-3 my-3 grid  grid-cols-2 md:grid-cols-3 border mx-8  shadow hover:shadow-xl">
                              <div className="col-span-2">
                                   <p className="text-xl font-medium mb-2">Aille Gangadhar</p>
                                   <p className="text-base font-normal">Product:</p>
                                   <p className="text-base font-normal">Quantity:</p>
                                   <button className="text-base text-purple-900 hover:underline decoration-1 decoration-blue-800 underline-offset-2">Read More</button>
                              </div>
                              <div className="col-span-1 text-center py-3">
                                   <button  onClick={()=>{setDialog(true);setTimeout(setfinal,2950);}} className="text-white shadow my-2 hover:shadow-xl bg-green-600 rounded-full w-32 py-1 mx-auto block">Accept</button>
                                   <button className="text-white shadow my-2 hover:shadow-xl bg-red-600 rounded-full w-32 py-1 mx-auto block">Reject</button>
                              </div>

                         </div>


                         <div className="px-6 py-3  my-3 grid grid-cols-2 md:grid-cols-3 border mx-8  shadow hover:shadow-xl">
                              <div className="col-span-2">
                                   <p className="text-xl font-medium mb-2">Aille Gangadhar</p>
                                   <p className="text-base font-normal">Product:</p>
                                   <p className="text-base font-normal">Quantity:</p>
                                   <button className="text-base text-purple-900 hover:underline decoration-1 decoration-blue-800 underline-offset-2">Read More</button>
                              </div>
                              <div className="col-span-1 text-center py-3">
                                   <button onClick={()=>{setDialog(true);setTimeout(setfinal,2950);}} className="text-white shadow my-2 hover:shadow-xl bg-green-600 rounded-full w-32 py-1 mx-auto block">Accept</button>
                                   <button className="text-white shadow my-2 hover:shadow-xl bg-red-600 rounded-full w-32 py-1 mx-auto block">Reject</button>
                              </div>

                         </div>


                         <div className="px-6 py-3  my-3 grid  grid-cols-2 md:grid-cols-3 border mx-8  shadow hover:shadow-xl">
                              <div className="col-span-2">
                                   <p className="text-xl font-medium mb-2">Aille Gangadhar</p>
                                   <p className="text-base font-normal">Product:</p>
                                   <p className="text-base font-normal">Quantity:</p>
                                   <button className="text-base text-purple-900 hover:underline decoration-1 decoration-blue-800 underline-offset-2">Read More</button>
                              </div>
                              <div className="col-span-1 text-center py-3">
                                   <button  onClick={()=>{setDialog(true);setTimeout(setfinal,2950);}} className="text-white shadow my-2 hover:shadow-xl bg-green-600 rounded-full w-32 py-1 mx-auto block">Accept</button>
                                   <button className="text-white shadow my-2 hover:shadow-xl bg-red-600 rounded-full w-32 py-1 mx-auto block">Reject</button>
                              </div>

                         </div>

                         <div className={`absolute ${dialog == true ? "" : "hidden"} bg-gray-100 z-50 w-full h-full top-0 text-center`}>
                              <div className=" mx-auto mt-8">
                                   <img className="md:w-1/3 w-2/5 m-auto my-4" src="/images/check.gif" alt="check sign"></img>
                                   <p className="text-3xl my-12 text-green-600">Request Accepted Successfully</p>
                              </div>
                             
                         </div>



                    </div>
               </div>

               <Footer />
          </div>
     )
}
export default Enquiries;