import React from 'react';
import Sidebar from './components/sidebar';
import './App.css'
import Navbar from './components/navbar';
import Login from './pages/Login';


const App = () => {
  return (
    <>
    <Sidebar />
    <Navbar />
    <Login/>
    </>
)
}

export default App

