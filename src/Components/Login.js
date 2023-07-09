import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import {useNavigate} from "react-router-dom";

const Login = (props) => {
     const [val,setVal]=useState({email:"",password:""});
     const [error,seterror]=useState("");

     const navigate=useNavigate();

     const click=(e)=>{
          e.preventDefault();
          console.log(val);
          signInWithEmailAndPassword(auth,val.email,val.password).then(
               (res)=>{
                    console.log(res._tokenResponse.displayName);
                    props.onSetUser({name:res._tokenResponse.displayName,email:res._tokenResponse.email})
                    
                    navigate("../marketplace");

               }
          ).catch(err=>{
               console.log(err.message);
               seterror(err.message);
          });
          
     }
     return (
          <div>
               <section className="bg-gray-50 py-28">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
                         <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                              <img className="w-24  mr-2" src="images/logo.png" alt="logo" />
                                   
                         </a>
                         <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                   <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                        Login to your account
                                   </h1>
                                   <p className={`bg-yellow-400 px-3 py-1 text-sm inline-block text-white rounded ${val.valid?"":"hidden"}`}>Invalid Credentials</p>
                                   <form className="space-y-4 md:space-y-6" >
                                        <div>
                                             <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                             <input type="email" onChange={(e)=>setVal((prev)=>({...prev,email:e.target.value}))} value={val.email} name="email"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
                                        </div>
                                        <div>
                                             <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                             <input type="password" name="password"   onChange={(e)=>setVal((prev)=>({...prev,password:e.target.value}))} value={val.pass} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                                        </div>
                                        <p className="text-sm font-normal text-red-500">
                                             {error}
                                        </p>
                                       
                                        <button onClick={click} type="" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" placeholder="Login">Login</button>
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

export default Login;