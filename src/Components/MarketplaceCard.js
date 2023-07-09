import React from "react";
import { Link } from "react-router-dom";


export default (props) => {
     console.log(props.allData);
     return (
          <div className="bg-gray-100 inline-block shadow hover:shadow-2xl">
               <img src="images/iron1.png" className="w-2/3 m-auto mb-4 " />
               <p className="font-light text-base">{props.allData.name}</p>
               <p className="text-lg font-medium my-2">₹{props.allData.price}/ KG</p>
               <p className="text-base">{props.allData.sellerName}</p>
               <p className="font-thin text-sm">{props.allData.address}</p>
               <button onClick={()=>props.onSetDetail(props.allData)}>
                    <Link to="../detail" className="block text-green-500 text-xl border border-green-500 hover:bg-green-500 hover:text-white mt-4 mb-4 rounded px-4 py-1">Contact Seller</Link>
               </button>
          </div>
     )
}