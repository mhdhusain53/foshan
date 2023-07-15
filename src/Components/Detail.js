import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import emailkey from "../emailkey";
import emailjs from '@emailjs/browser';
import { ref, set, get, getDatabase, child } from "firebase/database";
import { database } from "../firebase";

const Detail = (props) => {
     if(!props.user){
          window.location.pathname="/login";
     }
     const [dialog, setDialog] = useState(false);
     const [requirement, setRequirement] = useState({ size: "", lot: "" });

     const setfinal = () => {
          window.location = "/marketplace";
     }

     const submit = (e) => {
          e.preventDefault();
          console.log(props);
          var today = new Date();
          var dd = String(today.getDate()).padStart(2, '0');
          var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
          var yyyy = String(today.getFullYear());
          var time = String(today.getTime())

          var today = yyyy + '/' + mm + '/' + dd+"/"+time;

          var enquiryData = {
               clientName: props.user.name,
               
               sellerName: props.detail.sellerName,
               clientEmail: props.user.email,
               productName: props.detail.name,
               price: props.detail.price,
               size: requirement.size,
               lot: requirement.lot,
               category: props.detail.category,
               grade: props.detail.grade,
               usage: props.detail.usage,
               sellerId: props.detail.sellerId,
               sellerEmail: props.detail.email,
               status: "pending",
               time: today
          }
          console.log("data+++", enquiryData);

          const dbRef = ref(getDatabase());
          get(child(dbRef, `enquiries/`)).then((res) => {
               if (res.exists()) {

                    var enquiries = res.val();

                    enquiries.push(enquiryData);
                    set(ref(database, 'enquiries/'), enquiries).then((err) => {
                         if (err) {
                              console.log(err);
                         }
                    });
                    console.log("Enquiry Created");

               } else {
                    var enquiries = [enquiryData]
                    set(ref(database, 'enquiries/'), enquiries).then((err) => {
                         if (err) {
                              console.log(err);
                         }
                    });
                    console.log("First Enquiry Created");
               }

          }).catch((error) => {
               console.error(error);
          });

          var templateParams = {
               email_to: props.detail.email,
               client_name: props.user.name,
               client_to: props.user.email,
               ore_name: props.detail.name,
               size: requirement.size,
               lot: requirement.lot
          };
          console.log(templateParams);


          emailjs.send(emailkey.SERVICE_ID, emailkey.TEMPLATE_requriement_ID, templateParams, emailkey.PUBLIC_KEY)
               .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
               }, (err) => {
                    console.log('FAILED...', err);
               });


          setDialog(true);
          setTimeout(setfinal, 2950);

     }

     return (
          <div>
               <Navbar user={props.user} />
               <div className="p-2 md:px-28 md:p-10">
                    <h1 className="text-3xl text-center  font-medium mb-8">{props.detail.name}</h1>
                    <div className="grid md:grid-cols-2 text-center md:text-left">
                         <div className="align-items-center relative">
                              <img src="images/iron1.png" className=" md:w-5/6 w-full rounded"></img>
                              <div className="absolute text:lg md:text-2xl top-0 bg-gray-200  rounded-full px-2 py-1 ml-2 mt-2">
                                   <span className="ml-2">{props.detail.rating} ⭐</span>
                              </div>
                              <h1 className="text-2xl mt-4">{props.detail.sellerName}</h1>
                              <p className="text-xl mb-8 font-light">{props.detail.address}</p>


                         </div>
                         <div className="text-xl font-light relative">
                              <div className="my-1">
                                   <span >Category:</span>
                                   <span className="font-normal pl-4">{props.detail.category}</span>
                              </div>
                              <div className="my-1">
                                   <span >Usage:</span>
                                   <span className="font-normal pl-4">{props.detail.usage}</span>
                              </div>
                              <div className="my-1">
                                   <span >Grade:</span>
                                   <span className="font-normal pl-4">{props.detail.grade}</span>
                              </div>
                              <div className="my-1">
                                   <span>Price:</span>
                                   <span className="font-normal pl-4">Rs {props.detail.price}/Kg</span>
                              </div>
                              <div>
                                   <a href="./chats">
                                        <button className="text-green-700 mt-2 font-normal hover:text-white hover:bg-green-700 border border-green-700 py-1 px-2 text-xl rounded-lg">
                                             Chat with Seller
                                        </button>
                                   </a>
                              </div>
                              <hr className="my-6 border border-gray-300"></hr>
                              <div className="grid grid-cols-2 ">
                                   <div>
                                        <h1 className="font-normal text-xl">Enter required Quantity:</h1>
                                        <input type="number" onChange={(e) => { setRequirement({ size: e.target.value, lot: requirement.lot }) }} className="border border-gray-400 w-24 rounded px-1 text-lg mt-1"></input><span className="ml-1">KG</span>
                                   </div>
                                   <div className="">
                                        <h1 className="font-normal text-xl">Enter Lot Size:</h1>
                                        <input type="number" onChange={(e) => { setRequirement({ lot: e.target.value, size: requirement.size }) }} className="border  border-gray-400 w-24 rounded px-1 text-lg mt-1"></input>
                                   </div>
                              </div>
                              <div className="  mt-4" >
                                   <a className="m-auto">
                                        <button onClick={(e) => submit(e)} className=" m-auto text-green-700 hover:text-white font-normal hover:bg-green-700 border border-green-700 py-1 px-2 text-xl rounded-lg">
                                             Submit requirement
                                        </button>
                                   </a>

                              </div>

                              <div className={`absolute ${dialog == true ? "" : "hidden"} bg-gray-100 z-50 w-full h-full top-0 text-center`}>
                                   <div className="   mx-auto mt-8">
                                        <img className="w-2/5 m-auto my-4" src="/images/check.gif" alt="check sign"></img>
                                        <p className="text-3xl my-12 text-green-600">Request Submitted Successfully</p>
                                   </div>

                              </div>
                         </div>
                    </div>





               </div>




               <Footer />
          </div>
     )
}

export default Detail;