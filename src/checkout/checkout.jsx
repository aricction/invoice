import React, { Component } from "react";
import nike from '../component/images/nike.jpg';
import { InputGroup } from "react-bootstrap";

class Checkout extends Component {
  render() {
    return (
      <div class="bg-ceramic-100 grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order summary</p>
          <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            <div class="flex flex-col rounded-lg bg-white sm:flex-row">
              <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={nike} alt="Shoes" />
              <div class="flex w-full flex-col px-4 py-4">
                <span class="font-semibold">Nike Air MX Super 2500 - Super Light</span>
                <span class="float-right text-gray-400">42EU - 8.5US</span>
                <p class="text-lg font-bold">$499</p>
              </div>
            </div>
          </div>


          
        <p class="mt-8 text-lg font-medium">Payment Methods</p>
        <form className="mt-5 grid gap-6 ">
            <div className="relative ">
                <input className="peer hidden" type="radio" checked />
                <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
                <div class="ml-5">
            <span class="mt-2 font-semibold">Home Delivery</span>
            <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          
          </div>
          </label>
            </div>
            

        </form>
        </div>




    <div class="mt-10 bg-ceramic-50 px-4 pt-8 lg:mt-0">
          <p class="text-xl font-medium">Payment Details</p>
          <div>
          <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
          <div className="relative">
          <input type="text" id="email" name="email" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
          </div>
          <label for = "Name" className="mt-4 mb-2 block text-sm font-medium">Name</label>
          <div className="relative">
            <input type="text" id='name' className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Full name"/>
          </div>
          <label className="mt-4 mb-2 block text-sm font-medium">Phone no</label>
          <div className="relative">
          <input type="number" className="w-sm rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="number"/>
          </div>
          <label className="mt-4 mb-2 block text-sm font-medium">Address</label>
          <div className="relative">
            <input type="text" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"/>
          </div>
          <div class="mt-6 border-t border-b py-2">
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Subtotal</p>
          <p class="font-semibold text-gray-900">$499.00</p>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Shipping</p>
          <p class="font-semibold text-gray-900">$8.00</p>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-between">
        <p class="text-sm font-medium text-gray-900">Total</p>
        <p class="text-2xl font-semibold text-gray-900">$508.00</p>
      </div>
          <button type="submit"  className="btn btn-active mt-4 mb-8 w-full rounded-md bg-ceramic-400 px-6 py-3 font-medium text-white"> Place order </button>

          </div>
        </div>
       
       
      
       

        
      </div>
    );
  }
}

export default Checkout;
