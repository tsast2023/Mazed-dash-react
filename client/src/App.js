import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Categories from './pages/catCreate';
import ListeCategories from './pages/catList'
import Login from './pages/Login';
import Réclamations from './pages/reclamation';
import Cartes from './pages/recharges';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DataProvider } from './GlobalState';
import DataTable from './pages/catPartentTab';

const App = () => {
  const [token, setToken] = useState(null);



  return (
    <DataProvider>
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
              <Route path='/ListeCat' element={<ListeCategories />} />
              <Route path='/Réclamations' element={<Réclamations />} />
              <Route path='/Cartes' element={<Cartes />} />
              <Route path='/catdetail' element={<DataTable/>}/>
            </Routes>
          </div>
        )}
        </div>
        {token && <Login setToken={setToken} />}
      
    </Router>
    </DataProvider>
  );
};

export default App;
