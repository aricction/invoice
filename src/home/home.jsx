import React, { Component } from "react";
import nike from '../component/images/nike.jpg';
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="flex items-center justify-center h-screen ">
        <div className="card w-96 h-100 bg-ceramic-100 shadow-xl pb-4 flex-col overflow-hidden rounded-lg border">
          <figure>
            <img src={nike} alt="Shoes" className="w-full h-96 object-cover" />
          </figure>
          <div class="mt-4 px-5 pb-5">
          
          <h5 class="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
          <div class="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span class="text-3xl font-bold text-slate-900">$449</span>
        <span class="text-sm text-slate-900 line-through">$699</span>
      </p>
    </div>
            <div className="card-actions flex justify-center mt-4">
                <Link to= "/Checkout">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
