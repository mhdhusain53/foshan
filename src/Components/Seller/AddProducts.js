import React, { useState } from 'react';
import SellerNavbar from './SellerNavbar';
import { ref, get, set, getDatabase, child } from "firebase/database";
import { database } from "../../firebase";




const AddProducts = ({ seller }) => {
     if(!seller){
          window.location.pathname="seller/login";
     }
     const [value, setvalues] = useState({ category: "High Speed Steel", grade: "304", usage: "Construction", name: "", price: "", quantity: "", sellerName: seller.businessName, sellerId: seller.id, email: seller.email, city: seller.city, state: seller.state, address: seller.address });
     const [acategory, setCategory] = useState({ value: "High Speed Steel", set: false });
     const [agrade, setGrade] = useState({ value: "304", set: false });
     const [ausage, setUsage] = useState({ value: "Construction", set: false });
     const [dialog, setDialog] = useState();

     const submit = (e) => {
          e.preventDefault();

          console.log(seller);

          setvalues((prev) => ({ ...prev, category: acategory.value, grade: agrade.value, usage: ausage.value }))
          console.log(value);

          const dbRef = ref(getDatabase());
          get(child(dbRef, `products/`)).then((res) => {
               if (res.exists()) {

                    var products = res.val();
                    products.push(value);
                    set(ref(database, 'products/'), products).then((err) => {
                         if (err) {
                              console.log(err);
                         }
                    });
                    console.log("Product Added Successfully !!!");

               } else {
                    var products = [value]
                    set(ref(database, 'products/'), products).then((err) => {
                         if (err) {
                              console.log(err);
                         }
                    });
                    console.log("First Product Added Successfully !!!");


               }
          }).catch((error) => {
               console.error(error);
          });
          setDialog(true);
          setTimeout(() => { setDialog(false) }, 2950);
     }



     return (
          <div className="bg-gray-50 pb-12">
               <SellerNavbar />

               <div className='border mx-auto bg-white w-1/2 mt-10 mb-12 py-6 px-16'>
                    <h1 className='text-3xl  text-center font-light'>Add New Product</h1>
                    <form className=' p-6 relative'>
                         <div className='py-3 grid grid-cols-3'>
                              <label for="name" className=" mb-2 mt-2 mr-3 text-base font-medium text-gray-900">Product Name : </label>
                              <input onChange={(e) => setvalues((prev) => ({ ...prev, name: e.target.value }))} type="text" name="name" id="name" className="col-span-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  p-2.5" placeholder="Shell Mould Iron For Automobile" required />
                         </div>
                         <div className='py-3 grid grid-cols-3'>
                              <label for="price" className=" mb-2 mt-2 mr-3 text-sm font-medium text-gray-900">Price (per Kg) : </label>
                              <input onChange={(e) => setvalues((prev) => ({ ...prev, price: e.target.value }))} type="text" name="price" id="price" className="col-span-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  p-2.5" placeholder="110" required />
                         </div>
                         <div className='py-3 grid grid-cols-3'>
                              <label for="qantity" className=" mb-2 mt-2 mr-3 text-sm font-medium text-gray-900">Quntity : </label>
                              <input onChange={(e) => setvalues((prev) => ({ ...prev, quantity: e.target.value }))} type="text" name="quantity" id="quantity" className="col-span-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5" placeholder="53" required />
                         </div>


                         <div className='py-3 grid grid-cols-3'>
                              <label for="category" className=" mb-2 mt-2 mr-3 text-sm font-medium text-gray-900">Category : </label>
                              <div className='col-span-2 text-center mx-auto w-full'>
                                   <div className='text-center '>
                                        <button onClick={() => setCategory({ value: acategory.value, set: !acategory.set })} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="w-full block bg-gray-50 border border-gray-300 text-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mx-auto px-5 py-2.5 text-center inline-block items-center" type="button">{acategory.value}<svg class="w-2.5 h-2.5 ml-2.5 inline-block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg></button>
                                   </div>
                                   <div id="dropdown" class={`z-10 ${acategory.set ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow`}>
                                        <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
                                             <li>
                                                  <p onClick={() => { setCategory({ value: "High Speed Steel", set: false }) }} class="block px-4 py-2 hover:bg-gray-100">High Speed Steel</p>
                                             </li>
                                             <li>
                                                  <p onClick={() => { setCategory({ value: "Cold Rolled Steel", set: false }); }} class="block px-4 py-2 hover:bg-gray-100 ">Cold Rolled Steel</p>
                                             </li>
                                             <li>
                                                  <p onClick={() => { setCategory({ value: "Die Steels", set: false }); }} class="block px-4 py-2 hover:bg-gray-100 ">Die Steels</p>
                                             </li>
                                             <li>
                                                  <p onClick={() => { setCategory({ value: "Galvanized Steel", set: false }); }} class="block px-4 py-2 hover:bg-gray-100">Galvanized Steel</p>
                                             </li>
                                             <li>
                                                  <p onClick={() => { setCategory({ value: "Plastic Mould Steel", set: false }); }} class="block px-4 py-2 hover:bg-gray-100 ">Plastic Mould Steel</p>
                                             </li>
                                             <li>
                                                  <p onClick={() => { setCategory({ value: "Surgical Steel", set: false }); }} class="block px-4 py-2 hover:bg-gray-100 ">Surgical Steel</p>
                                             </li>
                                             <li>
                                                  <p onClick={() => { setCategory({ value: "Prepainted Steel", set: false }); }} class="block px-4 py-2 hover:bg-gray-100">Prepainted Steel</p>
                                             </li>
                                             <li>
                                                  <p onClick={() => { setCategory({ value: "Tor Steel", set: false }); }} class="block px-4 py-2 hover:bg-gray-100">Tor Steel</p>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>


                         <div className='py-3 grid grid-cols-3'>
                              <label for="grade" className=" mb-2 mt-2 mr-3 text-sm font-medium text-gray-900">Grade : </label>
                              <div className='col-span-2 text-center mx-auto w-full'>
                                   <div className='text-center '>
                                        <button onClick={() => setGrade({ value: agrade.value, set: !agrade.set })} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="w-full block bg-gray-50 border border-gray-300 text-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mx-auto px-5 py-2.5 text-center inline-block items-center " type="button">{agrade.value}<svg class="w-2.5 h-2.5 ml-2.5 inline-block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg></button>
                                   </div>
                                   <div id="dropdown" class={`z-10 ${agrade.set ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow`}>
                                        <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
                                             <li>
                                                  <p onClick={() => { setGrade({ value: "304", set: false }); }} class="block px-4 py-2 hover:bg-gray-100 ">304</p>
                                             </li>
                                             <li>
                                                  <p onClick={() => { setGrade({ value: "302", set: false }); }} class="block px-4 py-2 hover:bg-gray-100 ">302</p>
                                             </li>
                                             <li>
                                                  <p onClick={() => { setGrade({ value: "316", set: false }); }} class="block px-4 py-2 hover:bg-gray-100 ">316</p>
                                             </li>
                                             <li>
                                                  <p onClick={() => { setGrade({ value: "204 Cu", set: false }); }} class="block px-4 py-2 hover:bg-gray-100 ">204 Cu</p>
                                             </li>
                                             <li>
                                                  <p onClick={() => { setGrade({ value: "409L", set: false }); }} class="block px-4 py-2 hover:bg-gray-100 ">409L</p>
                                             </li>
                                             <li>
                                                  <p onClick={() => { setGrade({ value: "430", set: false }); }} class="block px-4 py-2 hover:bg-gray-100">430</p>
                                             </li>
                                             <li>
                                                  <p onClick={() => { setGrade({ value: "Duplex 32205", set: false }); }} class="block px-4 py-2 hover:bg-gray-100 ">Duplex 32205</p>
                                             </li>
                                             <li>
                                                  <p onClick={() => { setGrade({ value: "Duplex 32750", set: false }); }} class="block px-4 py-2 hover:bg-gray-100">Duplex 32750</p>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>


                         <div className='py-3 grid grid-cols-3'>
                              <label for="usage" className=" mb-2 mt-2 mr-3 text-sm font-medium text-gray-900">Usage :</label>
                              <div className='col-span-2 text-center mx-auto w-full'>
                                   <div className='text-center '>
                                        <button onClick={() => setUsage({ value: ausage.value, set: !ausage.set })} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="w-full block bg-gray-50 border border-gray-300 text-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mx-auto px-5 py-2.5 text-center inline-block items-center  " type="button">{ausage.value}<svg class="w-2.5 h-2.5 ml-2.5 inline-block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg></button>
                                   </div>
                                   <div id="dropdown" class={`z-10 ${ausage.set ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow`}>
                                        <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
                                             <li>
                                                  <p onClick={() => { setUsage({ value: "Construction", set: false }); }} class="block px-4 py-2 hover:bg-gray-100 ">Construction</p>
                                             </li>
                                             <li>
                                                  <p onClick={() => { setUsage({ value: "Automobile Industry", set: false }); }} class="block px-4 py-2 hover:bg-gray-100 ">Automobile Industry</p>
                                             </li>
                                             <li>
                                                  <p onClick={() => { setUsage({ value: "Pharmaceutical / Chemical Industry", set: false }); }} class="block px-4 py-2 hover:bg-gray-100 ">Pharmaceutical / Chemical Industry</p>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>


                         <div className='text-center my-6'>
                              <button onClick={(e) => submit(e)} className="text-center w-48 py-1 rounded-xl text-xl mx-auto text-green-500 border border-green-500 hover:text-white hover:bg-green-500">Add</button>
                         </div>

                         <div className={`absolute mt-4 ${dialog == true ? "" : "hidden"} bg-gray-100 z-50 w-full h-full top-0 text-center`}>
                              <div className="   mx-auto mt-8">
                                   <img className="w-2/5 m-auto my-4" src="/images/check.gif" alt="check sign"></img>
                                   <p className="text-3xl my-12 text-green-600">Product Added Successfully</p>
                              </div>

                         </div>
                         

                    </form>


               </div>

          </div>
     )
}

export default AddProducts;