import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Detail = (props) => {
     const [dialog, setDialog] = useState(false);
     const setfinal = () => {
          window.location="/marketplace";
     }

     return (
          <div>
               <Navbar/>
               <div className="p-2 md:px-28 md:p-10">
                    <h1 className="text-3xl text-center  font-medium mb-8">Shell Mould Iron For Construction</h1>
                    <div className="grid md:grid-cols-2 text-center md:text-left">
                         <div className="align-items-center relative">
                              <img src="images/iron1.png" className=" md:w-5/6 w-full rounded"></img>
                              <div className="absolute text:lg md:text-2xl top-0 bg-gray-200  rounded-full px-2 py-1 ml-2 mt-2">
                                   <span className="ml-2">4.2⭐</span>
                              </div>
                              <h1 className="text-2xl mt-4">Vikas Iron & Steel Company</h1>
                              <p className="text-xl mb-8 font-light">Pune, Maharashtra</p>


                         </div>
                         <div className="text-xl font-light relative">
                              <div className="my-1">
                                   <span>Variety:</span>
                                   <span></span>
                              </div>
                              <div className="my-1">
                                   <span >Usage:</span>
                                   <span className="font-normal pl-4 text-2xl">Construction</span>
                              </div>
                              <div className="my-1">
                                   <span>Packaging Type:</span>
                                   <span></span>
                              </div>
                              <div className="my-1">
                                   <span>Packaging Size:</span>
                                   <span></span>
                              </div>
                              <div className="my-1">
                                   <span>Quality Expected:</span>
                                   <span></span>
                              </div>
                              <div className="my-1">
                                   <span>Price:</span>
                                   <span className="font-normal pl-4 text-2xl">Rs 100.00 - 110.00/Kg</span>
                              </div>
                              <div>
                                   <a href="./chats">
                                        <button className="text-green-700 mt-2 font-normal hover:text-white hover:bg-green-700 border border-green-700 py-1 px-2 text-xl rounded-lg">
                                             Chat with Seller
                                        </button>
                                   </a>
                              </div>
                              <hr className="my-6 border border-gray-300"></hr>
                              <div className="grid grid-cols-2 ">
                                   <div>
                                        <h1 className="font-normal text-xl">Enter required Quantity:</h1>
                                        <input type="number" className="border border-gray-400 w-24 rounded px-1 text-lg mt-1"></input><span className="ml-1">tons</span>
                                   </div>
                                   <div className="">
                                        <h1 className="font-normal text-xl">Enter Lot Size:</h1>
                                        <input type="number" className="border  border-gray-400 w-24 rounded px-1 text-lg mt-1"></input>
                                   </div>
                              </div>
                              <div className="  mt-4" >
                                   <a className="m-auto">
                                        <button onClick={() => { setDialog(true); setTimeout(setfinal, 2950); }} className=" m-auto text-green-700 hover:text-white font-normal hover:bg-green-700 border border-green-700 py-1 px-2 text-xl rounded-lg">
                                             Submit requirement
                                        </button>
                                   </a>

                              </div>

                              <div className={`absolute ${dialog == true ? "" : "hidden"} bg-gray-100 z-50 w-full h-full top-0 text-center`}>
                                   <div className="   mx-auto mt-8">
                                        <img className="w-2/5 m-auto my-4" src="/images/check.gif" alt="check sign"></img>
                                        <p className="text-3xl my-12 text-green-600">Request Submitted Successfully</p>
                                   </div>

                              </div>
                         </div>
                    </div>





               </div>




               <Footer />
          </div>
     )
}

export default Detail;