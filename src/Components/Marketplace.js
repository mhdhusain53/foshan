import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MarketplaceCard from "./MarketplaceCard";
import Filter from "./Filter";

const Marketplace = (props) => {
     return (
          <div>
               <Navbar />
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
                         <div className="my-6">
                              <p className="inline-block bg-blue-200 border border-gray-500 text-center text-lg ml-6 py-2 px-10">
                                   Location
                              </p>
                              <div className="inline-block border border-gray-500">
                                   <input className="inline-block text-gray-600 text-lg py-2 px-10" placeholder="Enter City"></input>
                                   <svg class="w-7 h-7 text-gray-500 mr-2 inline-block" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>

                              </div>

                         </div>
                         <div className="my-2 ml-4">
                              <Filter filter="Galvanized Steel"/>
                              <Filter filter="304"/>
                              <Filter filter="Maharashtra"/>
                         </div>

                         <div className="grid grid-cols-3 p-2 md:p-6 gap-7 text-center">
                              <a href="./detail">
                                   <MarketplaceCard />
                              </a>
                              <a href="./detail">
                                   <MarketplaceCard />
                              </a>
                              <a href="./detail">
                                   <MarketplaceCard />

                              </a>
                              <a href="./detail">
                                   <MarketplaceCard />
                              </a>
                              <a href="./detail">
                                   <MarketplaceCard />

                              </a>
                              <a href="./detail">
                                   <MarketplaceCard />

                              </a>
                              <a href="./detail">
                                   <MarketplaceCard />

                              </a>
                              <a href="./detail">
                                   <MarketplaceCard />

                              </a>
                         </div>
                    </div>

               </div>

               <Footer />
          </div>
     )
}

export default Marketplace