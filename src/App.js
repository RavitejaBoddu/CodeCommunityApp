import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Account from './components/Account/Account';
import { AuthContextProvider } from './context/AuthContext';
import Login from './components/Login/Login';
import SignUp from './components/register/SignUp';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/account' element={
      <ProtectedRoute><Account /></ProtectedRoute>
      } />
    </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
