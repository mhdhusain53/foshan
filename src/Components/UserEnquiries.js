import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ref, get, getDatabase, child } from "firebase/database";



const UserEnquiries = (props) => {
     const [dialog, setDialog] = useState(false);
     const [enquiries, setEnquiries] = useState([]);
     const [accept, setAccept] = useState(0);
     const [heading, setHeading] = useState("");


     const setfinal = () => {
          setDialog(false);

     }
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
               <Navbar user={props.user} />

               <p className="text-4xl my-8 text-center font-light mx-auto">Enquiries</p>

               <div className="grid grid-cols-3 md:mx-32 mx-6 mb-12">
                    <div className="bg-blue-700 text-center px-4 mx-8 text-xl font-medium pt-12">
                         <button onClick={() => { latest(); setAccept(0); setHeading("Latest Requests First") }} className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Latest Requests First</button>
                         <button onClick={() => { oldest(); setAccept(0); setHeading("Oldest Requests First") }} className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Oldest Requests First</button>
                         <button onClick={() => { setAccept(1); setHeading("Accepted Requests") }} className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Accepted Requests</button>
                         <button onClick={() => { setAccept(-1); setHeading("Rejected Requests") }} className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Rejected Requests</button>

                    </div>


                    <div className="col-span-2 border relative">
                         <div className="text-center my-6">
                              <p className="text-2xl font-light mx-auto">{heading}</p>
                         </div>

                         {
                              enquiries.map((enquiree) => {
                                   var status = enquiree.status == 'pending' ? "text-yellow-400" : enquiree.status == 'Accepted' ? "text-green-500" : "text-red-500";
                                   if (enquiree.clientEmail === props.user.email) {
                                        if (accept == 0 && enquiree.status === "pending") {
                                             return (
                                                  <div className="px-6 py-3 my-3   border mx-8  shadow hover:shadow-xl">
                                                       <div className="">
                                                            <p className="text-lg py-1 font-light">Company Name: <span className="font-normal">{enquiree.sellerName}</span></p>
                                                            <p className="text-lg pb-1 font-light">Product: <span className="font-normal">{enquiree.productName}</span></p>
                                                            <p className="text-lg pb-1 font-light">Quantity: <span className="font-normal">{enquiree.size} KG</span></p>
                                                            <p className="text-lg pb-1 font-light">Lots: <span className="font-normal">{enquiree.lot}</span></p>
                                                            {/* <p className="text-lg pb-1 font-light">Category: <span className="font-normal">{enquiree.category}</span></p>
                                                            <p className="text-lg pb-1 font-light">Grade: <span className="font-normal">{enquiree.grade}</span></p>
                                                            <p className="text-lg pb-1 font-light">Usage: <span className="font-normal">{enquiree.usage}</span></p> */}
                                                            <p className="text-lg pb-1 font-light">Enquiry Date: <span className="font-normal">{enquiree.time.substr(0,10)}</span></p>
                                                            <p className="text-lg pb-1 font-light">Status: <span className={`${status} font-normal`}>{enquiree.status}</span></p>

                                                            <button className="text-base text-purple-900 hover:underline decoration-1 decoration-blue-800 underline-offset-2">Read More</button>
                                                       </div>
                                                  </div>
                                             )
                                        }
                                             else if (accept == 1 && enquiree.status == "Accepted") {
                                             return (
                                                  <div className="px-6 py-3 my-3   border mx-8  shadow hover:shadow-xl">
                                                       <div className="">
                                                            <p className="text-lg py-1 font-light">Company Name: <span className="font-normal">{enquiree.sellerName}</span></p>
                                                            <p className="text-lg pb-1 font-light">Product: <span className="font-normal">{enquiree.productName}</span></p>
                                                            <p className="text-lg pb-1 font-light">Quantity: <span className="font-normal">{enquiree.size} KG</span></p>
                                                            <p className="text-lg pb-1 font-light">Lots: <span className="font-normal">{enquiree.lot}</span></p>
                                                            {/* <p className="text-lg pb-1 font-light">Category: <span className="font-normal">{enquiree.category}</span></p>
                                                                 <p className="text-lg pb-1 font-light">Grade: <span className="font-normal">{enquiree.grade}</span></p>
                                                                 <p className="text-lg pb-1 font-light">Usage: <span className="font-normal">{enquiree.usage}</span></p> */}
                                                            <p className="text-lg pb-1 font-light">Enquiry Date: <span className="font-normal">{enquiree.time.substr(0,10,-1)}</span></p>
                                                            <p className="text-lg pb-1 font-light">Status: <span className={`${status} font-normal`}>{enquiree.status}</span></p>

                                                            <button className="text-base text-purple-900 hover:underline decoration-1 decoration-blue-800 underline-offset-2">Read More</button>
                                                       </div>
                                                  </div>
                                             )
                                        }
                                        else if (accept == -1 && enquiree.status == "Rejected") {
                                             return (
                                                  <div className="px-6 py-3 my-3   border mx-8  shadow hover:shadow-xl">
                                                       <div className="">
                                                            <p className="text-lg py-1 font-light">Company Name: <span className="font-normal">{enquiree.sellerName}</span></p>
                                                            <p className="text-lg pb-1 font-light">Product: <span className="font-normal">{enquiree.productName}</span></p>
                                                            <p className="text-lg pb-1 font-light">Quantity: <span className="font-normal">{enquiree.size} KG</span></p>
                                                            <p className="text-lg pb-1 font-light">Lots: <span className="font-normal">{enquiree.lot}</span></p>
                                                            {/* <p className="text-lg pb-1 font-light">Category: <span className="font-normal">{enquiree.category}</span></p>
                                                                 <p className="text-lg pb-1 font-light">Grade: <span className="font-normal">{enquiree.grade}</span></p>
                                                                 <p className="text-lg pb-1 font-light">Usage: <span className="font-normal">{enquiree.usage}</span></p> */}
                                                            <p className="text-lg pb-1 font-light">Enquiry Date: <span className="font-normal">{enquiree.time.substr(0,10,-1)}</span></p>
                                                            <p className="text-lg pb-1 font-light">Status: <span className={`${status} font-normal`}>{enquiree.status}</span></p>

                                                            <button className="text-base text-purple-900 hover:underline decoration-1 decoration-blue-800 underline-offset-2">Read More</button>
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
export default UserEnquiries;