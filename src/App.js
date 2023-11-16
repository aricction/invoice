import React from 'react';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './home/home';
import Checkout from './checkout/checkout';

function App() {
  return (

    <div>

      <BrowserRouter>
      <Routes>
       
        <Route index element={<Home />} >
        </Route>

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
