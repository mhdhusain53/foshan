import React, { useEffect, useState } from "react";
import SellerNavbar from "./SellerNavbar";
import Footer from "../Footer";
import { ref, get, set, getDatabase, child } from "firebase/database";
import { database } from "../../firebase";
import { Link } from "react-router-dom";
import { v4 as uuid } from 'uuid';



const DetailContract = (props) => {
     const [quiry, setQuiry] = useState([]);
     const [contract, setContract] = useState({ value: 0, set: false });
     const [dialog, setDialog] = useState(false);

     var today = new Date();
     var dd = String(today.getDate()).padStart(2, '0');
     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
     var yyyy = String(today.getFullYear());

     var newDate = new Date(today.setMonth(today.getMonth() + 3));
     var dd2 = String(newDate.getDate()).padStart(2, '0');
     var mm2 = String(newDate.getMonth() + 1).padStart(2, '0'); //January is 0!
     var yyyy2 = String(newDate.getFullYear());

     var newDate = dd2 + "/" + mm2 + "/" + yyyy2;
     var today = dd + '/' + mm + '/' + yyyy;

     useEffect(() => {
          const dbRef = ref(getDatabase());
          get(child(dbRef, `enquiries/`)).then((res) => {
               if (res.exists()) {
                    var value = res.val();
                    var setval = [];
                    for (var i = 0; i < value.length; i++) {
                         if (value[i].status === "Accepted") {
                              setval.push(value[i]);
                         }
                    }

                    setQuiry(setval);
               }
          }).catch((error) => {
               console.error(error);
          });

     }, []);


     const unique_id = uuid();
     const _id = unique_id.slice(0, 8)

     const create = () => {

          var contractData = {
               contractId: _id,
               clientName: contract.value.clientName,
               clientEmail: contract.value.clientEmail,
               sellerName: contract.value.sellerName,
               sellerEmail: contract.value.sellerEmail,
               sellerAddress: props.seller.address,
               sellerCity: props.seller.city,
               sellerState: props.seller.state,
               sellerId: props.seller.id,
               productName: contract.value.productName,
               size: contract.value.size,
               lot: contract.value.lot,
               category: contract.value.category,
               grade: contract.value.grade,
               usage: contract.value.usage,
               contractDate: today,
               expiryDate: newDate,
               totalPrice: contract.value.price * contract.value.size,
               status: "pending"

          }
          const dbRef = ref(getDatabase());
          get(child(dbRef, `contracts/`)).then((res) => {
               if (res.exists()) {
                    var contracts = res.val();

                    contracts.push(contractData);
                    set(ref(database, 'contracts/'), contracts).then((err) => {
                         if (err) {
                              console.log(err);
                         }
                    });
                    console.log("Contract Created");

               } else {
                    var contracts = [contractData]
                    set(ref(database, 'contracts/'), contracts).then((err) => {
                         if (err) {
                              console.log(err);
                         }
                    });
                    console.log("First Contract Created");
               }
          }).catch((error) => {
               console.error(error);
          });

          setDialog(true);
          setTimeout(() => {
               setContract({ value: 0, set: false })
               setDialog(false);
          }, 2950);
     }
     return (
          <div>
               <SellerNavbar />

               <h1 className="text-center text-4xl mt-6 mb-4 font-light">Contract Details</h1>

               <div className="mx-48 mt-10 mb-6">
                    <div className='py-3 grid grid-cols-3'>
                         <label for="contract" className=" mb-2 mr-3 text-lg font-normal text-gray-900">Select query for contract :</label>
                         <div className='col-span-2 text-center mx-auto w-full'>
                              <div className='text-center '>
                                   <button onClick={() => setContract({ value: contract.value, set: !contract.set })} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="w-full block bg-gray-50 border border-gray-300 text-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mx-auto px-5 py-2.5 text-center inline-block items-center  " type="button">{contract.value.clientName} - {contract.value.productName} - {contract.value.size} kg<svg class="w-2.5 h-2.5 ml-2.5 inline-block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                   </svg></button>
                              </div>
                              <div id="dropdown" class={`z-10 ${contract.set ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow`}>
                                   <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
                                        {quiry.map((e, key) => {
                                             console.log(e);
                                             if (e.sellerId == props.seller.id) {
                                                  return (
                                                       <li>
                                                            <p onClick={() => { setContract({ value: e, set: false }); }} class="block px-4 py-2 hover:bg-gray-100 ">{e.clientName} - {e.productName} - {e.size} kg</p>
                                                       </li>
                                                  )
                                             }

                                        })}

                                   </ul>
                              </div>
                         </div>
                    </div>

               </div>
               <div className={`relative ${contract.value == 0 ? "hidden" : ""} md:mx-48 mx-12 mb-12 bg-gray-100 p-12 rounded`}>
                    <p className="text-xl pt-2 pb-6 font-medium">Contract ID: {_id}</p>
                    <p className="text-lg py-1 font-normal">Contract Date: <span className="font-medium">{today}</span></p>
                    <p className="text-lg py-1 font-normal">Expiry Date: <span className="font-medium">{newDate}</span></p>

                    <div className="my-8 grid grid-cols-2">
                         <div>
                              <p className="text-2xl py-2 font-medium">Seller</p>
                              <p className="text-lg py-1 font-normal">Name: <span className="font-medium">{contract.value.sellerName}</span></p>
                              <p className="text-lg py-1 font-normal">Email: <span className="font-medium">{contract.value.sellerEmail}</span></p>
                              <p className="text-lg py-1 font-normal">Address: <span className="font-medium">{props.seller.address}</span></p>
                              <p className="text-lg py-1 font-normal">City: <span className="font-medium">{props.seller.city}, {props.seller.state}</span></p>
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
                         <p className="text-2xl py-2 pt-4 font-medium">Total Price: <span className="font-medium">₹ {contract.value.price * contract.value.size}</span></p>
                    </div>


                    <div className="flex mt-20 mb-4">
                         <div className="flex-1 text-center ">
                              <button onClick={() => create()} className="text-white bg-green-600 shadow hover:shadow-2xl inline py-2 px-4 rounded text-lg font-medium">Create Contract</button>
                         </div>
                         <div className="flex-1 text-center ">
                              <Link to="../seller/contract">
                                   <button className="text-white bg-red-600 shadow hover:shadow-2xl inline py-2 px-4 rounded text-lg font-medium">Cancel</button>

                              </Link>
                         </div>

                    </div>

                    <div className={`absolute ${dialog == true ? "" : "hidden"} bg-gray-100 z-50 w-full h-full top-0 text-center`}>
                         <div className="   mx-auto mt-8">
                              <img className="w-2/5 m-auto my-4" src="/images/check.gif" alt="check sign"></img>
                              <p className="text-3xl my-12 text-green-600">Contract Request Submitted Successfully</p>
                         </div>

                    </div>

               </div>

               <Footer />

          </div>
     )
}

export default DetailContract;