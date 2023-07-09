import React, { useState, useEffect } from "react";
import SellerNavbar from "./SellerNavbar";
import Footer from "../Footer";
import { ref, get, set, getDatabase, child } from "firebase/database";
import { database } from "../../firebase";


const Enquiries = (props) => {
     const [dialog, setDialog] = useState(false);
     const [enquiries, setEnquiries] = useState([]);
     const [accept,setAccept] = useState(0);
     const [heading,setHeading] = useState("");

     useEffect(() => {
          const dbRef = ref(getDatabase());
          get(child(dbRef, `enquiries/`)).then((res) => {
               if (res.exists()) {
                    setEnquiries(res.val())
               }
          }).catch((error) => {
               console.error(error);
          });
          console.log(enquiries);
     }, []);

     const setfinal = () => {
          setDialog(false);
     }

     const onAccept = (index) => {
          var seten = enquiries;
          seten[index].status = "Accepted";
          setEnquiries(seten);

          set(ref(database, 'enquiries/'), enquiries).then((err) => {
               if (err) {
                    console.log(err);
               }
          });
     };


     const onReject = (index) => {
          var seten = enquiries;
          seten[index].status = "Rejected";
          setEnquiries(seten);

          set(ref(database, 'enquiries/'), enquiries).then((err) => {
               if (err) {
                    console.log(err);
               }
          });
     };

     const latest = () => {
          console.log("latest");
          var arr = enquiries;
          var len = arr.length;
          for (var i = 0; i < len; i++) {
               for (var j = 0; j < (len - i - 1); j++) {
                    if (arr[j].time < arr[j + 1].time) {

                         var temp = arr[j]
                         arr[j] = arr[j + 1]
                         arr[j + 1] = temp
                    }
               }
          }
          setEnquiries(arr);
     }

     const oldest = () => {
          let arr = enquiries;
          var len = arr.length;
          for (var i = 0; i < len; i++) {
               for (var j = 0; j < (len - i - 1); j++) {
                    if (arr[j].time > arr[j + 1].time) {
                         var temp = arr[j]
                         arr[j] = arr[j + 1]
                         arr[j + 1] = temp
                    }
               }
          }
          setEnquiries(arr);
     }


     return (
          <div>
               <SellerNavbar />

               <p className="text-4xl my-8 text-center font-light mx-auto">Enquiries</p>

               <div className="grid grid-cols-3 md:mx-32 mx-6 mb-12">
                    <div className="bg-blue-700 text-center px-4 mx-8 text-xl font-medium pt-12">
                         <button onClick={() => {latest();setAccept(0);setHeading("Latest Requests First")}} className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Latest Requests First</button>
                         <button onClick={() => {oldest();setAccept(0);setHeading("Oldest Requests First")}} className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Oldest Requests First</button>
                         <button onClick={() => {setAccept(1);setHeading("Accepted Requests")}} className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Accepted Requests</button>
                         <button onClick={() =>{setAccept(-1);setHeading("Rejected Requests")}} className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Rejected Requests</button>
                    </div>


                    <div className="col-span-2 border relative">
                         <div className="text-center my-6">
                              <p className="text-2xl font-light mx-auto">{heading}</p>
                         </div>

                         {
                              enquiries.map((enquire, key) => {
                                   if ((enquire.sellerId === props.seller.id)) {
                                        if(accept==0 && enquire.status==="pending"){
                                             return (
                                                  <div className="px-6 py-3 my-3 grid  grid-cols-2 md:grid-cols-3 border mx-8  shadow hover:shadow-xl">
                                                       <div className="col-span-2">
                                                            <p className="text-xl font-medium mb-2">{enquire.clientName}</p>
                                                            <p className="text-base font-normal">Product:<span className="ml-2 text-lg">{enquire.productName}</span></p>
                                                            <p className="text-base font-normal">Quantity:<span className="ml-2 text-lg">{enquire.size}</span></p>
                                                            <p className="text-base font-normal">Lot size:<span className="ml-2 text-lg">{enquire.lot}</span></p>
                                                            <p className="text-lg pb-1 font-light">Enquiry Date: <span className="font-normal">{enquire.time.substr(0,10)}</span></p>
                                                            <button className="text-base text-purple-900 hover:underline decoration-1 decoration-blue-800 underline-offset-2">Read More</button>
                                                       </div>
                                                       <div className={`col-span-1 text-center py-3 ${enquire.status === "pending" ? "" : "hidden"}`}>
                                                            <button onClick={() => { setDialog("accepted"); setTimeout(setfinal, 2950); onAccept(key) }} className=" shadow my-2 hover:shadow-xl border border-green-500 text-green-500 hover:bg-green-500 hover:text-white bg-white-500 rounded-xl w-32 py-1 mx-auto block">Accept</button>
                                                            <button onClick={() => { onReject(key); setDialog("rejected"); setTimeout(setfinal, 2950); }} className="text-red-500 shadow my-2 hover:shadow-xl bg-white hover:bg-red-500 hover:text-white border border-red-500 rounded-xl w-32 py-1 mx-auto block">Reject</button>
                                                       </div>
     
                                                  </div>
                                             )
                                        }else if(accept==1 && enquire.status=="Accepted"){
                                             return (
                                                  <div className="px-6 py-3 my-3 grid  grid-cols-2 md:grid-cols-3 border mx-8  shadow hover:shadow-xl">
                                                       <div className="col-span-2">
                                                            <p className="text-xl font-medium mb-2">{enquire.clientName}</p>
                                                            <p className="text-base font-normal">Product:<span className="ml-2 text-lg">{enquire.productName}</span></p>
                                                            <p className="text-base font-normal">Quantity:<span className="ml-2 text-lg">{enquire.size}</span></p>
                                                            <p className="text-base font-normal">Lot size:<span className="ml-2 text-lg">{enquire.lot}</span></p>
                                                            <p className="text-lg pb-1 font-light">Enquiry Date: <span className="font-normal">{enquire.time.substr(0,10)}</span></p>
                                                            <button className="text-base text-purple-900 hover:underline decoration-1 decoration-blue-800 underline-offset-2">Read More</button>
                                                       </div>
                                                  </div>
                                             )
                                        }
                                        else if(accept==-1 && enquire.status=="Rejected"){
                                             return (
                                                  <div className="px-6 py-3 my-3 grid  grid-cols-2 md:grid-cols-3 border mx-8  shadow hover:shadow-xl">
                                                       <div className="col-span-2">
                                                            <p className="text-xl font-medium mb-2">{enquire.clientName}</p>
                                                            <p className="text-base font-normal">Product:<span className="ml-2 text-lg">{enquire.productName}</span></p>
                                                            <p className="text-base font-normal">Quantity:<span className="ml-2 text-lg">{enquire.size}</span></p>
                                                            <p className="text-base font-normal">Lot size:<span className="ml-2 text-lg">{enquire.lot}</span></p>
                                                            <p className="text-lg pb-1 font-light">Enquiry Date: <span className="font-normal">{enquire.time.substr(0,10)}</span></p>
                                                            <button className="text-base text-purple-900 hover:underline decoration-1 decoration-blue-800 underline-offset-2">Read More</button>
                                                       </div>
                                                  </div>
                                             )
                                        }   
                                   }
                              })
                         }

                         <div className={`absolute ${dialog == "accepted" ? "" : "hidden"} bg-gray-100 z-50 w-full h-full top-0 text-center`}>
                              <div className=" mx-auto mt-8">
                                   <img className="md:w-1/3 w-2/5 m-auto my-4" src="/images/check.gif" alt="check sign"></img>
                                   <p className="text-3xl my-12 text-green-600">Request Accepted Successfully</p>
                              </div>
                         </div>

                         <div className={`absolute ${dialog == "rejected" ? "" : "hidden"} bg-gray-100 z-50 w-full h-full top-0 text-center`}>
                              <div className=" mx-auto mt-8">
                                   <img className="md:w-1/3 w-2/5 m-auto my-4" src="/images/cancel.png" alt="check sign"></img>
                                   <p className="text-3xl my-12 text-red-600">Request Rejected Successfully</p>
                              </div>
                         </div>
                    </div>
               </div>

               <Footer />
          </div>
     )
}
export default Enquiries;