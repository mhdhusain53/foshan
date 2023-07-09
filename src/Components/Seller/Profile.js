import React from "react";
import SellerNavbar from "./SellerNavbar";
import Footer from "../Footer";


const Profile=({seller})=>{
     return(
          <div>
               <SellerNavbar />

               <div className="grid grid-cols-3 mx-24 my-12">
                    <div className="bg-blue-600 text-center mx-8">
                         <img className="mx-auto mt-8 w-36 h-36 rounded-full" src="/images/logo.png" href="icon"></img>
                         <p className="text-2xl text-white pt-6 font-medium">{seller.businessName}</p>
                    </div>


                    <div className="col-span-2 border">
                         <div className="p-6">
                              <p className="text-xl mb-3">Personal Details</p>
                              <div className="bg-gray-200 w-full p-4">
                                   <p>Name: <span className="text-lg pl-1 font-normal">{seller.name}</span></p>
                                   <p>Contact Number: <span className="text-lg pl-1 font-normal">{seller.contactNo}</span></p>
                                   <p>Email: <span className="text-lg font-normal pl-1">{seller.email}</span></p>
                              </div>
                         </div>
                         <div className="p-6">
                              <p className="text-xl mb-3">Address Details</p>
                              <div className="bg-gray-200 w-full p-4">
                                   <p>Address: <span className="text-lg font-normal pl-1">{seller.address}</span></p>
                                   <p>City: <span className="text-lg font-normal pl-1">{seller.city}, {seller.state}</span></p>
                              </div>
                         </div>
                         <div className="p-6">
                              <p className="text-xl mb-3">Company Details</p>
                              <div className="bg-gray-200 w-full p-4">
                              <p>Business Name: <span className="text-lg font-normal pl-1">{seller.businessName}</span></p>
                              <p>GST Number: <span className="text-lg font-normal pl-1">{seller.gstNo}</span></p>
                              </div>
                         </div>
                    </div>
               </div>

               <Footer />
          </div>
     )
}
export default Profile;