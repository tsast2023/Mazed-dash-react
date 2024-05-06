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
import Tutoriel from './pages/tutoriel';
import Transferts from './pages/transfer';
import Produits from './pages/prodCreate';
import Participants from './pages/partCreate';
import ProduitsListe from './pages/prodList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DataProvider } from './GlobalState';
import DataTable from './pages/catPartentTab';
import DataTable2 from './pages/catFilleTab';
import CatEdit from './pages/catEdit';
import ParticipantsListe from './pages/partList';
import ParticipantDetail from './pages/partDetail';


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
              <Route path='/Tutoriel' element={<Tutoriel />} />
              <Route path='/Transferts' element={<Transferts />} />
              <Route path='/CreationProd' element={<Produits />} />
              <Route path='/CreationPart' element={<Participants />} />
              <Route path='/ProdListe' element={<ProduitsListe />} />
              <Route path='/catdetail/:id' element={<DataTable/>}/>
              <Route path='/catdetail' element={<DataTable/>}/>
              <Route path='/catmodif' element={<CatEdit/>}/>
              <Route path='/PartListe' element={<ParticipantsListe/>}/>
              <Route path='/partdetail' element={<ParticipantDetail/>}/>
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
