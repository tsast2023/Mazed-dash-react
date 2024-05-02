import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Categories from './pages/catCreate';
import ListeCategories from './pages/catList'
import Login from './pages/Login';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'

const App = () => {
  const [token, setToken] = useState(null);



  return (
    <Router>
    <div className='app-container'>
      <div className='sidebar-container'>
        <Sidebar />
      </div>
      <div className='content-container'>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  </Router>
)
}

export default App;
