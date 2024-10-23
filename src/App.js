import React from "react";
// import "./App.css";
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Checkout from "./pages/Checkout.js";
import Pokemon from "./pages/Pokemon.js";
import ThankYou from "./pages/ThankYou.js";
import AuthForm from "./pages/AuthForm.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext.js";
import { SearchProvider } from "./context/SearchContext";
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SearchProvider>
          <CartProvider>
            <div className="App">
                <Header />
                <Routes>
                  <Route path="/authform" element={<AuthForm/>}/>
                  <Route path="/pokemon" element={<Pokemon/>}/>
                  <Route path="/thankyou" element={<ThankYou/>} />
                  <Route path="/checkout" element={<Checkout/>} />
                  <Route path="/" element={<Home />} />
                </Routes>
            </div> 
          </CartProvider>
        </SearchProvider> 
      </AuthProvider>   
    </BrowserRouter>
  );
}

export default App;
