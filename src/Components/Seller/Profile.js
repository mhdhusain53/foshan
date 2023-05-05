import React from "react";
import SellerNavbar from "./SellerNavbar";
import Footer from "../Footer";


const Profile=()=>{
     return(
          <div>
               <SellerNavbar />

               <div className="grid grid-cols-3 mx-24 my-12">
                    <div className="bg-blue-600 text-center mx-8">
                         <img className="mx-auto mt-8 w-36 h-36 rounded-full" src="/images/logo.png" href="icon"></img>
                         <p className="text-2xl text-white pt-6 font-medium">ABC PVT LTD</p>
                    </div>


                    <div className="col-span-2 border">
                         <div className="p-6">
                              <p className="text-xl mb-3">Personal Details</p>
                              <div className="bg-gray-200 w-full p-4">
                                   <p>Name: <span className="text-lg font-normal">John Poter</span></p>
                                   <p>Contact Number: <span className="text-lg font-normal">1234098465</span></p>
                                   <p>Email: <span className="text-lg font-normal">xyz@gmail.com</span></p>

                              </div>
                         </div>
                         <div className="p-6">
                              <p className="text-xl mb-3">Address Details</p>
                              <div className="bg-gray-200 w-full p-4">
                                   <p>Address: <span className="text-lg font-normal">28, xyz, Pune, Maharashtra - 424039</span></p>

                              </div>
                         </div>
                         <div className="p-6">
                              <p className="text-xl mb-3">Company Details</p>
                              <div className="bg-gray-200 w-full p-4">
                              <p>Business Name: <span className="text-lg font-normal">XYZ PVT LTD</span></p>
                              <p>GST Number: <span className="text-lg font-normal">22AAAAA0000A1Z5</span></p>

                              </div>
                         </div>
                    </div>
               </div>

               <Footer />
          </div>
     )
}
export default Profile;