import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../firebase";

const SignUp = ({setLogin}) => {
     const navigate=useNavigate();
     const [error,seterror]=useState("");
     const [values,setvalues]=useState({name:"",email:"",password:""})
     const handlesubmit =(e)=>{
          e.preventDefault();
          console.log(values);
          createUserWithEmailAndPassword(auth,values.email,values.password).then(
               (res)=>{
                    console.log(res);
                    updateProfile(res.user,{
                         displayName:values.name
                    });
                    navigate("../marketplace");

               }
          ).catch(err=>{
               console.log(err.message);
               seterror(err.message);
          });
     }
     return (
          <div>
               <section className="bg-gray-50">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                         <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                              <img className="w-24  mr-2" src="images/logo.png" alt="logo" />

                         </a>
                         <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                   <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                        Login to your account
                                   </h1>
                                   <form className="space-y-4 md:space-y-6" onSubmit={(e)=>{}} action="./marketplace">
                                        <div>
                                             <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                                             <input onChange={(e)=>setvalues((prev)=>({...prev,name:e.target.value}))} type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
                                        </div>
                                        <div>
                                             <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                             <input onChange={(e)=>setvalues((prev)=>({...prev,email:e.target.value}))} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
                                        </div>
                                        <div>
                                             <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                             <input onChange={(e)=>setvalues((prev)=>({...prev,password:e.target.value}))} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                                        </div>
                                        <p className="text-sm font-normal text-red-500">
                                             {error}
                                        </p>

                                        <button onClick={handlesubmit}  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" placeholder="Login">Sign in</button>
                                        <p className="text-sm font-light text-gray-500">
                                             Already have an account? <a href="./login" className="font-medium text-primary-600 hover:underline">Login</a>
                                        </p>
                                   </form>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     )
}

export default SignUp;