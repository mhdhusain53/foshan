import React from "react";

const Footer = () => {
     return (
          <div>
               <footer class="bg-blue-800 ">
                    <div class="mx-auto w-full max-w-screen-xl">
                         <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                              <div>
                                   <h2 class="mb-6 text-2xl font-semibold uppercase text-white">Useful Links</h2>
                                   <ul class="text-gray-300 text-base  font-medium">
                                        <li class="mb-4">
                                             <a href="#" class=" hover:underline">About</a>
                                        </li>
                                        <li class="mb-4">
                                             <a href="#" class="hover:underline">Contact</a>
                                        </li>
                                        <li class="mb-4">
                                             <a href="#" class="hover:underline">Advertise with us</a>
                                        </li>
                                        <li class="mb-4">
                                             <a href="#" class="hover:underline">Terms of Service</a>
                                        </li>
                                        <li class="mb-4">
                                             <a href="#" class="hover:underline">Privacy Policy</a>
                                        </li>
                                   </ul>
                              </div>
                              <div>
                                   <h2 class="mb-6 text-2xl font-semibold uppercase text-white">MarketPlace</h2>
                                   <ul class="text-gray-300 text-base  font-medium">
                                        <li class="mb-4">
                                             <a href="#" class="hover:underline">Buyers</a>
                                        </li>
                                        <li class="mb-4">
                                             <a href="#" class="hover:underline">Sellers</a>
                                        </li>
                                        <li class="mb-4">
                                             <a href="#" class="hover:underline">Markets</a>
                                        </li>
                                        <li class="mb-4">
                                             <a href="#" class="hover:underline">Warehouse</a>
                                        </li>
                                        <li class="mb-4">
                                             <a href="#" class="hover:underline">News</a>
                                        </li>
                                   </ul>
                              </div>
                              <div>
                                   <h2 class="mb-6 text-2xl font-semibold uppercase text-white">Our Services</h2>
                                   <ul class="text-gray-300 text-base  font-medium">
                                        <li class="mb-4">
                                             <a href="#" class="hover:underline">MarketPlace</a>
                                        </li>
                                        <li class="mb-4">
                                             <a href="#" class="hover:underline">Mandi Prices</a>
                                        </li>
                                        <li class="mb-4">
                                             <a href="#" class="hover:underline">Advisories</a>
                                        </li>
                                        <li class="mb-4">
                                             <a href="#" class="hover:underline">Market Watch</a>
                                        </li>
                                   </ul>
                              </div>
                              <div>
                                   <form className="">
                                        <input type="email" required className="text-base text-gray-500 px-4 p-2 rounded-full mb-3" placeholder="Enter Email"></input>
                                        <input type="text" required className="text-base text-gray-500  px-4 p-2 rounded-full my-3" placeholder="Enter Phone number"></input>
                                        <input type="text" required className="m-auto text-base text-gray-500  px-4 p-2 rounded-full my-3" placeholder="Enter your requirement"></input>
                                        <button className="text-white hover:bg-white hover:text-gray-500 bg-blue-600 px-6 mt-4 py-2 rounded-full text-xl block">Submit</button>

                                   </form>

                              </div>
                         </div>
                         <div class=" pb-6 text-center items-center justify-between">
                              <span class="text-sm text-white text-center">@ 2023 foshan.com. All Rights Reserved.</span>

                         </div>
                    </div>
               </footer>
          </div>
     )
}

export default Footer;