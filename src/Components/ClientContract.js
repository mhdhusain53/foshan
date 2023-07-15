import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ref, set, get, getDatabase, child } from "firebase/database";
import { database } from "../firebase";


const ClientContract = (props) => {
     if(!props.user){
          window.location.pathname="/login";
     }
     const [contract, setContract] = useState({ value: 0, index: 0 });
     const [quiry, setQuiry] = useState([]);
     const [heading, setHeading] = useState("");
     const [accept, setAccept] = useState(0);
     const [dialog, setDialog] = useState(false);




     useEffect(() => {
          const dbRef = ref(getDatabase());
          get(child(dbRef, `contracts/`)).then((res) => {
               if (res.exists()) {
                    setQuiry(res.val());
                    console.log(quiry);
               }
          }).catch((error) => {
               console.error(error);
          });

     }, []);

     const onAccept = () => {
          var val = contract.value;
          val.status = "Accepted";

          var value = quiry;
          value[contract.index] = val;
          setQuiry(value);
          set(ref(database, 'contracts/'), quiry).then((err) => {
               if (err) {
                    console.log(err);
               }
          });
          setDialog("accepted");
          setTimeout(() => {
               setDialog(false); setContract({ value: 0, index: 0 });
          }, 2950);

     };

     const onReject = () => {
          var val = contract.value;
          val.status = "Rejected";

          var value = quiry;
          value[contract.index] = val;
          setQuiry(value);
          set(ref(database, 'contracts/'), quiry).then((err) => {
               if (err) {
                    console.log(err);
               }
          });
          setDialog("rejected");
          setTimeout(() => {
               setDialog(false); setContract({ value: 0, index: 0 });
          }, 2950);

     };

     return (
          <div className="bg-gray-50">
               <Navbar user={props.user} />


               <div className={`${contract.value == 0 ? "" : "hidden"} grid grid-cols-3 md:mx-32 mx-6 mb-12`}>
                    <div className="bg-blue-700 text-center px-4 mx-8 text-xl font-medium pt-12">
                         <button onClick={() => { setAccept(0); setHeading("Latest Requests First") }} className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">All Contracts</button>
                         <button onClick={() => { setAccept(1); setHeading("Accepted Requests") }} className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Accepted Contracts</button>
                         <button onClick={() => { setAccept(-1); setHeading("Rejected Requests") }} className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Rejected Contracts</button>

                    </div>

                    <div className={`border col-span-2  my-14 bg-white`}>
                         <p className="text-3xl text-center font-light my-8">Contract Management</p>
                         <div className={`${contract.value == 0 ? "" : "hidden"}`}>
                              {
                                   quiry.map((e, key) => {
                                        console.log(e);
                                        if (e.clientEmail === props.user.email) {

                                             if (accept == 0 && e.status === "pending") {
                                                  return (
                                                       <div id={key} className="px-6 py-3 my-3 border mx-8  shadow hover:shadow-xl">
                                                            <div className="">
                                                                 <p className="text-lg py-1 font-light">Contract Id: <span className="font-normal">{e.contractId}</span></p>
                                                                 <p className="text-lg py-1 font-light">Company Name: <span className="font-normal">{e.sellerName}</span></p>
                                                                 <p className="text-lg pb-1 font-light">Product: <span className="font-normal">{e.productName}</span></p>
                                                                 <p className="text-lg pb-1 font-light">Quantity: <span className="font-normal">{e.size} KG</span></p>
                                                                 <p className="text-lg pb-1 font-light">Lots: <span className="font-normal">{e.lot}</span></p>
                                                                 <p className="text-lg pb-1 font-light">Address: <span className="font-normal">{e.sellerAddress}</span></p>
                                                                 <div className="text-center">
                                                                      <button onClick={() => setContract({ value: e, index: key })} className="mx-auto text-center text-base text-green-600 border border-white hover:shadow-xl hover:border-green-600 mb-3 py-2 px-3 rounded-xl">View Contract</button>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  )
                                             } else if ((accept === 1 && e.status == "Accepted") || (accept === -1 && e.status == "Rejected")) {

                                                  return (
                                                       <div id={key} className="px-6 py-3 my-3 border mx-8  shadow hover:shadow-xl">
                                                            <div className="">
                                                                 <p className="text-lg py-1 font-light">Contract Id: <span className="font-normal">{e.contractId}</span></p>
                                                                 <p className="text-lg py-1 font-light">Company Name: <span className="font-normal">{e.sellerName}</span></p>
                                                                 <p className="text-lg pb-1 font-light">Product: <span className="font-normal">{e.productName}</span></p>
                                                                 <p className="text-lg pb-1 font-light">Quantity: <span className="font-normal">{e.size} KG</span></p>
                                                                 <p className="text-lg pb-1 font-light">Lots: <span className="font-normal">{e.lot}</span></p>
                                                                 <p className="text-lg pb-1 font-light">Address: <span className="font-normal">{e.sellerAddress}</span></p>
                                                                 <p className="text-lg pb-1 font-light">Status: <span className={`${e.status=="Accepted"?"text-green-500":"text-red-500"} font-normal`}>{e.status}</span></p>

                                                                 {/* <div className="text-center">
                                                                      <button onClick={() => setContract({ value: e, index: key })} className="mx-auto text-center text-base text-green-600 border border-white hover:shadow-xl hover:border-green-600 mb-3 py-2 px-3 rounded-xl">View Contract</button>
                                                                 </div> */}
                                                            </div>
                                                       </div>
                                                  )
                                             }

                                        }


                                   })
                              }
                         </div>
                    </div>
               </div>



               <div className={`relative ${contract.value == 0 ? "hidden" : ""} mx-8 mb-12 bg-gray-100 p-12 rounded`}>
                    <p className="text-xl pt-2 pb-6 font-medium">Contract ID: {contract.value.contractId}</p>
                    <p className="text-lg py-1 font-normal">Contract Date: <span className="font-medium">{contract.value.contractDate}</span></p>
                    <p className="text-lg py-1 font-normal">Expiry Date: <span className="font-medium">{contract.value.expiryDate}</span></p>

                    <div className="my-8 grid grid-cols-2">
                         <div>
                              <p className="text-2xl py-2 font-medium">Seller</p>
                              <p className="text-lg py-1 font-normal">Name: <span className="font-medium">{contract.value.sellerName}</span></p>
                              <p className="text-lg py-1 font-normal">Email: <span className="font-medium">{contract.value.sellerEmail}</span></p>
                              <p className="text-lg py-1 font-normal">Address: <span className="font-medium">{contract.value.sellerAddress}</span></p>
                              <p className="text-lg py-1 font-normal">City: <span className="font-medium">{contract.value.sellerCity}, {contract.value.sellerState}</span></p>
                         </div>
                         <div>
                              <p className="text-2xl py-2 font-medium">Buyer</p>
                              <p className="text-lg py-1 font-normal">Name: <span className="font-medium">{contract.value.clientName}</span></p>
                              <p className="text-lg py-1 font-normal">Email: <span className="font-medium">{contract.value.clientEmail}</span></p>
                         </div>
                    </div>
                    <div className="mx-auto  inline-block">
                         <p className="text-2xl   py-2 pt-4 font-medium">Product</p>
                         <p className="text-lg pb-1 font-normal">Product: <span className="font-medium">{contract.value.productName}</span></p>
                         <p className="text-lg pb-1 font-normal">Quantity: <span className="font-medium">{contract.value.size} Kg</span></p>
                         <p className="text-lg pb-1 font-normal">Lots: <span className="font-medium">{contract.value.lot}</span></p>
                         <p className="text-lg pb-1 font-normal">Category: <span className="font-medium">{contract.value.category}</span></p>
                         <p className="text-lg pb-1 font-normal">Grade: <span className="font-medium">{contract.value.grade}</span></p>
                         <p className="text-lg pb-1 font-normal">Usage: <span className="font-medium">{contract.value.usage}</span></p>
                         <p className="text-2xl py-2 pt-4 font-medium">Total Price: <span className="font-medium"> ₹ {contract.value.totalPrice}</span></p>
                    </div>



                    <div className="flex mt-20 mb-4">
                         <div className="flex-1 text-center ">
                              <button onClick={() => onAccept()} className="text-white bg-green-600 shadow hover:shadow-2xl inline py-2 px-4 rounded text-lg font-medium">Accept Contract</button>
                         </div>

                         <div className="flex-1 text-center ">
                              <button onClick={() => setContract({ value: 0, index: 0 })} className="text-white bg-yellow-500 shadow hover:shadow-2xl inline py-2 px-4 rounded text-lg font-medium">Cancel</button>

                         </div>
                         <div className="flex-1 text-center ">
                              <button onClick={() => onReject()} className="text-white bg-red-600 shadow hover:shadow-2xl inline py-2 px-4 rounded text-lg font-medium">Reject Contract</button>
                         </div>
                    </div>
                    <div className={`absolute ${dialog == "accepted" ? "" : "hidden"} bg-gray-100 z-50 w-full h-full top-0 text-center`}>
                         <div className=" mx-auto mt-8">
                              <img className="md:w-1/3 w-2/5 m-auto my-4" src="/images/check.gif" alt="check sign"></img>
                              <p className="text-3xl my-12 text-green-600">Contract Accepted Successfully</p>
                         </div>
                    </div>

                    <div className={`absolute ${dialog == "rejected" ? "" : "hidden"} bg-gray-100 z-50 w-full h-full top-0 text-center`}>
                         <div className=" mx-auto mt-8">
                              <img className="md:w-1/3 w-2/5 m-auto my-4" src="/images/cancel.png" alt="check sign"></img>
                              <p className="text-3xl my-12 text-red-600">Contract Rejected Successfully</p>
                         </div>
                    </div>

               </div>
               <Footer />
          </div>
     )
}

export default ClientContract;