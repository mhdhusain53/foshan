import React, { useEffect,useState } from "react";
import SellerNavbar from "./SellerNavbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { ref, set, get, getDatabase, child } from "firebase/database";
import { database } from "../../firebase";


const Contract = (props) => {
     const [dialog, setDialog] = useState(false);
     const [quiry, setQuiry] = useState([]);
     const [accept, setAccept] = useState(0);



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

     return (
          <div>
               <SellerNavbar />

               <div className="my-6 border mx-auto  px-8 py-1 rounded-full border-gray-600 text-center md:w-1/4 w-1/3 ">
                    <input type="text" className="outline-gray-50 appearance-none text-lg text-gray-600 focus:border-0 inline-block w-2/3 border-b-1 py-1 px-3" placeholder="Search Contract">

                    </input>
                    <svg className="w-7 h-7 text-gray-500 mr-2 inline-block " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>


               </div>
               <div className="grid grid-cols-3 md:mx-32 mx-6 my-12">
                    <div className="bg-blue-700 text-center px-4 mx-8 text-xl font-medium py-12">
                         <button onClick={() => { setAccept(0) }} className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">All Contracts</button>
                         <button onClick={() => { setAccept(1) }} className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Accepted Contracts</button>
                         <button onClick={() => { setAccept(-1) }} className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Rejected Contracts</button>
                    </div>


                    <div className="col-span-2 border relative">
                         <div className="px-8 my-6 flex">
                              <p className="text-3xl flex-1 font-light mx-auto">Contract Management</p>

                              <Link to="../seller/detail" >
                                   <button className="bg-yellow-500 hover:bg-yellow-600 flex-2 text-white px-2 py-1 shadow hover:shadow-2xl rounded">
                                        + Create New Contract
                                   </button>
                              </Link>


                         </div>

                         {
                                   quiry.map((e, key) => {
                                        console.log(e);
                                        if (e.sellerId === props.seller.id) {

                                             if (accept == 0 ) {
                                                  return (
                                                       <div id={key} className="px-6 py-3 my-3 border mx-8  shadow hover:shadow-xl">
                                                            <div className="">
                                                                 <p className="text-lg py-1 font-light">Contract Id: <span className="font-normal">{e.contractId}</span></p>
                                                                 <p className="text-lg py-1 font-light">Company Name: <span className="font-normal">{e.sellerName}</span></p>
                                                                 <p className="text-lg pb-1 font-light">Product: <span className="font-normal">{e.productName}</span></p>
                                                                 <p className="text-lg pb-1 font-light">Quantity: <span className="font-normal">{e.size} KG</span></p>
                                                                 <p className="text-lg pb-1 font-light">Lots: <span className="font-normal">{e.lot}</span></p>
                                                                 <p className="text-lg pb-1 font-light">Address: <span className="font-normal">{e.sellerAddress}</span></p>
                                                                 <p className="text-lg pb-1 font-light">Status: <span className={`${e.status=="Accepted"?"text-green-500":e.status=="pending"?"text-yellow-400":"text-red-500"} font-normal`}>{e.status}</span></p>

                                                                 {/* <div className="text-center">
                                                                      <button onClick={() => setContract({ value: e, index: key })} className="mx-auto text-center text-base text-green-600 border border-white hover:shadow-xl hover:border-green-600 mb-3 py-2 px-3 rounded-xl">View Contract</button>
                                                                 </div> */}
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

               <Footer />
          </div>
     )
}

export default Contract;