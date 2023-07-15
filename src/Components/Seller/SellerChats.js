import React, { useState, useEffect } from "react";
import SellerNavbar from "./SellerNavbar";
import Footer from "../Footer";
import ScrollToBottom from 'react-scroll-to-bottom';
import { auth, db } from "../../firebase";
import { addDoc, collection, serverTimestamp, query, orderBy, onSnapshot, limit, } from "firebase/firestore";

const SellerChats = (props) => {
     if(!props.seller){
          window.location.pathname="seller/login";
     }
     const [message, setMessage] = useState("");
     const [msgs, setMsgs] = useState([{ name: "" }]);
     const [client, setClient] = useState({ email: "" });
     const [clients, setClients] = useState([]);

     const set = (e) => {
          var li = e.length;
          console.log("set", e);
          setMsgs(e)
          console.log("all massges",msgs);

          for (var i = 1; i < li; i++) {
               for (var j = 0; j < clients.length; j++) {
                    if (e[i].email === clients[j].email) {
                         console.log("no new clients");
                         break;
                    }
                    else if (j === clients.length - 1) {
                         console.log("new client", e[i]);
                         var c = clients;
                         c.push(e[i])
                         setClients(c);
                         break;
                    }
               }
          }
          console.log("all clients", clients);
     }

     useEffect(() => {
          console.log(props.seller.id);
          var ID = props.seller.id;
          console.log(ID);

          const q = query(
               collection(db, ID),
               orderBy("createdAt", "asc"),
               limit(50)
          );

          onSnapshot(q, (QuerySnapshot) => {
               const fetchedMessages = [];
               QuerySnapshot.forEach((doc) => {
                    fetchedMessages.push({ ...doc.data(), id: doc.id });
               });
               const sortedMessages = fetchedMessages.sort(
                    (a, b) => a.createdAt - b.createdAt
               );
               console.log("msgs1", msgs);

               setMsgs(() => fetchedMessages.sort(
                    (a, b) => a.createdAt - b.createdAt
               ));

               console.log("sortedMessages", sortedMessages);
               console.log("msgs2", msgs);

               if (sortedMessages.length !== 0 && clients.length === 0) {
                    setClients([sortedMessages[0]]);
               }

               setTimeout(()=>set(sortedMessages), 500)
          })
          }, [clients]);


          const submit = (e) => {
               e.preventDefault();
               if (message.trim() === "") {
                    alert("Enter valid message");
                    return;
               }
               addDoc(collection(db, props.seller.id), {
                    text: message,
                    name: client.name,
                    email: client.email,
                    createdAt: serverTimestamp(),
                    sellerId: props.seller.id,
                    seller: 1,
                    // uid,
               });
               setMessage("");
               console.log("msg sent");
          }

          const content =
               msgs.map((element, key) => {
                    var len = key * 10;
                    if (element.email === client.email) {
                         return (
                              <div id={key} className={`w-2/3 h-10 `}>
                                   <div className={`absolute  mx-2 px-3 py-1 rounded-full ${element.seller == 1 ? "right-2 bg-blue-200" : "bg-white left-2"}`}>
                                        <p className={``}>
                                             {element.text}
                                        </p>
                                   </div>
                              </div>
                         )
                    }
               }
               )

          return (
               <div>
                    <SellerNavbar />
                    <h1 className="text-center mb-6 text-4xl font-light border-t pt-6">Messages</h1>

                    <div className="border md:m-6 md:mx-20 grid grid-cols-3 ">
                         <div className=" col-span-1 m-3">
                              <div className="px-2 my-6 text-center">
                                   <input className="focus:border-b-2 focus:border-gray-600 px-1 inline-block border-b-2 border-gray-400 w-4/5 "></input>
                                   <button>
                                        <svg className="w-8  hover:text-gray-600 text-gray-400 mr-2 inline-block " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                   </button>
                              </div>

                              {
                                   clients.map((cl, i) => {

                                        return (
                                             <div id={i} onClick={(e) => { setClient(cl) }} className={` hover:shadow-2xl  ${client.email === cl.email ? "bg-gray-200" : "hover:bg-gray-100"} relative  h-28 mt-4 border-b border-r border-t border-gray-400 p-2`}>
                                                  <img src="/images/logo.png" className="mt-2 ml-2 absolute top-4 rounded-full w-16 h-16 " />
                                                  <h1 className="absolute top-6 left-24 font-medium text-xl">{cl.name}</h1>
                                                  <h1 className="absolute top-16 left-24 font-light text-base">Email:- {cl.email}</h1>
                                                  <p className="absolute top-8 shadow right-6 font-normal bg-green-500 rounded-full w-4 h-4 text-white text-sm"></p>

                                             </div>
                                        )
                                   })
                              }
                         </div>


                         <div className={`${client.email !== "" ? "" : "hidden"} col-span-2 relative border`}>
                              <div className=" bg-blue-600 text-center w-full h-24">
                                   <img src="/images/logo.png" className="w-20 h-20 top-2 left-2 inline-block absolute rounded-full " />
                                   <p className="text-white text-lg md:text-3xl mx-auto mt-8 text-center inline-block">{client.name}</p>
                              </div>


                              <div className="bg-gray-200 overflow-scroll h-96 py-4" >
                                   <ScrollToBottom >
                                        {content}
                                   </ScrollToBottom>
                              </div>

                              <div className=" bg-blue-400 text-center pt-3  bottom-0 w-full h-16">
                                   <input onKeyUp={(e) => { if (e.key === 'Enter') { submit(e) } }} value={message} onChange={(e) => setMessage(e.target.value)} className="m-auto h-5/6 p-1 w-2/3 rounded px-2" />
                                   <button onClick={(e) => submit(e)} className="   bg-green-500 hover:shadow-xl shadow p-1 px-4 rounded-full absolute right-10  bottom-4 text-white " >send</button>
                              </div>
                         </div>

                         <div className={`${client.email === "" ? "" : "hidden"} col-span-2`}>
                              <p className="text-center font-light text-blue-400 text-3xl my-32">Communicate with your client in personal !!!</p>
                         </div>
                    </div>

                    <Footer />
               </div>
          )
     }

export default SellerChats;