import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { LoginContextProvider } from './components/context/login-context';
import { ShopContextProvider } from './components/context/shop-context';
import LoginForm from './components/forms/LoginForm';
import RegisterForm from './components/forms/RegisterForm';
import Navbar from './components/navbar/Navbar';
import Buy from './components/qr/Buy';
import Sell from './components/qr/Sell';
import ProductPage from './components/shop/ProductPage';
import Shop from './components/shop/Shop';
import MyAds from './components/shop/MyAds';
import SellProductForm from './components/forms/SellProductForm';

function App() {
  return (
    <div>
      <LoginContextProvider>
        <ShopContextProvider>
          <Router basename="/">
            <Navbar />
            <Routes>
              <Route exact path="/" />
              <Route path="/About" />
              <Route path="/sell" element={<SellProductForm />} />
              <Route path="/buy" element={<Shop />} />
              <Route path="/buy/:id" element={<ProductPage />} />
              <Route path="/confirm/:id" element={<Buy />} />
              <Route path="/sell/:id" element={<Sell />} />
              <Route path="/myads/:id" element={<MyAds />} />
              <Route path="/signup" element={<RegisterForm />} />
              <Route path="/login" element={<LoginForm />} />
            </Routes>
          </Router>
        </ShopContextProvider>
      </LoginContextProvider>
    </div>
  );
}
export default App;
