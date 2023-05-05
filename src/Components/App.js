import React, { useState } from "react";
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

const App = () => {
    const [login,setLogin]=useState(false);
    const logged=()=>{
        setLogin(true);
        console.log(login,"111");
    }

    const logout=()=>{
        setLogin(false);
    }
     
     return (
         <div>
             <div>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home login={login} logout={logout}/>}></Route>
                            <Route path="/login" element={<Login setLogin={logged}/>}/>
                            <Route path="/signup" element={<SignUp  setLogin={logged}/>}/>
                            <Route path="/marketplace" element={<Marketplace  login={login}  logout={logout}/>}/>
                            <Route path="/detail" element={<Detail  login={login}  logout={logout}/>}/>
                            <Route path="/chats" element={<Chats  login={login}  logout={logout}/>}/>
                            <Route path="/order" element={<Order  login={login}  logout={logout}/>}/>
                            <Route path="/enquiries" element={<UserEnquiries  login={login}  logout={logout}/>}/>
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