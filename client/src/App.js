import React from 'react';
import Sidebar from './components/sidebar';
import './App.css'
import Navbar from './components/navbar';
import Home from './pages/Home';
import Categories from './pages/catCreate'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'

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
          <Route path="/" element={<Home />} />
          <Route path='/CreationCat' element={<Categories />} />
        </Routes>
      </div>
    </div>
  </Router>
)
}

export default App

