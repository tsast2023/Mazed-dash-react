import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Categories from './pages/catCreate';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [token, setToken] = useState(null);



  return (
    <Router>
      <div className='app-container'>
        {!token && (
          <div className='sidebar-container'>
            <Sidebar />
          </div>
        )}
        {!token && (
          <div className='content-container'>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/CreationCat' element={<Categories />} />
            </Routes>
          </div>
        )}
        </div>
        {token && <Login setToken={setToken} />}
      
    </Router>
  );
};

export default App;
