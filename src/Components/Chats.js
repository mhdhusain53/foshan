import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToBottom from 'react-scroll-to-bottom';
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp, query, orderBy, onSnapshot, limit, } from "firebase/firestore";
import { ref, get, getDatabase, child } from "firebase/database";


const Chats = (props) => {
     if(!props.user){
          window.location.pathname="/login";
     }
     const [message, setMessage] = useState("");
     const [msgs, setMsgs] = useState([]);
     const [seller, setSeller] = useState({ businessName: "",id:"l" });
     const [sellers, setSellers] = useState([]);

     useEffect(() => {
          const q = query(
               collection(db, seller.id),
               orderBy("createdAt", "asc"),
               limit(50)
          );
          const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
               const fetchedMessages = [];
               QuerySnapshot.forEach((doc) => {
                    fetchedMessages.push({ ...doc.data(), id: doc.id });
               });
               const sortedMessages = fetchedMessages.sort(
                    (a, b) => a.createdAt - b.createdAt
               );
               setMsgs(sortedMessages);
               console.log(msgs);
          });


          const dbRef = ref(getDatabase());
          get(child(dbRef, `sellers/` + 53)).then((res) => {
               if (res.exists()) {
                    setSellers(res.val());
               }
          }).catch((error) => {
               console.error(error);
          });


          return () => unsubscribe;
     }, [seller]);

     const submit = (e) => {
          e.preventDefault();
          if (message.trim() === "") {
               alert("Enter valid message");
               return;
          }
          const { uid, displayName, email } = auth.currentUser;
          addDoc(collection(db, seller.id), {
               text: message,
               name: displayName,
               email:email,
               createdAt: serverTimestamp(),
               sellerId: seller.id,
               seller: 0,
               uid,
          });
          setMessage("");
          console.log("msg sent");
     };


     const content = msgs.map((element, key) => {
          // console.log(props);

          if (props.user.email === element.email ) {
               // console.log(props);
               // console.log(element);
               return (
                    <div id={key} className={`w-2/3 h-10 `}>
                         <div className={`absolute  mx-2 px-3 py-1 rounded-full ${element.seller == 0 ? "right-2 bg-blue-200" : "bg-white left-2"}`}>
                              <p className={``}>
                                   {element.text}
                              </p>
                         </div>
                    </div>
               )
          }}
     )


     return (
          <div className="bg-gray-50">
               <Navbar user={props.user} />
               <h1 className="text-center mb-6 text-3xl font-light border-t pt-6">Messages</h1>

               <div className="border md:m-6 md:mx-20 grid grid-cols-3 bg-white">
                    <div className=" col-span-1 border-r-2 px-2 my-3">
                         <div className="px-2 my-6 text-center">
                              <input className="focus:border-b-2 focus:border-gray-600 px-1 inline-block border-b-2 border-gray-400 w-4/5 "></input>
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 ml-2 fill-gray-500 inline-block" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" /></svg>
                         </div>
                         {
                              sellers.map((sel, key) => {
                                   return (
                                        <div id={key} onClick={(e) => { setSeller(sel) }} className={` hover:shadow-2xl  ${sel.id === seller.id ? "bg-gray-200" : "hover:bg-gray-100"} relative  h-28 mt-4 border-b border-r border-t border-gray-400 p-2`}>
                                             <img src="/images/logo.png" className="mt-2 ml-2 absolute top-4 rounded-full w-16 h-16 " />
                                             <h1 className="absolute top-6 left-28 font-medium text-xl">{sel.businessName}</h1>
                                             <h1 className="absolute top-16 left-28 font-light text-base">Email:- {sel.email}</h1>
                                             <p className="absolute top-8 shadow right-6 font-normal bg-green-500 rounded-full w-4 h-4 text-white text-sm"></p>

                                        </div>
                                   )
                              })
                         }
                    </div>


                    <div className={`${seller.businessName !== "" ? "" : "hidden"} col-span-2 relative border`}>
                         <div className=" bg-blue-600 text-center w-full h-24">
                              <img src="/images/logo.png" className="w-20 h-20 top-2 left-2 inline-block absolute rounded-full " />
                              <p className="text-white text-lg md:text-3xl mx-auto mt-8 text-center inline-block">{seller.businessName}</p>
                         </div>
                         <div className="bg-gray-200 overflow-scroll h-96 py-4" >
                              <ScrollToBottom >
                                   {content}
                              </ScrollToBottom>
                         </div>
                         <div className=" bg-blue-400 text-center pt-3  bottom-0 w-full h-16">
                              <input onKeyUp={(e)=>{if (e.key === 'Enter'){submit(e)}}} value={message} onChange={(e) => setMessage(e.target.value)} className="m-auto h-5/6 p-1 w-2/3 rounded px-2" />
                              <button onClick={(e) => { submit(e) }} className="  bg-green-500 hover:shadow-xl shadow p-1 px-4 rounded-full absolute right-10  bottom-4 text-white " >send</button>
                         </div>
                    </div>


                    <div className={`${seller.businessName === "" ? "" : "hidden"} col-span-2`}>
                         <p className="text-center font-light text-blue-400 text-3xl my-32">Now ask all your Queries in personal with the sellers!!!</p>
                    </div>
               </div>

               <Footer />
          </div>
     )
}

export default Chats;