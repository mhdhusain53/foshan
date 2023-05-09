import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomeCard from "./HomeCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carouselitem from "./Carouselitem";

const Home = (props) => {
     const responsive = {
          superLargeDesktop: {
               // the naming can be any, depends on you.
               breakpoint: { max: 4000, min: 3000 },
               items: 5
          },
          desktop: {
               breakpoint: { max: 3000, min: 1024 },
               items: 5
          },
          tablet: {
               breakpoint: { max: 1024, min: 464 },
               items: 3
          },
          mobile: {
               breakpoint: { max: 464, min: 0 },
               items: 2
          }
     };
     return (
          <div className="text-3xl ">
               <Navbar login={props.login} logout={props.logout} />
               <div className="bg-gray-300 flex w-100 h-96">
                    <button className="text-green-500 px-8 py-2 text-2xl m-auto border-2 bg-white border-green-500 hover:bg-green-500 hover:text-white rounded-xl hover:shadow-xle">Contact Seller</button>
               </div>

               <Carousel className=" mx-8 py-8 md:mx-24"
                    responsive={responsive}
                    showDots={true}
                    swipeable={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}>
                         <Carouselitem src="images/carbon1.png" name="Carbon" />
                         <Carouselitem src="images/iron2.png" name="Steel" />
                         <Carouselitem src="images/silicon1.png" name="Silicon" />
                         <Carouselitem src="images/zinc1.png" name="Zinc" />
                         <Carouselitem src="images/iron1.png" name="Iron" />
                         <Carouselitem src="images/zinc2.png" name="Aluminium" />
                         <Carouselitem src="images/silicon2.png" name="Silicon" />
                         <Carouselitem src="images/zinc3.png" name="Copper" />

               </Carousel>

               <div className="mt-32">
                    <h2 className="text-center text-4xl">Our Category</h2>
               </div>

               

               <div className="m-8 mx-16 grid grid-cols-3 gap-10">
                    <div className="  border border-black p-4 hover:shadow-xl">
                         <h1 className="text-center mb-8 text-3xl">Top picks of Silicon</h1>
                         <div className="align-items-center grid grid-cols-2 mx-auto ">
                              <img alt="silicon" className="w-40 pr-2 inline-block" src="images/silicon1.png" />
                              <img alt="silicon" className="w-40 pl-2 inline-block" src="images/silicon2.png" />
                              <img alt="silicon" className="w-40 pr-2 inline-block" src="images/silicon3.png" />
                              <img alt="silicon" className="w-40 pl-2 inline-block" src="images/silicon4.png" />
                         </div>
                    </div>

                    <div className="  border border-black p-4 hover:shadow-xl">
                         <h1 className="text-center mb-8">Top picks of Silicon</h1>
                         <div className="align-items-center grid grid-cols-2 mx-auto ">
                              <img alt="zinc" className="w-40 pr-2 inline-block" src="images/zinc1.png" />
                              <img alt="zinc" className="w-40 pl-2 inline-block" src="images/zinc2.png" />
                              <img alt="zinc" className="w-40 pr-2 inline-block" src="images/zinc3.png" />
                              <img alt="zinc" className="w-40 pl-2 inline-block" src="images/zinc4.png" />
                         </div>
                    </div>

                    <div className="  border border-black p-4 hover:shadow-xl">
                         <h1 className="text-center mb-8">Top picks of Silicon</h1>
                         <div className="align-items-center grid grid-cols-2 mx-auto ">
                              <img alt="carbon" className="w-40 pr-2 inline-block" src="images/carbon1.png" />
                              <img alt="carbon" className="w-40 pl-2 inline-block" src="images/carbon2.png" />
                              <img alt="carbon" className="w-40 pr-2 inline-block" src="images/carbon3.png" />
                              <img alt="carbon" className="w-40 pl-2 inline-block" src="images/carbon4.png" />
                         </div>
                    </div>
               </div>

               <div className="mt-24 mx-6 md:mx-16 ">
                    <h1 className="text-4xl text-center mb-8">Best of Iron</h1>
                    <a href="./login">
                         <div className="grid py-8 md:px-8 px-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-center center-align-center justify-center gap-5">
                              <HomeCard />
                              <HomeCard />
                              <HomeCard />
                              <HomeCard />
                              <HomeCard />
                              <a className="text-2xl text-gray-400 hover:text-gray-500 hover:font-medium text-center mt-24 lg:mt-0">View All</a>
                         </div>
                    </a>

               </div>

               <div className="mt-24 mx-6 md:mx-16 ">
                    <h1 className="text-4xl text-center mb-8">Best of Steel</h1>
                    <a href="./login">
                         <div className="grid py-8 md:px-8 px-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-center center-align-center justify-center gap-8">
                              <HomeCard />
                              <HomeCard />
                              <HomeCard />
                              <HomeCard />
                              <HomeCard />
                              <a className="text-2xl text-gray-400 text-center hover:text-gray-500 hover:font-medium mt-24 lg:mt-0">View All</a>
                         </div>
                    </a>
               </div>

               <div className="my-24 mx-6 md:mx-16 ">
                    <h1 className="text-4xl text-center mb-8">Best of Copper</h1>
                    <a href="./login">
                         <div className="grid py-8 md:px-8 px-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-center center-align-center justify-center gap-8">
                              <HomeCard />
                              <HomeCard />
                              <HomeCard />
                              <HomeCard />
                              <HomeCard />
                              <a className="text-2xl text-gray-400 text-center hover:text-gray-500 hover:font-medium mt-24 lg:mt-0">View All</a>
                         </div>
                    </a>
               </div>

               <Footer />
          </div>
     )
}

export default Home;