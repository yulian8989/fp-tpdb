// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Tentang from './components/Tentang';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Checkout from './components/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <GoogleOAuthProvider clientId={`690282842723-o2k1n6fj9vjvuspa0jgecs6a0sla90h3.apps.googleusercontent.com`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
