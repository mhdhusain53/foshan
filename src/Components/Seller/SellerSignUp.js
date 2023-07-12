import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, set, get, getDatabase, child } from "firebase/database";
import { database } from "../../firebase";
import emailkey from "../../emailkey";
import emailjs from '@emailjs/browser';
import { v4 as uuid } from 'uuid';



const SellerSignUp = (props) => {
     const navigate = useNavigate();

     const [values, setvalues] = useState({ name: "", bName: "", email: "", pass: "", cNo: "", add: "",city:"",state:"", gstNo: "" })
     const [error, seterror] = useState("");

     const handlesubmit = (e) => {
          e.preventDefault();

          const unique_id = uuid();
          const _id = unique_id.slice(0,8)
          var sellerData = {
               id:_id,
               name: values.name,
               businessName: values.bName,
               email: values.email,
               contactNo: values.cNo,
               address: values.add,
               city: values.city.toUpperCase(),
               state: values.state.toUpperCase(),
               gstNo: values.gstNo,
               password: values.pass
          }

          

          var userId = 53;

          const dbRef = ref(getDatabase());
          get(child(dbRef, `sellers/` + userId)).then((res) => {
               if (res.exists()) {

                    var sellers = res.val();
                    var check = true;
                    var len = sellers.length;
                    for (var i = 0; i < len; i++) {
                         // console.log(sellers[i].email);
                         // console.log( sellerData.email);
                         if (sellers[i].email == sellerData.email) {
                              check = false;
                              break;
                         }
                    }
                    if (check) {

                         sellers.push(sellerData);
                         set(ref(database, 'sellers/'+userId ), sellers).then((err) => {
                              if (err) {
                                   console.log(err);
                              }
                         });
                         console.log("User Created");


                         var templateParams = {
                              to_name: sellerData.name,
                              reply_to: sellerData.email
                         };

                         emailjs.send(emailkey.SERVICE_ID, emailkey.TEMPLATE_ID, templateParams, emailkey.PUBLIC_KEY)
                         .then((response) => {
                              console.log('SUCCESS!', response.status, response.text);
                         }, (err) => {
                              console.log('FAILED...', err);
                         });


                         props.onSetSeller(sellerData);


                         navigate("../seller/profile");

                    } else {

                         seterror("Email already exists !!!");
                         setvalues((prev) => ({ ...prev, email: "" }));
                    }

               } else {
                    var sellers = [sellerData]
                    set(ref(database, 'sellers/' + userId), sellers).then((err) => {
                         if (err) {
                              console.log(err);
                         }
                    });
                    console.log("First User Created");


                    var templateParams = {
                         to_name: sellerData.BusinessName,
                         reply_to: sellerData.email
                    };

                    emailjs.send(emailkey.SERVICE_ID, emailkey.TEMPLATE_ID, templateParams, emailkey.PUBLIC_KEY)
                         .then((response) => {
                              console.log('SUCCESS!', response.status, response.text);
                         }, (err) => {
                              console.log('FAILED...', err);
                         });

                    props.onSetSeller(sellerData);

                    navigate("../seller/profile");
               }



          }).catch((error) => {
               console.error(error);
          });



     }


     return (
          <div  className="bg-gray-50 py-12">
               
                    <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
                         <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                              <img className="w-24  mr-2" src="/images/logo.png" alt="logo" />

                         </a>
                         <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                   <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                        Register to become a Seller
                                   </h1>
                                   <form className="space-y-4 md:space-y-6" action="./profile">
                                        <div>
                                             <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                             <input onChange={(e) => setvalues((prev) => ({ ...prev, name: e.target.value }))} type="text" name="bname" id="name" autoCapitalize="true" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="John Paker" required />
                                        </div>
                                        <div>
                                             <label for="bName" className="block mb-2 text-sm font-medium text-gray-900">Business Name</label>
                                             <input onChange={(e) => setvalues((prev) => ({ ...prev, bName: e.target.value }))} type="text" name="bName" id="bName" autoCapitalize="true" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="XYZ PVT LTD" required />
                                        </div>
                                        <div>
                                             <label for="cno" className="block mb-2 text-sm font-medium text-gray-900">Contact Number</label>
                                             <input onChange={(e) => setvalues((prev) => ({ ...prev, cNo: e.target.value }))} type="text" name="cno" id="cno" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" placeholder="1234546345" required />
                                        </div>
                                        <div>
                                             <label for="add" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                                             <input onChange={(e) => setvalues((prev) => ({ ...prev, add: e.target.value }))} type="text" name="add" id="add" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="28, xyz, Pune, Maharashtra" required />
                                        </div>
                                        <div>
                                             <label for="city" className="block mb-2 text-sm font-medium text-gray-900">City</label>
                                             <input onChange={(e) => setvalues((prev) => ({ ...prev, city: e.target.value }))} type="text" name="city" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="28, xyz, Pune, Maharashtra" required />
                                        </div>
                                        <div>
                                             <label for="state" className="block mb-2 text-sm font-medium text-gray-900">State</label>
                                             <input onChange={(e) => setvalues((prev) => ({ ...prev, state: e.target.value }))} type="text" name="state" id="state" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="28, xyz, Pune, Maharashtra" required />
                                        </div>
                                        
                                        <div>
                                             <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Address Proof</label>
                                             <input type="file" name="addproof" id="addproof" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                                        </div>
                                        <div>
                                             <label for="gstno" className="block mb-2 text-sm font-medium text-gray-900">GST Number</label>
                                             <input onChange={(e) => setvalues((prev) => ({ ...prev, gstNo: e.target.value }))} type="text" name="gstno" id="gstno" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" placeholder="22AAAAA0000A1Z5" required />
                                        </div>

                                        <div>
                                             <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                             <input onChange={(e) => setvalues((prev) => ({ ...prev, email: e.target.value }))} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
                                        </div>
                                        <div>
                                             <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                             <input onChange={(e) => setvalues((prev) => ({ ...prev, pass: e.target.value }))} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                                        </div>

                                        <p className="text-sm font-normal text-red-500">
                                             {error}
                                        </p>

                                        <button onClick={handlesubmit} type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" placeholder="Login">Register & Continue</button>
                                        <p className="text-sm font-light text-gray-500">
                                             Already have an account? <a href="./login" className="font-medium text-primary-600 hover:underline">Login</a>
                                        </p>
                                   </form>
                              </div>
                         </div>
                    </div>
          </div>
     )
}

export default SellerSignUp;


// var product=[{
//      name:"Shell Mould Iron For Automobile",
//      pricePerKg:120,
//      sellerName:"Shara Steel",
//      address:"Pune, Maharashtra",
//      category:"Galvanized Steel",
//      grade:"302",
//      usage:"Construction",
//      sellerId:"",
//      city:"pune",
//      state:"maharashtra"

// },{
//      name:"Iron",
//      pricePerKg:120,
//      sellerName:"Shara Steel",
//      address:"Pune, Maharashtra",
//      category:"Die Steels",
//      grade:"302",
//      usage:"Automobile Industry",
//      sellerId:"",
//      city:"pune",
//      state:"maharashtra"

// },{
//      name:"Shell Mould Iron For Automobile",
//      pricePerKg:110,
//      sellerName:"Shara Steel",
//      address:"Pune, Maharashtra",
//      category:"Cold Rolled Steel",
//      grade:"302",
//      usage:"Automobile Industry",
//      sellerId:"",
//      city:"mumbai",
//      state:"maharashtra"

// },{
//      name:"Shell Mould Iron For Automobile",
//      pricePerKg:120,
//      sellerName:"Shara Steel",
//      address:"Pune, Maharashtra",
//      category:"Cold Rolled Steel",
//      grade:"302",
//      usage:"Construction",
//      sellerId:"",
//      city:"mumbai",
//      state:"maharashtra"

// },{
//      name:"Iron",
//      pricePerKg:100,
//      sellerName:"Vikas Iron & Steel Company",
//      address:"Pune, Maharashtra",
//      category:"Cold Rolled Steel",
//      grade:"316",
//      usage:"Construction",
//      sellerId:"",
//      city:"mumbai",
//      state:"maharashtra"

// },{
//      name:"Iron",
//      pricePerKg:100,
//      sellerName:"Indian Steel",
//      address:"Pune, Maharashtra",
//      category:"Die Steels",
//      grade:"316",
//      usage:"Pharmaceutical / Chemical Industry",
//      sellerId:"",
//      city:"mumbai",
//      state:"maharashtra"

// },{
//      name:"Iron",
//      pricePerKg:120,
//      sellerName:"Indian Steel",
//      address:"Pune, Maharashtra",
//      category:"Galvanized Steel",
//      grade:"304",
//      usage:"Construction",
//      sellerId:"",
//      city:"mumbai",
//      state:"maharashtra"

// },{
//      name:"Core Iron",
//      pricePerKg:120,
//      sellerName:"Indian Steel",
//      address:"Pune, Maharashtra",
//      category:"High Speed Steel",
//      grade:"304",
//      usage:"Pharmaceutical / Chemical Industry",
//      sellerId:"",
//      city:"mumbai",
//      state:"maharashtra"

// },{
//      name:"Core Iron",
//      pricePerKg:120,
//      sellerName:"Indian Steel",
//      address:"Pune, Maharashtra",
//      category:"High Speed Steel",
//      grade:"304",
//      usage:"Automobile Industry",
//      sellerId:"",
//      city:"mumbai",
//      state:"maharashtra"

// },{
//      name:"Core Iron",
//      pricePerKg:120,
//      sellerName:"Tata Steel",
//      address:"Pune, Maharashtra",
//      category:"Die Steels",
//      grade:"304",
//      usage:"Construction",
//      sellerId:"",
//      city:"mumbai",
//      state:"maharashtra"

// },{
//      name:"Core Iron",
//      pricePerKg:120,
//      sellerName:"Tata Steel",
//      address:"Pune, Maharashtra",
//      category:"Galvanized Steel",
//      grade:"304",
//      usage:"Automobile Industry",
//      sellerId:"",
//      city:"mumbai",
//      state:"maharashtra"

// },{
//      name:"High quality Iron",
//      pricePerKg:120,
//      sellerName:"Tata Steel",
//      address:"Pune, Maharashtra",
//      category:"Die Steels",
//      grade:"304",
//      usage:"Pharmaceutical / Chemical Industry",
//      sellerId:"",
//      city:"mumbai",
//      state:"maharashtra"

// },{
//      name:"High quality Iron",
//      pricePerKg:120,
//      sellerName:"JSW Steel",
//      address:"Pune, Maharashtra",
//      category:"Die Steels",
//      grade:"316",
//      usage:"Pharmaceutical / Chemical Industry",
//      sellerId:"",
//      city:"mumbai",
//      state:"maharashtra"

// },{
//      name:"High quality Iron",
//      pricePerKg:120,
//      sellerName:"JSW Steel",
//      address:"Pune, Maharashtra",
//      category:"Cold Rolled Steel",
//      grade:"316",
//      usage:"Automobile Industry",
//      sellerId:"",
//      city:"pune",
//      state:"maharashtra"

// },{
//      name:"High quality Iron",
//      pricePerKg:120,
//      sellerName:"JSW Steel",
//      address:"Pune, Maharashtra",
//      category:"Die Steels",
//      grade:"316",
//      usage:"Automobile Industry",
//      sellerId:"",
//      city:"pune",
//      state:"maharashtra"

// },{
//      name:"High quality Iron",
//      pricePerKg:120,
//      sellerName:"GPT Steel",
//      address:"Pune, Maharashtra",
//      category:"Galvanized Steel",
//      grade:"316",
//      usage:"Pharmaceutical / Chemical Industry",
//      sellerId:"",
//      city:"pune",
//      state:"maharashtra"

// },{
//      name:"Royal Iron",
//      pricePerKg:120,
//      sellerName:"GPT Steel",
//      address:"Pune, Maharashtra",
//      category:"Cold Rolled Steel",
//      grade:"204 Cu",
//      usage:"Construction",
//      sellerId:"",
//      city:"pune",
//      state:"maharashtra"

// },{
//      name:"Royal Iron",
//      pricePerKg:120,
//      sellerName:"GPT Steel",
//      address:"Pune, Maharashtra",
//      category:"Die Steels",
//      grade:"204 Cu",
//      usage:"Pharmaceutical / Chemical Industry",
//      sellerId:"",
//      city:"pune",
//      state:"maharashtra"

// },{
//      name:"Royal Iron",
//      pricePerKg:120,
//      sellerName:"Indian Steel",
//      address:"Pune, Maharashtra",
//      category:"Cold Rolled Steel",
//      grade:"204 Cu",
//      usage:"Construction",
//      sellerId:"",
//      city:"pune",
//      state:"maharashtra"

// },{
//      name:"Royal Iron",
//      pricePerKg:120,
//      sellerName:"Tata Steel",
//      address:"Pune, Maharashtra",
//      category:"Galvanized Steel",
//      grade:"204 Cu",
//      usage:"Automobile Industry",
//      sellerId:"",
//      city:"nagpur",
//      state:"maharashtra"

// },{
//      name:"Royal Iron",
//      pricePerKg:120,
//      sellerName:"Indian Steel",
//      address:"Pune, Maharashtra",
//      category:"Cold Rolled Steel",
//      grade:"204 Cu",
//      usage:"Pharmaceutical / Chemical Industry",
//      sellerId:"",
//      city:"nagpur",
//      state:"maharashtra"

// },{
//      name:"Best Iron",
//      pricePerKg:120,
//      sellerName:"Kalyani Steels Ltd.",
//      address:"Pune, Maharashtra",
//      category:"Die Steels",
//      grade:"204 Cu",
//      usage:"Automobile Industry",
//      sellerId:"",
//      city:"nagpur",
//      state:"maharashtra"

// },{
//      name:"Best Iron",
//      pricePerKg:120,
//      sellerName:"Kalyani Steels Ltd.",
//      address:"Pune, Maharashtra",
//      category:"High Speed Steel",
//      grade:"409L",
//      usage:"Construction",
//      sellerId:"",
//      city:"nagpur",
//      state:"maharashtra"

// },{
//      name:"Best Iron",
//      pricePerKg:120,
//      sellerName:"Kalyani Steels Ltd.",
//      address:"Pune, Maharashtra",
//      category:"Galvanized Steel",
//      grade:"409L",
//      usage:"Pharmaceutical / Chemical Industry",
//      sellerId:"",
//      city:"nagpur",
//      state:"maharashtra"

// },{
//      name:"Best Iron",
//      pricePerKg:120,
//      sellerName:"Kalyani Steels Ltd.",
//      address:"Pune, Maharashtra",
//      category:"High Speed Steel",
//      grade:"409L",
//      usage:"Automobile Industry",
//      sellerId:"",
//      city:"nagpur",
//      state:"maharashtra"

// },{
//      name:"Low Quality Iron",
//      pricePerKg:120,
//      sellerName:"Mukand Ltd.",
//      address:"Pune, Maharashtra",
//      category:"Die Steels",
//      grade:"409L",
//      usage:"Pharmaceutical / Chemical Industry",
//      sellerId:"",
//      city:"pune",
//      state:"maharashtra"

// },{
//      name:"Low Quality Iron",
//      pricePerKg:120,
//      sellerName:"Mukand Ltd.",
//      address:"Pune, Maharashtra",
//      category:"High Speed Steel",
//      grade:"409L",
//      usage:"Pharmaceutical / Chemical Industry",
//      sellerId:"",
//      city:"nagpur",
//      state:"maharashtra"

// },{
//      name:"Low Quality Iron",
//      pricePerKg:120,
//      sellerName:"Mukand Ltd.",
//      address:"Pune, Maharashtra",
//      category:"Galvanized Steel",
//      grade:"409L",
//      usage:"Automobile Industry",
//      sellerId:"",
//      city:"nagpur",
//      state:"maharashtra"

// },{
//      name:"Low Quality Iron",
//      pricePerKg:120,
//      sellerName:"Mukand Ltd.",
//      address:"Pune, Maharashtra",
//      category:"High Speed Steel",
//      grade:"409L",
//      usage:"Pharmaceutical / Chemical Industry",
//      sellerId:"",
//      city:"nagpur",
//      state:"maharashtra"

// },{
//      name:"Copper-Iron",
//      pricePerKg:120,
//      sellerName:"Usha Martin Ltd.",
//      address:"Pune, Maharashtra",
//      category:"Die Steels",
//      grade:"409L",
//      usage:"Automobile Industry",
//      sellerId:"",
//      city:"pune",
//      state:"maharashtra"

// },{
//      name:"Copper-Iron",
//      pricePerKg:120,
//      sellerName:"Usha Martin Ltd.",
//      address:"Pune, Maharashtra",
//      category:"Die Steels",
//      grade:"409L",
//      usage:"Pharmaceutical / Chemical Industry",
//      sellerId:"",
//      city:"pune",
//      state:"maharashtra"

// },]