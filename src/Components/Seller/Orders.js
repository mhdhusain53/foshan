import React from "react";
import SellerNavbar from "./SellerNavbar";
import Footer from "../Footer";

const Orders = () => {
     return (
          <div>
               <SellerNavbar />
               <div className="grid grid-cols-3 md:mx-32 mx-6 my-12">
                    <div className="bg-blue-700 text-center px-4 mx-8 text-xl font-medium py-12">
                         <button className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">All Orders</button>
                         <button className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Last month</button>
                         <button className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Last 3 months</button>
                         <button className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">last 6 months</button>
                    </div>


                    <div className="col-span-2 border">
                         <div className="px-6 my-6 flex">
                              <p className="text-3xl flex-1 font-light mx-auto">Previous Orders</p>
                         </div>

                         <div className="px-6 py-6 my-6  border mx-8  shadow hover:shadow-xl">
                              <p className="text-xl py-1 font-medium">Order ID: # 404-6088121-1681909</p>
                              <p className="text-lg py-1 font-light">Name: <span className="font-normal">John T</span></p>
                              <p className="text-lg pb-1 font-light">Product: <span className="font-normal">Cashew</span></p>
                              <p className="text-lg pb-1 font-light">Quantity: <span className="font-normal">12 Tons</span></p>
                              <p className="text-lg pb-1 font-light">Address: <span className="font-normal">Survey No. 12, Near, Trimurti Chowk, Bharati Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra 411043</span></p>
                              <p className=" ">Order Date: <span className="font-medium">12-12-2022</span></p>
                              <button className="inline-block text-lg text-purple-900 hover:underline decoration-1 decoration-blue-800 underline-offset-2">Read More</button>


                         </div>

                         <div className="px-6 py-6 my-6  border mx-8  shadow hover:shadow-xl">
                              <p className="text-xl py-1 font-medium">Order ID: # 404-6088121-1681909</p>
                              <p className="text-lg py-1 font-light">Name: <span className="font-normal">John T</span></p>
                              <p className="text-lg pb-1 font-light">Product: <span className="font-normal">Cashew</span></p>
                              <p className="text-lg pb-1 font-light">Quantity: <span className="font-normal">12 Tons</span></p>
                              <p className="text-lg pb-1 font-light">Address: <span className="font-normal">Survey No. 12, Near, Trimurti Chowk, Bharati Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra 411043</span></p>

                              <p className=" ">Order Date: <span className="font-medium">12-12-2022</span></p>
                              <button className="inline-block text-lg text-purple-900 hover:underline decoration-1 decoration-blue-800 underline-offset-2">Read More</button>


                         </div>

                         <div className="px-6 py-6 my-6  border mx-8  shadow hover:shadow-xl">
                              <p className="text-xl py-1 font-medium">Order ID: # 404-6088121-1681909</p>
                              <p className="text-lg py-1 font-light">Name: <span className="font-normal">John T</span></p>
                              <p className="text-lg pb-1 font-light">Product: <span className="font-normal">Cashew</span></p>
                              <p className="text-lg pb-1 font-light">Quantity: <span className="font-normal">12 Tons</span></p>
                              <p className="text-lg pb-1 font-light">Address: <span className="font-normal">Survey No. 12, Near, Trimurti Chowk, Bharati Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra 411043</span></p>
                              <p className=" ">Order Date: <span className="font-medium">12-12-2022</span></p>
                              <button className="inline-block text-lg text-purple-900 hover:underline decoration-1 decoration-blue-800 underline-offset-2">Read More</button>

                         </div>




                    </div>
               </div>

               <Footer />
          </div>
     )
}

export default Orders;