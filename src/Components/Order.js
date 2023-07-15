import React, { useState, Component, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ref, set, get, getDatabase, child } from "firebase/database";
import { database } from "../firebase";


const Order = (props) => {
     if(!props.user){
          window.location.pathname="/login";
     }
     const [rating, setRating] = useState({ index: -1, val: 0 });
     const [contract, setContract] = useState([]);
     const [dialog, setDialog] = useState(-1);

     useEffect(() => {
          const dbRef = ref(getDatabase());
          get(child(dbRef, `contracts/`)).then((res) => {
               if (res.exists()) {
                    setContract(res.val());
                    console.log(contract);
               }
          }).catch((error) => {
               console.error(error);
          });
     }, []);

     const setVal = (e) => {
          setRating({ index: rating.index, val: e })
     }
     const submit = (i) => {
          var data = {
               productName: contract[i].productName,
               sellerName: contract[i].sellerName,
               sellerId: contract[i].sellerId,
               contractDate: contract[i].contractDate,
               rating: rating.val,
               size: contract[i].size,
               clientName: contract[i].clientName,
               clientEmail: contract[i].clientEmail,
          }

          const dbRef = ref(getDatabase());
          get(child(dbRef, `products/`)).then((res) => {
               if (res.exists()) {
                    var products = res.val();
                    for(var j=0;j<products.length;j++){
                         if((contract[i].productName===products[j].name)&&(contract[i].sellerId===products[j].sellerId)){
                              var b=products[j].buyers;
                              var r=products[j].rating;

                              var n=(b*r+rating.val)/(b+1);
                              n=Math.round(n * 10) / 10
                              products[j].buyers=b+1;
                              products[j].rating=n;


                              set(ref(database, 'products/'), products).then((err) => {
                                   if (err) {
                                        console.log(err);
                                   }
                              });
                              break;
                         }
                    }
                    console.log("Rating Added Successfully !!!");
               } 
          }).catch((error) => {
               console.error(error);
          });

          var v = contract;
          contract[i].rating = rating.val;
          setContract(v);
          set(ref(database, 'contracts/'), contract).then((err) => {
               if (err) {
                    console.log(err);
               }
          });

          setRating({ index: -1, val: 0 })

          setTimeout(() => {
               setDialog(-1);
          }, 2950);

     }



     return (
          <div>
               <Navbar user={props.user} />
               <div className="w-1/2 mx-auto my-12">
                    {/* <div className="bg-blue-700 text-center px-4 mx-8 text-xl font-medium py-12">
                         <button className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">All Orders</button>
                         <button className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Last month</button>
                         <button className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">Last 3 months</button>
                         <button className="text-white w-full shadow hover:shadow-xl border-2 rounded-xl border-blue-900 border-r my-4 py-2 hover:bg-blue-800 bg-blue-600 ">last 6 months</button>
                    </div> */}


                    <div className=" border">
                         <div className="px-8 my-6 flex">
                              <p className="text-3xl flex-1 font-light mx-auto">Previous Orders</p>
                         </div>


                         {
                              contract.map((e, index) => {
                                   if (e.status === "Accepted" && props.user.email === e.clientEmail) {
                                        return (
                                             <div id={index} className="px-6 py-6 my-6  border mx-8 relative shadow hover:shadow-xl">
                                                  <div className="flex ">
                                                       <p className="flex-1 text-xl py-1 font-medium">Contract ID: {e.contractId}</p>
                                                       <p className={`${e.rating != 0 ? "" : "hidden"} flex-1 text-right text-xl  pb-1 font-medium `}>Your Rating: <span className="ml-1font-semibold">{e.rating} ⭐</span></p>

                                                  </div>
                                                  <p className="text-lg py-1 font-light">Company name: <span className="font-normal">{e.sellerName}</span></p>
                                                  <p className="text-lg pb-1 font-light">Product: <span className="font-normal">{e.productName}</span></p>
                                                  <p className="text-lg pb-1 font-light">Quantity: <span className="font-normal">{e.size} KG</span></p>
                                                  <p className="text-lg pb-1 font-light">Address: <span className="font-normal">{e.sellerAddress}. {e.sellerCity} {e.sellerState}</span></p>
                                                  <p className="text-lg pb-1 font-light ">Order Date: <span className="font-medium">{e.contractDate}</span></p>
                                                  <div className={`${e.rating == 0 ? "grid-cols-2" : ""} grid  mt-3`}>
                                                       <div className={`${e.rating == 0 ? "" : "hidden"} mx-auto`}>
                                                            <button onClick={() => { setRating({ index: index, value: "" }) }} className="text-white text-sm bg-green-500 py-1 px-2 rounded hover:shadow-xl">Give Feedback</button>
                                                       </div>
                                                       <div className="mx-auto">
                                                            <button onClick={() => { }} className="text-white text-sm bg-red-500 py-1 px-2 rounded hover:shadow-xl">Raise Complain</button>
                                                       </div>
                                                  </div>

                                                  <div className={`absolute ${rating.index == index ? "" : "hidden"} pt-12 mx-auto text-center p-4 w-full h-full bg-white z-12 top-0 left-0`}>
                                                       <p className=" mb-2 font-medium text-2xl mb-4 text-center">Give Your Feedback</p>
                                                       <div className="text-lg inline-block py-4">
                                                            <p className="inline-block text-base font-normal">Rate Out of 5 : </p>
                                                            <Stars
                                                                 starCount={5}
                                                                 rate={rating.val}
                                                                 setVal={setVal}
                                                            />
                                                       </div>
                                                       <div className={`${e.rating == 0 ? "grid-cols-2" : ""} grid  mt-3`}>
                                                            <div className={`${e.rating == 0 ? "" : "hidden"} mx-auto`}>
                                                                 <button onClick={() => { submit(index);setDialog(true) }} className="text-white text-base bg-green-600 py-1 px-3 rounded hover:shadow-xl">Submit</button>
                                                            </div>
                                                            <div className="mx-auto">
                                                                 <button onClick={() => { setRating({ index: -1, val: 0 }) }} className="text-white text-base bg-red-600 py-1 px-3 rounded hover:shadow-xl">Cancel</button>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className={`absolute mt-4 ${((dialog === index) ) ? "" : "hidden"} bg-gray-100 z-50 w-full h-full top-0 text-center`}>
                                                       <div className="   mx-auto mt-8">
                                                            <img className="w-2/5 m-auto my-4" src="/images/check.gif" alt="check sign"></img>
                                                            <p className="text-3xl my-12 text-green-600">Feedback Added Successfully</p>
                                                       </div>

                                                  </div>
                                             </div>
                                        )
                                   }
                              })
                         }
                    </div>
               </div>

               <Footer />
          </div >
     )
}


class Stars extends Component {
     constructor(props) {
          super(props);
          this.state = { currRating: 0 };
          this.onHover = this.onHover.bind(this);
          this.onClick = this.onClick.bind(this);
     }

     onHover(e) {
          if (e.target.id === "star") {
               this.setRating(e.target.dataset.value);
          }
     }

     onClick(e) {
          if (e.target.dataset.value === this.state.currRating) {
               this.setRating(e.target.dataset.value - 1);
          }
     }

     setRating(value) {
          this.props.setVal(value)
          this.setState({ currRating: value });
     }

     render() {
          return [...Array(this.props.starCount).keys()].map((index) => {
               return (
                    <img
                         data-value={index + 1}
                         id="star"
                         className="star inline-block ml-3"
                         onMouseOver={this.onHover}
                         onClick={this.onClick}
                         src={index + 1 <= this.props.rate ? "/images/filled-star.svg" : "/images/empty-star.svg"}
                         alt={
                              index + 1 <= this.props.rate ? "filled star" : "empty star"
                         }
                    />
               );
          });
     }
}

export default Order;