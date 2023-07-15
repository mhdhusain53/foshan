import React, { useState, useEffect } from "react";
import SellerNavbar from "./SellerNavbar";
import Footer from "../Footer";
import { ref, set, get, getDatabase, child } from "firebase/database";

const Orders = (props) => {
     if(!props.seller){
          window.location.pathname="seller/login";
     }

     const [contract, setContract] = useState([]);

     useEffect(() => {
          const dbRef = ref(getDatabase());
          get(child(dbRef, `contracts/`)).then((res) => {
               if (res.exists()) {
                    setContract(res.val());
                    console.log(contract);
               }
          }).catch((error) => {
               console.error(error);
          });

     }, []);

     return (
          <div>
               <SellerNavbar />
               <div className="mx-auto w-1/2 my-12">
                    {/* <div className="bg-blue-700 text-center px-4 mx-8 text-xl font-medium py-12">
                         <button className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">All Orders</button>
                         <button className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Last month</button>
                         <button className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Last 3 months</button>
                         <button className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">last 6 months</button>
                    </div> */}


                    <div className="col-span-2 border">
                         <div className="px-6 my-6 flex">
                              <p className="text-3xl flex-1 font-light mx-auto">Previous Orders</p>
                         </div>

                         {
                              contract.map((e, index) => {
                                   console.log(e);

                                   if (e.status === "Accepted" && e.sellerId == props.seller.id) {
                                        return (
                                             <div id={index} className="px-6 py-6 my-6  border mx-8 relative shadow hover:shadow-xl">
                                                  <div className="flex ">
                                                       <p className="flex-1 text-xl py-1 font-medium">Contract ID: {e.contractId}</p>
                                                  </div>
                                                  <p className="text-lg py-1 font-light">Company name: <span className="font-normal">{e.businessName}</span></p>
                                                  <p className="text-lg pb-1 font-light">Product: <span className="font-normal">{e.productName}</span></p>
                                                  <p className="text-lg pb-1 font-light">Quantity: <span className="font-normal">{e.size} KG</span></p>
                                                  <p className="text-lg pb-1 font-light">Address: <span className="font-normal">{e.sellerAddress}. {e.sellerCity} {e.sellerState}</span></p>
                                                  <p className="text-lg pb-1 font-light ">Order Date: <span className="font-medium">{e.contractDate}</span></p>

                                             </div>
                                        )
                                   }
                              })
                         }

                    </div>
               </div>

               <Footer />
          </div>
     )
}

export default Orders;