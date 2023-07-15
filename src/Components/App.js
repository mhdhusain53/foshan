import React, { useEffect, useState } from "react";
import Home from "./Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
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
import AddProducts from "./Seller/AddProducts";
import ClientContract from "./ClientContract";


const App = () => {

    const s = () => {
        if (localStorage.getItem("seller") != null) {
            var date = new Date();
            var u = JSON.parse(localStorage.getItem("seller"));
            if ((u.time + 1800000) > date.getTime()) {
                return u;
            } else  return false;
        } else return false;
    }
    const c = () => {
        if (localStorage.getItem("user") != null) {
            var date = new Date();
            var u = JSON.parse(localStorage.getItem("user"));
            if ((u.time + 1800000) > date.getTime()) {
                return u;
            } else return false;
        } else return false;
    }

    const [seller, setSeller] = useState(()=>s());
    const [user, setUser] = useState(()=>c());
    const [detail, setDetail] = useState(false);

    useEffect(() => {
        // if (localStorage.getItem("user")) {
        //     var date = new Date();
        //     var u = JSON.parse(localStorage.getItem("user"));
        //     if ((u.time + 10000) > date.getTime()) {
        //         setUser(u);
        //     }

        // }
    }, [])

    

    const onSetSeller = (e) => {
        var date = new Date();
        e = { ...e, time: date.getTime() };
        setSeller(e);
        localStorage.setItem("seller", JSON.stringify(e));

    }

    const onSetUser = (e) => {
        var date = new Date();
        e = { ...e, time: date.getTime() };
        setUser(e);
        localStorage.setItem("user", JSON.stringify(e));

    }
    const onSetDetail = (e) => {
        setDetail(e);
    }

    return (
        <div>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home user={user} />}></Route>
                        <Route path="/login" element={<Login onSetUser={onSetUser} />} />
                        <Route path="/signup" element={<SignUp onSetUser={onSetUser} />} />
                        <Route path="/marketplace" element={<Marketplace onSetDetail={onSetDetail} user={user} />} />
                        <Route path="/detail" element={<Detail detail={detail} user={user} />} />
                        <Route path="/chats" element={<Chats user={user} />} />
                        <Route path="/order" element={<Order user={user} />} />
                        <Route path="/enquiries" element={<UserEnquiries user={user} />} />
                        <Route path="/contract" element={<ClientContract user={user} />} />
                        <Route path="/seller" element={<Seller />} />
                        <Route path="/seller/login" element={<SellerLogin onSetSeller={onSetSeller} />} />
                        <Route path="/seller/signup" element={<SellerSignUp onSetSeller={onSetSeller} />} />
                        <Route path="/seller/profile" element={<Profile seller={seller} />} />
                        <Route path="/seller/enquiries" element={<Enquiries seller={seller} />} />
                        <Route path="/seller/chats" element={<SellerChats seller={seller} />} />
                        <Route path="/seller/contract" element={<Contract seller={seller} />} />
                        <Route path="/seller/orders" element={<Orders seller={seller} />} />
                        <Route path="/seller/detail" element={<DetailContract seller={seller} />} />
                        <Route path="/seller/add" element={<AddProducts seller={seller} />} />
                    </Routes>
                </BrowserRouter>


            </div>
        </div>
    )
}

export default App;