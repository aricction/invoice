import React, { useState, useEffect } from "react";
import a1 from '../component/images/a1.gif';
import {jsPDF} from 'jspdf';
import "jspdf-autotable";
import { useLocation } from "react-router-dom";

const Orderplaced = () => {
  const [showSummary, setShowSummary] = useState(false);
  const location = useLocation();
  const { name, address, email , number , productName, image, productPrice, shippingCost } = location.state || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSummary(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const generatePDF = () => {
    const totalPrice = parseFloat(productPrice) + shippingCost; 

    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text("INVOICE ", 120,20);
   

    doc.setFontSize(12);
    doc.text(`Order Id: #0000`, 10, 40);
    doc.text(`Order Date: 26/06/2024`, 10, 50);

    doc.text(`${name}`, 125, 40);
    doc.text(`${email}`, 125, 50);
    doc.text(`${address}`, 125, 60);
   
    doc.autoTable({
        startY: 70,
        head: [['Product Name', 'Price', 'Shipping' , 'Total']],
        body:[
            [productName, `${productPrice}`, `${shippingCost}`, `${productPrice + shippingCost}`],
        ],
    });

    const pageHeight = doc.internal.pageSize.height;
    doc.setFontSize(16);
    doc.text("Thank you for your purchase!", 10, pageHeight - 20);
    
    doc.save("order-summary.pdf");
  }

  return (
    <div className="bg-ceramic-400 ">
      {!showSummary ? (
         <div className="flex items-center justify-center h-screen">     
         <div className="card w-1/2 h-1/2 rounded bg-ceramic-300 shadow-xl p-4 flex flex-col items-center justify-center overflow-hidden ">
             <figure className=" h-3/4">
                 <img src={a1} alt="order placed" className="w-full h-full object-cover" />
             </figure>
             <span className="mt-4 text-2xl">Order placed successfully</span>
         </div>
     </div>
      ) : (
        <div className="w-full h-screen px-4 pt-8">
          <div className="flex justify-between items-center">
            <div className="mt-4">
              <p className="text-sm font-medium text-white">Order ID: #0000</p>
              <p className="text-sm font-medium text-white">Order Date: 26/06/2024</p>
            </div>
            <div className="mt-4 text-right">
              <p className="text-xl font-medium font-bold">Deliver to</p>
              <p className="text-md font-medium text-white">{name}</p>
              <p className="text-sm font-medium text-white">{number}</p>
           
              <p className="text-sm font-medium text-white">{address}</p>
            </div>
          </div>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            <div className="flex flex-col rounded-lg bg-white sm:flex-row">
              <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={image} alt="Product" />
              <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold">{productName}</span>
                <span className="float-right text-gray-400">42EU - 8.5US</span>
                <p className="text-lg font-bold">₹{productPrice}</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end items-center">
            <div className="text-right">
              <span className="block text-sm font-medium  mt-5">Shipping: ₹{shippingCost}</span>
              <span className="block text-xl font-medium font-bold">Total: ₹{(parseFloat(productPrice) + shippingCost).toFixed(2)}</span>
            </div>
          </div>
          <button
          className="mt-4 mb-8 w-full rounded-md bg-ceramic-400 px-6 py-3 font-medium"
          onClick={generatePDF}
          >
          download PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default Orderplaced;
