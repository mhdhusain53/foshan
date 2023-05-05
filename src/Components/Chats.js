import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatData from "./ChatData";
import ScrollToBottom from 'react-scroll-to-bottom';

const Chats=(props)=>{
     const [user, setUser] = useState(0);

     const content = ChatData[user].msgs.map((element, key) => {
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
               <Navbar/>
               <h1 className="text-center mb-6 text-3xl font-light border-t pt-6">Messages</h1>

               <div className="border md:m-6 md:mx-20 grid grid-cols-3 ">
                    <div className=" col-span-1 m-3">
                         <div className="px-2 my-6 text-center">
                              <input className="focus:border-b-2 focus:border-gray-600 px-1 inline-block border-b-2 border-gray-400 w-4/5 "></input>
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 ml-2 fill-gray-500 inline-block" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" /></svg>
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

export default Chats;