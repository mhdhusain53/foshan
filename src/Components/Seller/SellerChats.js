import React, { useState } from "react";
import SellerNavbar from "./SellerNavbar";
import Footer from "../Footer";
import ChatData from "../ChatData";
import ScrollToBottom from 'react-scroll-to-bottom';

const SellerChats = () => {
     console.log(ChatData[0]);
     const [user, setUser] = useState(0);

     const content =
          ChatData[user].msgs.map((element, key) => {
               var len = key * 10;
               return (
                    <div className={`w-2/3 h-10 `}>
                         <div className={`absolute  mx-2 px-2 py-1 rounded-full ${element.seller == 1 ? "right-0 bg-blue-200" : "bg-white left-0"}`}>
                              <p className={``}>
                                   {element.val}
                              </p>
                         </div>
                    </div>
               )
          }
          )

     return (
          <div>
               <SellerNavbar />
               <h1 className="text-center mb-6 text-3xl font-light border-t pt-6">Messages</h1>

               <div className="border md:m-6 md:mx-20 grid grid-cols-3 ">
                    <div className=" col-span-1 m-3">
                         <div className="px-2 my-6 text-center">
                              <input className="focus:border-b-2 focus:border-gray-600 px-1 inline-block border-b-2 border-gray-400 w-4/5 "></input>
                              <button>
                                   <svg className="w-8  hover:text-gray-600 text-gray-400 mr-2 inline-block " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                              </button>
                         </div>

                         <div onClick={() => { setUser(0) }} className="relative  h-28 mt-6 hover:bg-gray-100 border-b border-r border-t border-gray-400 p-2">
                              <img src="/images/logo.png" className="mt-2 ml-2 absolute top-4 rounded-full w-16 h-16 " />
                              <h1 className="absolute top-6 left-28 font-medium text-xl">{ChatData[0].name}</h1>
                              <h1 className="absolute top-16 left-28 font-light text-base">What is pricing of Steel ?</h1>
                              <p className="absolute top-7 right-6 font-normal text-blue-400 text-sm">Today</p>
                              {/* <p className="absolute top-16 shadow right-6 font-normal bg-red-500 rounded-full px-1 text-white text-sm">2</p> */}

                         </div>

                         <div onClick={() => { setUser(1) }} className="relative  h-28  hover:bg-gray-100 border-b border-r border-gray-400 p-2">
                              <img src="/images/logo.png" className="mt-2 ml-2 absolute top-4 rounded-full w-16 h-16 " />
                              <h1 className="absolute top-6 left-28 font-medium text-xl">{ChatData[1].name}</h1>
                              <h1 className="absolute top-16 left-28 font-light text-base">What is pricing of Steel ?</h1>
                              <p className="absolute top-7 right-6 font-normal text-blue-400 text-sm">Monday</p>
                              {/* <p className="absolute top-16 shadow right-6 font-normal bg-red-500 rounded-full px-1 text-white text-sm"></p> */}
                         </div>


                         <div onClick={() => { setUser(2) }} className="relative  h-28  hover:bg-gray-100 border-b border-r border-gray-400 p-2">
                              <img src="/images/logo.png" className="mt-2 ml-2 absolute top-4 rounded-full w-16 h-16 " />
                              <h1 className="absolute top-6 left-28 font-medium text-xl">{ChatData[2].name}</h1>
                              <h1 className="absolute top-16 left-28 font-light text-base">What is pricing of Steel ?</h1>
                              <p className="absolute top-7 right-6 font-normal text-blue-400 text-sm">Monday</p>
                              {/* <p className="absolute top-16 shadow right-6 font-normal bg-red-500 rounded-full px-1 text-white text-sm">2</p> */}
                         </div>
                         <div onClick={() => { setUser(3) }} className="relative  h-28  hover:bg-gray-100 border-b border-r border-gray-400 p-2">
                              <img src="/images/logo.png" className="mt-2 ml-2 absolute top-4 rounded-full w-16 h-16 " />
                              <h1 className="absolute top-6 left-28 font-medium text-xl">{ChatData[3].name}</h1>
                              <h1 className="absolute top-16 left-28 font-light text-base">What is pricing of Steel ?</h1>
                              <p className="absolute top-7 right-6 font-normal text-blue-400 text-sm">Tuesday</p>
                              {/* <p className="absolute top-16 shadow right-6 font-normal bg-red-500 rounded-full px-1 text-white text-sm">1</p> */}
                         </div>
                    </div>


                    <div className="col-span-2 relative border">
                         <div className=" bg-blue-600 text-center w-full h-24">
                              <img src="/images/logo.png" className="w-20 h-20 top-2 left-2 inline-block absolute rounded-full " />
                              <p className="text-white text-lg md:text-3xl mx-auto mt-8 text-center inline-block">{ChatData[user].name}</p>
                         </div>


                         <div className="bg-gray-200 overflow-scroll h-96 py-4" >
                              <ScrollToBottom >
                                   {content}
                              </ScrollToBottom>
                         </div>

                         <div className=" bg-blue-400 text-center pt-3  bottom-0 w-full h-16">
                              <textarea className="m-auto h-5/6 p-1 w-2/3 rounded px-2" />
                              <button className="  bg-green-500 hover:shadow-xl shadow p-1 px-3 rounded-full absolute right-16  bottom-4 text-white " >send</button>
                         </div>
                    </div>
               </div>

               <Footer />
          </div>
     )
}

export default SellerChats;