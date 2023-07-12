import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MarketplaceCard from "./MarketplaceCard";
import Filter from "./Filter";
import { ref, get, getDatabase, child } from "firebase/database";


const Marketplace = (props) => {
     const [filter, setFilter] = useState([])
     const [searchValue, setSearchValue] = useState('');
     const [datas, setDatas] = useState([])
     useEffect(() => {
          const dbRef = ref(getDatabase());
          var userId = 53;
          get(child(dbRef, `products/`)).then((res) => {
               if (res.exists()) {
                    setDatas(res.val());
                    console.log(datas);

               }
          }).catch((error) => {
               console.error(error);
          });
     }, []);

     const forDetail=(e) => {
          props.onSetDetail(e);
     }

     const handleKeyPress = (event) => {
          if (event.key === 'Enter') {
               setFilter([...filter, { name: searchValue }])
               setSearchValue("")
          }
     };


     const Category = [
          { name: "High Speed Steel" },
          { name: "Cold Rolled Steel" },
          { name: "Die Steels" },
          { name: "Galvanized Steel" },
          { name: "Plastic Mould Steel" },
          { name: "Surgical Steel" },
          { name: "Prepainted Steel" },
          { name: "Tor Steel" },
     ]
     const Grade = [
          { name: "304" },
          { name: "302" },
          { name: "316" },
          { name: "204 Cu" },
          { name: "409L" },
          { name: "430" },
          { name: "Duplex 32205" },
          { name: "Duplex 32750" },
     ]
     const Usage = [
          { name: "Construction" },
          { name: "Automobile Industry" },
          { name: "Pharmaceutical / Chemical Industry" },
     ]
     return (
          <div>
               <Navbar user={props.user} />
               <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
                    <div className="p-2 md:p-4 bg-blue-500">
                         <div>
                              <h1 className="text-yellow-400 font-semibold text-3xl mb-4">Related Category</h1>

                              {Category.map((category, i) => {
                                   const { name } = category
                                   return (
                                        <div key={i} className="my-2">
                                             <input type="checkbox" checked={filter.find(e => e.name === name)} onChange={(e) => e.target.checked ? setFilter([...filter, category]) : setFilter((prevFilter) => {
                                                  let newFilter = prevFilter.filter((prev) => prev.name !== name);
                                                  return newFilter
                                             })} className="m-2 focus:ring-blue-500 w-4 h-4" id={name} label={name} placeholder={name} />
                                             <label htmlFor={name} className="m-2 text-xl text-white">{name}</label>
                                        </div>
                                   )
                              })
                              }
                         </div>
                         <div className="my-12">
                              <h1 className="text-yellow-400 font-semibold text-3xl mb-4">Material Grade</h1>
                              {Grade.map((grade, i) => {
                                   const { name } = grade
                                   return (
                                        <div key={i} className="my-2">
                                             <input type="checkbox" checked={filter.find(e => e.name === name)} onChange={(e) => e.target.checked ? setFilter([...filter, grade]) : setFilter((prevFilter) => {
                                                  let newFilter = prevFilter.filter((prev) => prev.name !== name);
                                                  return newFilter
                                             })} className="m-2 focus:ring-blue-500 w-4 h-4" id={name} />
                                             <label htmlFor={name} className="m-2 text-xl text-white">{name}</label>
                                        </div>
                                   )
                              })
                              }
                         </div>
                         <div>
                              <h1 className="text-yellow-400 font-semibold text-3xl mb-4">Usage</h1>
                              {Usage.map((usage, i) => {
                                   const { name } = usage
                                   return (
                                        <div key={i} className="my-2">
                                             <input type="checkbox" checked={filter.find(e => e.name === name)} onChange={(e) => e.target.checked ? setFilter([...filter, usage]) : setFilter((prevFilter) => {
                                                  let newFilter = prevFilter.filter((prev) => prev.name !== name);
                                                  return newFilter
                                             })} className="m-2 focus:ring-blue-500 w-4 h-4" id={name} />
                                             <label htmlFor={name} className="m-2 text-xl text-white">{name}</label>
                                        </div>
                                   )
                              })
                              }
                         </div>
                    </div>
                    <div className="lg:col-span-3 md:col-span-2 ">
                         <div className="my-6">
                              <p className="inline-block bg-blue-200 border border-gray-500 text-center text-lg ml-6 py-2 px-10">
                                   Location
                              </p>
                              <div className="inline-block border border-gray-500">
                                   <input className="inline-block text-gray-600 text-lg py-2 px-10"
                                        value={searchValue}
                                        onChange={(e) => setSearchValue(e.target.value.toUpperCase())}
                                        onKeyUp={handleKeyPress}
                                        placeholder="Enter City"></input>
                                   <button type="button" onClick={() => {
                                        setFilter([...filter, { name: searchValue }])
                                        setSearchValue("")
                                   }}>

                                        <svg className="w-7 h-7 text-gray-500 mr-2 inline-block" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                   </button>

                              </div>

                         </div>
                         <div className="my-2 ml-4 d-flex">
                              {filter.map((fil, i) => {
                                   return (
                                        <Filter key={i} filter={fil} setFilter={setFilter} />
                                   )
                              })
                              }
                         </div>

                         <div className="grid grid-cols-3 p-2 md:p-6 gap-7 text-center">
                              {datas.map((data, i) => {

                                   var check = true;
                                   for (var j = 0; j < filter.length; j++) {
                                        if (!((filter[j].name === data.city) || (filter[j].name === data.usage) || (filter[j].name === data.grade) || (filter[j].name === data.category))) {
                                             check = false;
                                             break;
                                        }
                                   }
                                   console.log(check);
                                   if (check) {
                                        return (
                                             <div key={i} >
                                                  <MarketplaceCard
                                                       allData={data}
                                                       onSetDetail={(e)=>forDetail(e)}

                                                  />
                                             </div>
                                        )
                                   }


                              })
                              
                              }
                             
                         </div>
                    </div>

               </div>

               <Footer />
          </div>
     )
}

export default Marketplace