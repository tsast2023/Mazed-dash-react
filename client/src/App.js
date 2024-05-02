import React from 'react';
import Sidebar from './components/sidebar';
import './App.css'
import Navbar from './components/navbar';
import Login from './pages/Login';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import EnchèreCreation from './pages/EnchèreCreation';

const App = () => {
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
          <Route path='/EnchèreCreation' element={<EnchèreCreation/>}/>
        </Routes>
      </div>
    </div>
  </Router>
)
}

export default App

