// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Tentang from './components/Tentang';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Checkout from './components/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Welcome from './pages/Welcome';

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
