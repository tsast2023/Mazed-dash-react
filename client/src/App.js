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
import CatParentTab from './pages/catPartentTab'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EnchèreCreation from './pages/EnchèreCreation';
import Configuration from './pages/configuration';
import EnchereListe from './pages/EnchereListe';
import DetailEnchere from './pages/DetailEnchere';
import ModificationDetailsEnchere from './pages/ModificationDetailsEnchere';
import OffreEnchere from './pages/OffreEnchere';
import ConfigurationEnchere from './ConfigurationEnchere';
import ParticipantForm from './ParticipantForm';
import TableParticipant from './pages/TableParticipant';
import ParticipantDetail from './pages/ParticipantDetail';
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
              <Route path='/EnchèreCreation' element={<EnchèreCreation/>}/>
              <Route path='/EnchereListe' element={<EnchereListe/>}/>
              <Route path='/ModificationDetailsEnchere' element={<ModificationDetailsEnchere/>}/>
              <Route path='/DetailEnchere' element={<DetailEnchere/>}/>
              {/* <Route path='/catPartentTab' element={<catPartentTab/>}/> */}
              <Route path='/OffreEnchere' element={<OffreEnchere/>}/>
              <Route path='/ConfigurationEnchere' element={<ConfigurationEnchere/>}/>
              <Route path='/ParticipantDetail' element={<ParticipantDetail/>}/>
              <Route path='/ParticipantForm' element={<ParticipantForm/>}/>
              <Route path='/TableParticipant' element={<TableParticipant/>}/>
              <Route path='/configuration' element={<Configuration/>}/>
              <Route path='/CreationCat' element={<Categories />} />
              <Route path='/ListeCat' element={<ListeCategories />} />
              <Route path='/Réclamations' element={<Réclamations />} />
              <Route path='/Cartes' element={<Cartes />} />
              <Route path='/Tutoriel' element={<Tutoriel />} />
              <Route path='/Transferts' element={<Transferts />} />
              <Route path='/CreationProd' element={<Produits />} />
              <Route path='/CreationPart' element={<Participants />} />
              <Route path='/ProdListe' element={<ProduitsListe />} />
              <Route path="/catPartentTab" component={<CatParentTab />} />
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
