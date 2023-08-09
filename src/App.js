import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { LoginContextProvider } from './components/context/login-context';
import { ShopContextProvider } from './components/context/shop-context';
import LoginForm from './components/forms/LoginForm';
import RegisterForm from './components/forms/RegisterForm';
import SellProductForm from './components/forms/SellProductForm';
import Navbar from './components/navbar/Navbar';
import Buy from './components/qr/Buy';
import Sell from './components/qr/Sell';
import MyAds from './components/shop/MyAds';
import ProductPage from './components/shop/ProductPage';
import Shop from './components/shop/Shop';
import Home from './components/home/Home';
import Generate from './components/transaction/Generate';

function App() {
  return (
    <div>
      <LoginContextProvider>
        <ShopContextProvider>
          <Router basename="/">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="/signup" element={<RegisterForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/sell" element={<SellProductForm />} />
              <Route path="/generate/:id" element={<Generate />} />
              <Route path="/buy">
                <Route index element={<Shop />} />
                <Route path=":id" element={<ProductPage />} />
                <Route path=":id/buy/confirm/:id" element={<Buy />} />
              </Route>
              <Route path="/myads">
                <Route path=":id" element={<MyAds />} />
                <Route path=":id/confirm/:id" element={<Sell />} />
              </Route>
            </Routes>
          </Router>
        </ShopContextProvider>
      </LoginContextProvider>
    </div>
  );
}
export default App;
