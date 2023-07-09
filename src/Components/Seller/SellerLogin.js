import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, get, getDatabase, child } from "firebase/database";


const SellerLogin = (props) => {
     const navigate = useNavigate();
     const [val, setVal] = useState({ email: "", pass: "" });
     const [error, seterror] = useState("");


     const click = (e) => {
          e.preventDefault();

          var userId = 53;

          const dbRef = ref(getDatabase());
          get(child(dbRef, `sellers/` + userId)).then((res) => {
               if (res.exists()) {

                    var value = res.val();
                    console.log(value);
                    var len=value.length;
                    for (var i = 0; i < len; i++) {
                         if (value[i].email == val.email) {
                              if (value[i].password == val.pass) {
                                   props.onSetSeller(value[i]);
                                   console.log("User verifies");
                                   navigate("../seller/profile");
                                   break;
                              }
                              seterror("Incorrect password !!!");
                              setVal({ email: val.email, pass: "" })
                              console.log("invalid password !!!");
                              break;

                         }else if(i==len-1){
                              setVal({ email: "", pass: "" })
                              console.log("User not found !!!");
                              seterror("User not found !!!");

                              break;
                         }
                    }
               }

          }).catch((error) => {
               console.error(error);
               seterror("User not found !!!");
               setVal({ email: "", pass: "" })
               console.log("User not found !!!");
          });
         
          // navigate("./profile");     


     }

     return (
          <div>
               <section className="bg-gray-50">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                         <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                              <img className="w-24  mr-2" src="/images/logo.png" alt="logo" />

                         </a>
                         <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                   <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                        Login to your seller account
                                   </h1>
                                   <form className="space-y-4 md:space-y-6" action="./profile">
                                        <div>
                                             <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                             <input type="email" name="email" id="email" onChange={(e) => setVal((prev) => ({ ...prev, email: e.target.value }))} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
                                        </div>
                                        <div>
                                             <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                             <input type="password" name="password" id="password" onChange={(e) => setVal((prev) => ({ ...prev, pass: e.target.value }))} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                                        </div>

                                        <p className="text-sm font-normal text-red-500">
                                             {error}
                                        </p>

                                        <button onClick={click} type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" placeholder="Login">Login</button>
                                        <p className="text-sm font-light text-gray-500">
                                             Don’t have an account yet? <a href="./signup" className="font-medium text-primary-600 hover:underline">Sign up</a>
                                        </p>
                                   </form>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     )
}

export default SellerLogin;