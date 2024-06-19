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
import EnchèreCreation from './pages/EnchèreCreation';
import Configuration from './pages/configuration';
import EnchereListe from './pages/EnchereListe';
import DetailEnchere from './pages/DetailEnchere';
import ModificationDetailsEnchere from './pages/ModificationDetailsEnchere';
import OffreEnchere from './pages/OffreEnchere';
import ConfigurationEnchere from './pages/ConfigurationEnchere';
import ParticipantForm from './ParticipantForm';
import CreationRole from './pages/CreationRole';
// import TableParticipant from './pages/TableParticipant';
import { DataProvider } from './GlobalState';
import DataTable from './pages/catPartentTab';
import DataTable2 from './pages/catFilleTab';
import CatEdit from './pages/catEdit';
import ParticipantsListe from './pages/partList';
import ParticipantDetail from './pages/partDetail';
import VendeurForm from './pages/VendeurForm';
import TableVendeurs from './pages/TableVendeurs';
import VendeurDetails from './pages/VendeurDetails';
import UtilisateurForm from './pages/UtilisateurForm';
import TableUtilisateur from './pages/TableUtilisateur';
import UtilisateurEdit from './pages/UtilisateurEdit';
import UtilisateurDetails from './pages/UtilisateurDetails';
import QuestionForm from './pages/QuestionForm';
import QuestionList from './pages/QuestionList';
import QuestionDetail from './pages/QuestionDetail';
import QuestionEdit from './pages/QuestionEdit';
import TermsForm from './pages/TermsForm';
import TermesList from './pages/TermesList';
import TermsAcheteur from './pages/TermsAcheteur';
import ProductDetail from './pages/prodDétail';
import ProductEditForm from './pages/prodEdit';
// import ParticipantDetail from './pages/ParticipantDetail'
import AnnonceCreator from './pages/adsCreate';
import AnnonceList from './pages/adsList';
import Commandes from './pages/commandes';
import ListeAdministrateur from './pages/ListeAdministrateur';
import CreationAdministrateur from './pages/CreationAdministrateur';
import Messagerie from './pages/Messagerie';
import Profile from './pages/Profile';
import ProdAction from './pages/ProdAction';
import TermeEdit from './pages/TermeEdit';
import './i18n';

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
              <Route path='/VendeurForm' element={<VendeurForm/>}/>
              <Route path='/VendeurDetails' element={<VendeurDetails/>}/>
              <Route path='/UtilisateurForm' element={<UtilisateurForm/>}/>
              <Route path='/TableUtilisateur' element={<TableUtilisateur/>}/>
              <Route path='/UtilisateurEdit' element={<UtilisateurEdit/>}/>
              <Route path='/UtilisateurDetails' element={<UtilisateurDetails/>}/>
              <Route path='/QuestionForm' element={<QuestionForm/>}/>
              <Route path='/QuestionList' element={<QuestionList/>}/>
              <Route path='/QuestionDetail' element={<QuestionDetail/>}/>
              <Route path='/QuestionEdit' element={<QuestionEdit/>}/>
              <Route path='/TermsForm' element={<TermsForm/>}/>
              <Route path='/TermesList' element={<TermesList/>}/>
              <Route path='/TermsAcheteur' element={<TermsAcheteur/>}/>
              <Route path='/OffreEnchere' element={<OffreEnchere/>}/>
              <Route path='/ConfigurationEnchere' element={<ConfigurationEnchere/>}/>
              <Route path='/CreationRole' element={<CreationRole/>}/>
              <Route path='/ListeAdministrateur' element={<ListeAdministrateur/>}/>
              <Route path='/CreationAdministrateur' element={<CreationAdministrateur/>}/>
              <Route path='/TableVendeurs' element={<TableVendeurs/>}/>
              {/* <Route path='/ParticipantDetail' element={<ParticipantDetail/>}/> */}

              <Route path='/ParticipantForm' element={<ParticipantForm/>}/>
              {/* <Route path='/TableParticipant' element={<TableParticipant/>}/> */}
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
              <Route path='/catdetail/:id' element={<DataTable/>}/>
              <Route path='/catmodif' element={<CatEdit/>}/>
              <Route path='/PartListe' element={<ParticipantsListe/>}/>
              <Route path='/partdetail' element={<ParticipantDetail/>}/>
              <Route path='/prodDétail' element={<ProductDetail/>} />
              <Route path='/prodEdit' element={<ProductEditForm/>} />
              <Route path='/CreationAd' element={<AnnonceCreator/>} />
              <Route path='/ListeAds' element={<AnnonceList />} />
              <Route path='/Commandes' element={<Commandes />} />
              <Route path='/Messagerie' element={<Messagerie />} />
              <Route path='/Profile' element={<Profile />} />
              <Route path='/ProdAction' element={<ProdAction />} />
              <Route path='/TermeEdit' element={<TermeEdit />} />
            </Routes>
          </div>
        )}
        </div>
        {!token && <Login setToken={setToken} />}
      </Router>
    </DataProvider>
  );
};

export default App;
