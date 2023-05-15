import React from "react";

const SellerSignUp = () => {
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
                                        Register to become a Seller
                                   </h1>
                                   <form className="space-y-4 md:space-y-6" action="./profile">
                                   <div>
                                             <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Business Name</label>
                                             <input type="text" name="bname" id="" autoCapitalize="false" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="XYZ PVT LTD" required />
                                        </div>
                                        <div>
                                             <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Contact Number</label>
                                             <input type="number" name="cno" id="cno" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" placeholder="1234546345" required />
                                        </div>
                                        <div>
                                             <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                                             <input type="text" name="add" id="add" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="28, xyz, Pune, Maharashtra" required />
                                        </div>
                                        <div>
                                             <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Address Proof</label>
                                             <input type="file" name="addproof" id="addproof" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"  required />
                                        </div>
                                        <div>
                                             <label for="email" className="block mb-2 text-sm font-medium text-gray-900">GST Number</label>
                                             <input type="number" name="gstno" id="gstno" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" placeholder="22AAAAA0000A1Z5" required />
                                        </div>
                                        <div>
                                             <label for="uname" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                                             <input type="text" name="uname" id="uname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="asdfjkl23" required />
                                        </div>
                                        <div>
                                             <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                             <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
                                        </div>
                                        <div>
                                             <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                             <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                                        </div>
                                        <div>
                                             <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm Password</label>
                                             <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                                        </div>

                                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" placeholder="Login">Register & Continue</button>
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

export default SellerSignUp;