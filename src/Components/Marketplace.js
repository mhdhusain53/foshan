import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Marketplace = (props) => {
     return (
          <div>
               <Navbar/>
               <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
                    <div className="p-2 md:p-4 bg-blue-500">
                         <div>
                              <h1 className="text-yellow-400 font-semibold text-3xl mb-4">Related Category</h1>
                              <div className="my-2">
                                   <input type="checkbox" className="m-2 focus:ring-blue-500 w-4 h-4" />
                                   <span className="m-2 text-xl text-white">High Speed Steel</span>
                              </div>
                              <div className="my-2">
                                   <input type="checkbox" className="m-2 focus:ring-blue-500 w-4 h-4" />
                                   <span className="m-2 text-xl text-white">Cold Rolled Steel</span>
                              </div>
                              <div className="my-2">
                                   <input type="checkbox" className="m-2 focus:ring-blue-500 w-4 h-4" />
                                   <span className="m-2 text-xl text-white">Die Steels</span>
                              </div>
                              <div className="my-2">
                                   <input type="checkbox" className="m-2 focus:ring-blue-500 w-4 h-4" />
                                   <span className="m-2 text-xl text-white">Galvanized Steel</span>
                              </div>
                              <div className="my-2">
                                   <input type="checkbox" className="m-2 text-blue-900 focus:ring-blue-500 w-4 h-4" />
                                   <span className="m-2 text-xl text-white">Plastic Mould Steel</span>
                              </div>
                              <div className="my-2">
                                   <input type="checkbox" className="m-2 focus:ring-blue-500 w-4 h-4" />
                                   <span className="m-2 text-xl text-white">Surgical Steel</span>
                              </div>
                              <div className="my-2">
                                   <input type="checkbox" className="m-2 focus:ring-blue-500 w-4 h-4" />
                                   <span className="m-2 text-xl text-white">Prepainted Steel</span>
                              </div>
                              <div className="my-2">
                                   <input type="checkbox" className="m-2 focus:ring-blue-500 w-4 h-4" />
                                   <span className="m-2 text-xl text-white">Tor Steel</span>
                              </div>

                         </div>
                         <div className="my-12">
                              <h1 className="text-yellow-400 font-semibold text-3xl mb-4">Material Grade</h1>
                              <div className="my-2">
                                   <input type="checkbox" className="m-2 focus:ring-blue-500 w-4 h-4" />
                                   <span className="m-2 text-xl text-white">304</span>
                              </div>
                              <div className="my-2">
                                   <input type="checkbox" className="m-2 focus:ring-blue-500 w-4 h-4" />
                                   <span className="m-2 text-xl text-white">302</span>
                              </div>
                              <div className="my-2">
                                   <input type="checkbox" className="m-2 focus:ring-blue-500 w-4 h-4" />
                                   <span className="m-2 text-xl text-white">316</span>
                              </div>
                              <div className="my-2">
                                   <input type="checkbox" className="m-2 focus:ring-blue-500 w-4 h-4" />
                                   <span className="m-2 text-xl text-white">204 Cu</span>
                              </div>
                              <div className="my-2">
                                   <input type="checkbox" className="m-2 text-blue-900 focus:ring-blue-500 w-4 h-4" />
                                   <span className="m-2 text-xl text-white">409L</span>
                              </div>
                              <div className="my-2">
                                   <input type="checkbox" className="m-2 focus:ring-blue-500 w-4 h-4" />
                                   <span className="m-2 text-xl text-white">430</span>
                              </div>
                              <div className="my-2">
                                   <input type="checkbox" className="m-2 focus:ring-blue-500 w-4 h-4" />
                                   <span className="m-2 text-xl text-white">Duplex 32205</span>
                              </div>
                              <div className="my-2">
                                   <input type="checkbox" className="m-2 focus:ring-blue-500 w-4 h-4" />
                                   <span className="m-2 text-xl text-white">Duplex 32750</span>
                              </div>

                         </div>
                         <div>
                              <h1 className="text-yellow-400 font-semibold text-3xl mb-4">Usage</h1>
                              <div className="my-2">
                                   <input type="checkbox" className="m-2 focus:ring-blue-500 w-4 h-4" />
                                   <span className="m-2 text-xl text-white">Construction</span>
                              </div>
                              <div className="my-2">
                                   <input type="checkbox" className="m-2 focus:ring-blue-500 w-4 h-4" />
                                   <span className="m-2 text-xl text-white">Automobile Industry</span>
                              </div>
                              <div className="my-2">
                                   <input type="checkbox" className="m-2 focus:ring-blue-500 w-4 h-4" />
                                   <span className="m-2 text-xl text-white">Pharmaceutical / Chemical Industry</span>
                              </div>


                         </div>
                    </div>
                    <div className="lg:col-span-3 md:col-span-2 ">
                         
                         <div className="grid grid-cols-3 p-2 md:p-6 gap-10 text-center">
                         <a href="./detail">
                              <div className="shadow-2xl px-3 my-6">
                                   <img src="images/iron1.png" className="w-5/6 m-auto mb-6 " />
                                   <p className="font-light text-base">Shell Mould For Construction</p>
                                   <p className="text-lg font-semibold my-2">₹110/ KG</p>
                                   <p className="text-base">Vikas Iron & Steel Company</p>
                                   <p className="font-thin text-sm">Pune, Maharashtra</p>
                                   <button className="text-green-500 text-xl border border-green-500 mt-4 mb-6 rounded-full px-4 py-1">Contact Seller</button>
                              </div>
                              </a>
                              <a href="./detail">
                              <div className="shadow-2xl px-3  my-6">
                                   <img src="images/iron1.png" className="w-5/6 m-auto mb-6 " />
                                   <p className="font-light text-base">Shell Mould For Construction</p>
                                   <p className="text-lg font-semibold my-2">₹110/ KG</p>
                                   <p className="text-base">Vikas Iron & Steel Company</p>
                                   <p className="font-thin text-sm">Pune, Maharashtra</p>
                                   <button className="text-green-500 text-xl border border-green-500 mt-4 mb-6 rounded-full px-4 py-1">Contact Seller</button>
                              </div></a>
                              <a href="./detail">
                              <div className="shadow-2xl px-3  my-6">
                                   <img src="images/iron1.png" className="w-5/6 m-auto mb-6 " />
                                   <p className="font-light text-base">Shell Mould For Construction</p>
                                   <p className="text-lg font-semibold my-2">₹110/ KG</p>
                                   <p className="text-base">Vikas Iron & Steel Company</p>
                                   <p className="font-thin text-sm">Pune, Maharashtra</p>
                                   <button className="text-green-500 text-xl border border-green-500 mt-4 mb-6 rounded-full px-4 py-1">Contact Seller</button>
                              </div>
                              </a>
                              <a href="./detail">
                                   <div className="shadow-2xl px-3 my-6">
                                   <img src="images/iron1.png" className="w-5/6 m-auto mb-6 " />
                                   <p className="font-light text-base">Shell Mould For Construction</p>
                                   <p className="text-lg font-semibold my-2">₹110/ KG</p>
                                   <p className="text-base">Vikas Iron & Steel Company</p>
                                   <p className="font-thin text-sm">Pune, Maharashtra</p>
                                   <button className="text-green-500 text-xl border border-green-500 mt-4 mb-6 rounded-full px-4 py-1">Contact Seller</button>
                              </div></a>
                              <a href="./detail">
                              <div className="shadow-2xl px-3 my-6">
                                   <img src="images/iron1.png" className="w-5/6 m-auto mb-6 " />
                                   <p className="font-light text-base">Shell Mould For Construction</p>
                                   <p className="text-lg font-semibold my-2">₹110/ KG</p>
                                   <p className="text-base">Vikas Iron & Steel Company</p>
                                   <p className="font-thin text-sm">Pune, Maharashtra</p>
                                   <button className="text-green-500 text-xl border border-green-500 mt-4 mb-6 rounded-full px-4 py-1">Contact Seller</button>
                              </div>
                              </a>
                              <a href="./detail">
                              <div className="shadow-2xl px-3 my-6">
                                   <img src="images/iron1.png" className="w-5/6 m-auto mb-6 " />
                                   <p className="font-light text-base">Shell Mould For Construction</p>
                                   <p className="text-lg font-semibold my-2">₹110/ KG</p>
                                   <p className="text-base">Vikas Iron & Steel Company</p>
                                   <p className="font-thin text-sm">Pune, Maharashtra</p>
                                   <button className="text-green-500 text-xl border border-green-500 mt-4 mb-6 rounded-full px-4 py-1">Contact Seller</button>
                              </div>
                              </a>
                              <a href="./detail">
                              <div className="shadow-2xl px-3 my-6">
                                   <img src="images/iron1.png" className="w-5/6 m-auto mb-6 " />
                                   <p className="font-light text-base">Shell Mould For Construction</p>
                                   <p className="text-lg font-semibold my-2">₹110/ KG</p>
                                   <p className="text-base">Vikas Iron & Steel Company</p>
                                   <p className="font-thin text-sm">Pune, Maharashtra</p>
                                   <button className="text-green-500 text-xl border border-green-500 mt-4 mb-6 rounded-full px-4 py-1">Contact Seller</button>
                              </div>
                              </a>
                              <a href="./detail">
                              <div className="shadow-2xl px-3 my-6">
                                   <img src="images/iron1.png" className="w-5/6 m-auto mb-6 " />
                                   <p className="font-light text-base">Shell Mould For Construction</p>
                                   <p className="text-lg font-semibold my-2">₹110/ KG</p>
                                   <p className="text-base">Vikas Iron & Steel Company</p>
                                   <p className="font-thin text-sm">Pune, Maharashtra</p>
                                   <button className="text-green-500 text-xl border border-green-500 mt-4 mb-6 rounded-full px-4 py-1">Contact Seller</button>
                              </div>
                              </a>
                         </div>
                    </div>

               </div>

               <Footer />
          </div>
     )
}

export default Marketplace