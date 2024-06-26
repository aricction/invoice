import React, { useEffect, useState } from "react";
import nike from '../component/images/nike.jpg';
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Orderplaced from "../orderplaced/orderplaced";

const Checkout = () => {
  const [name, setName] = useState('');
  const [email, setEmail ] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg ,setSuccessMsg] = useState('');
  const navigate = useNavigate(); 

  const productImg = nike;
  const productName = "Nike Air MX Super 2500 - Super Light" ;
  const productPrice = 499;
  const shippingCost =8;
  const totalPrice= productPrice + shippingCost;

  const handleSubmit = (e) =>{
   e.preventDefault();
   setErrorMsg('')
   setSuccessMsg('')



   if(name ===''){
    setErrorMsg('name is required');
    return;
   } else if(email === ''){
    setErrorMsg('email is required');
   } else if( number === ''){
    setErrorMsg('number is required');
   } else if(address === ''){
    setErrorMsg('address is required');
   }
   
   else{
       setSuccessMsg('order placed');
   setName('')    
   setEmail('')
   setNumber('')
   setAddress('');
   setTimeout(() => {
    navigate('../orderplaced',  {
      state: { name, email, number, address ,productName, productImg, productPrice, shippingCost }
    });
   }, 1000);
   }
 
 
  };

  return (
    <div className="bg-ceramic-100 grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
      <div className="px-4 pt-8">
        <p className="text-xl font-medium">Order summary</p>
        <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
          <div className="flex flex-col rounded-lg bg-white sm:flex-row">
            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={nike} alt="Shoes" />
            <div className="flex w-full flex-col px-4 py-4">
              <span className="font-semibold">{productName}</span>
              <span className="float-right text-gray-400">42EU - 8.5US</span>
              <p className="text-lg font-bold">₹{productPrice}</p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-lg font-medium">Payment Methods</p>
        <div className="mt-5 grid gap-6 ">
          <div className="relative ">
            <input className="peer hidden" type="radio" checked />
            <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
            <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_1">
              <div className="ml-5">
                <span className="mt-2 font-semibold">Home Delivery</span>
                <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-ceramic-200 px-4 pt-8 lg:mt-0">
        <form  onSubmit={handleSubmit} >
        <p className="text-xl font-medium">Payment Details</p>
        <div>
          <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
          <div className="relative">
            <input type="text" value={email} id="email" name="email" onChange={(e)=> setEmail(e.target.value)}
             className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
          
          </div>
          <label htmlFor="Name" className="mt-4 mb-2 block text-sm font-medium">Name</label>
          <div className="relative">
            <input type="text" value={name} id='name' name='name' onChange={(e) => setName(e.target.value )}
            className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Full name" />
          </div>
          <label className="mt-4 mb-2 block text-sm font-medium">Phone no</label>
          <div className="relative">
            <input type="number" value={number} id='number' name='number' onChange={(e) =>setNumber(e.target.value)}
            className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" 
            placeholder="number" />
            
          </div>
          <label className="mt-4 mb-2 block text-sm font-medium">Address</label>
          <div className="relative">
            <input type="text" value={address} id='address' name='address' onChange={(e) =>setAddress(e.target.value)}
            className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div className="mt-6 border-t border-b py-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Subtotal</p>
              <p className="font-semibold text-gray-900">₹{productPrice}.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Shipping</p>
              <p className="font-semibold text-gray-900">₹{shippingCost}.00</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Total</p>
            <p className="text-2xl font-semibold text-gray-900">₹{totalPrice}.00</p>
          </div>
         
         <div className="form-control">      
          <button type="submit" 
          className="btn btn-active mt-4 mb-8 w-full rounded-md bg-ceramic-400 px-6 py-3 font-medium text-white"> Place order
           </button>
           </div>

        </div>
        {errorMsg &&< p className="text-red-600">{errorMsg}</p>}
        {successMsg && <p className="text-green-600">{successMsg}</p>}
        </form>
      </div>
    </div>
  );
};

export default Checkout;
