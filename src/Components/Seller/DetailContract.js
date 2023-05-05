import React from "react";
import SellerNavbar from "./SellerNavbar";
import Footer from "../Footer";

const DetailContract = () => {
     return (
          <div>
               <SellerNavbar />

               <h1 className="text-center text-3xl mt-12 font-light">Contract Details</h1>
               <div className="md:mx-48 mx-12 my-12 bg-gray-100 p-12 rounded">
                    <p className="text-xl pt-2 pb-6 font-medium">Contract ID: # 404-6088121-1681909</p>
                    <p className="text-lg py-1 font-normal">Contract Date: <span className="font-medium">12/06/2022</span></p>
                    <p className="text-lg py-1 font-normal">Expiry Date: <span className="font-medium">12/06/2023</span></p>

                    <div className="my-16">
                         <p className="text-lg py-1 font-normal">Name: <span className="font-medium">John T</span></p>
                         <p className="text-lg pb-1 font-normal">Product: <span className="font-medium">Cashew</span></p>
                         <p className="text-lg pb-1 font-normal">Quantity: <span className="font-medium">12 Tons</span></p>
                         <p className="text-lg pb-1 font-normal">Price: <span className="font-medium">10,000.00 Rs/Ton</span></p>
                         <p className="text-lg pb-1 font-normal">Address: <span className="font-medium">Survey No. 12, Near, Trimurti Chowk, Bharati Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra 411043</span></p>
                    </div>

                    <div className="flex mt-20 mb-4">
                    <div className="flex-1 text-center ">
                              <button className="text-white bg-green-700 shadow hover:shadow-2xl inline py-2 px-4 rounded text-lg font-medium">Download Contract</button>
                         </div>
                         <div className="flex-1 text-center ">
                              <button className="text-white bg-blue-700 shadow hover:shadow-2xl inline py-2 px-4 rounded text-lg font-medium">Auto Renew</button>
                         </div>
                         <div className="flex-1 text-center ">
                              <button className="text-white bg-yellow-500 shadow hover:shadow-2xl inline py-2 px-4 rounded text-lg font-medium">Set Reminder</button>
                         </div>

                    </div>

               </div>

               <Footer />

          </div>
     )
}

export default DetailContract;