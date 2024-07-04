import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DarkMode from "../component/darkmode";
import Navbar from "../component/navbar";

 const products = [
  
    {
       "name":"Nike Air MX Super 2500 - Red",
       "price":"499",
       "oprice":"699",
       image: require('../component/images/nike.jpg'),
    },
    {
       "name":"Nike SuperRep Go - Neon Green",
       "price":"399",
       "oprice":"499",
       image:require('../component/images/nike2.jpg'),
    },
    { 
      "name":"Nike Jordan 1 Low Alt ",
      "price":"3095",
      "oprice":"5095",
      image: require('../component/images/nike3.png'),

    }
       
 ]
const Home = () => {
   
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if(isDark){
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

  },[isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };
  return (
    <>
     <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
    <div className="flex items-center justify-center h-screen p-4 bg-white dark:bg-dark-300">
         
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (

     
      <div key={index} className="card w-96 h-100 bg-ceramic-100 dark:bg-dark-100 shadow-xl pb-4 flex-col overflow-hidden rounded-lg border">
        <figure>
          <img src={product.image} alt="Shoes" className="w-full h-96 object-cover" />
        </figure>
        <div className="mt-4 px-5 pb-5">
          <h5 className="text-xl tracking-tight text-slate-900 dark:text-white">{product.name}</h5>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900 dark:text-white">${product.price}</span>
              <span className="text-sm text-slate-900 line-through">${product.oprice}</span>
            </p>
          </div>
          <div className="card-actions flex justify-center mt-4">
          <Link 
          to="/Checkout"
           state= {product}>
              <button type="submit" className="w-full  bg-ceramic-500 hover:bg-ceramic-900 dark:bg-dark-300 dark:hover:bg-dark-200  text-white font-bold py-2 px-4 rounded">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
       ))}
      </div>
    
    </div>
    </>
  );
};

export default Home;
