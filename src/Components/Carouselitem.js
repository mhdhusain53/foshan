import React from "react";

export default (props)=>{
     return(
          <div className="text-center bg-gray-100 hover:shadow-xl m-3 py-3 shadow">
               <img className="md:w-40 md:h-40 w-32 h-32 mx-auto" src={props.src}></img>
               <p className="text-lg font-normal mt-3">{props.name}</p>
          </div>
     )
}