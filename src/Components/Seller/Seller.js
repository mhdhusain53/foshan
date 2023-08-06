import React from "react";
import Footer from "../Footer";
import SellerHomeNavbar from "./SellerHomeNavbar";
import { Link } from "react-router-dom";

const Seller = () => {
     return (
          <diiv>
               <SellerHomeNavbar />
               <div className=" bg-gray-100">

                    <div className="text-center py-12">
                         <h1 className="text-4xl font-medium my-6">Become an Foshan seller</h1>
                         <div>
                              <Link to="/seller/login" className="hover:shadow-2xl hover:bg-yellow-600 text-center inline-block text-xl py-2 pl-3 pr-4 text-white bg-yellow-500 rounded   " aria-current="page">Start Selling</Link>
                         </div>
                    </div>

                    <div className="mx-12">
                         <h1 className="text-3xl font-normal my-6">Why sellers choose Foshan?</h1>

                         <div className="grid grid-cols-4 gap-12 pb-8 ">
                              <div className=" text-center p-1">
                                   <p className="text-xl font-semibold py-2">Secure timely payments</p>
                                   <p className="text-sm pb-2">Funds are deposited directly to your bank account every 7 days, including for Pay on Delivery order.</p>
                              </div>

                              <div className=" text-center p-1">
                                   <p className="text-xl font-semibold py-2">Ease of starting
</p>
                                   <p className="text-sm pb-2">From product photography to hassle free delivery & returns management, Amazon has a solution for you.</p>
                              </div>
                              <div className=" text-center p-1">
                                   <p className="text-xl font-semibold py-2">Sell to customers worldwide</p>
                                   <p className="text-sm pb-2">Sign up for Amazon Global Selling & reach customers in upto 200+ countries.</p>
                              </div>
                              <div className=" text-center p-1">
                                   <p className="text-xl font-semibold py-2">Manage business on the go</p>
                                   <p className="text-sm pb-2">With the Amazon Seller App you can manage your business, solve issues, and respond to customers – anywhere, anytime.</p>
                              </div>

                         </div>


                    </div>


               </div>
               <Footer />
          </diiv>
     )
}
export default Seller;