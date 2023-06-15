import React, { useEffect, useState } from "react";
import Home from "./Home";
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Marketplace from "./Marketplace";
import Detail from "./Detail";
import Chats from "./Chats";
import Order from "./Order";
import UserEnquiries from "./UserEnquiries";
import Seller from "./Seller/Seller";
import SellerLogin from "./Seller/SellerLogin";
import SellerSignUp from "./Seller/SellerSignUp";
import Profile from "./Seller/Profile";
import Enquiries from "./Seller/Enquiries";
import SellerChats from "./Seller/SellerChats";
import Contract from "./Seller/Contract";
import Orders from "./Seller/Orders";
import DetailContract from "./Seller/DetailContract";
import { auth } from "../firebase";

const App = () => {
   useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
        console.log(user);
    })
   },[])
     
     return (
         <div>
             <div>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/login" element={<Login />}/>
                            <Route path="/signup" element={<SignUp  />}/>
                            <Route path="/marketplace" element={<Marketplace  />}/>
                            <Route path="/detail" element={<Detail  />}/>
                            <Route path="/chats" element={<Chats  />}/>
                            <Route path="/order" element={<Order />}/>
                            <Route path="/enquiries" element={<UserEnquiries  />}/>
                            <Route path="/seller" element={<Seller/>}/>
                            <Route path="/seller/login" element={<SellerLogin/>}/>
                            <Route path="/seller/signup" element={<SellerSignUp/>}/>
                            <Route path="/seller/profile" element={<Profile/>}/>
                            <Route path="/seller/enquiries" element={<Enquiries/>}/>
                            <Route path="/seller/enquiries" element={<Enquiries/>}/>
                            <Route path="/seller/chats" element={<SellerChats/>}/>
                            <Route path="/seller/contract" element={<Contract/>}/>
                            <Route path="/seller/orders" element={<Orders/>}/>
                            <Route path="/seller/detail" element={<DetailContract/>}/>
                        </Routes>
                    </BrowserRouter>
                    

             </div>
         </div>
     )
 }
 
 export default App;