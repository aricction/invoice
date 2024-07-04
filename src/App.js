import React from 'react';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './home/home';
import Checkout from './checkout/checkout';
import Orderplaced from './orderplaced/orderplaced';

function App() {
  return (

    <div>
     
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} >
      </Route>

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderplaced" element={<Orderplaced/> } />
      </Routes>
     
      
      </BrowserRouter>
    </div>
  
  );
}

export default App;
