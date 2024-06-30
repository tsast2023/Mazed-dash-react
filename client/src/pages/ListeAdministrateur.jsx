import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { GlobalState } from "../GlobalState";
import { Modal, Button } from "react-bootstrap"; // Import Bootstrap components

function ListeAdministrateur() {
  const state = useContext(GlobalState);
  const admins = state.Admins;
  const roles = state.Roles;
  const [data,setData] = useState({prenom:"" , numTel:"" , email:"" , identifiant:"" , roleName:(roles && roles[0].name) || "" , password:""});
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleBlock = () => {
    Swal.fire({
      title: t("Êtes-vous sûr?"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: t("Oui"),
      cancelButtonText: t("Non, annuler!"),
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(t("Fait"));
      } else {
        Swal.fire(t("Annulé"), t("Votre élément est en sécurité :)"), "error");
      }
    });
  };

  const handleUnblock = () => {
    Swal.fire({
      title: t("Êtes-vous sûr?"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: t("Oui"),
      cancelButtonText: t("Non, annuler!"),
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(t("Fait"));
      } else {
        Swal.fire(t("Annulé"), t("Votre élément est en sécurité :)"), "error");
      }
    });
  };

  const handleModifier = () => {
    // Logic to handle opening the modal
    setShowModal(true);
  };

  const handleCloseModal = () => {
    // Logic to handle closing the modal
    setShowModal(false);
  };

  return (
    <div className="content-container">
      <div id="app">
        <div id="main">
          <header className="mb-3">
            <a href="#" className="burger-btn d-block d-xl-none">
              <i className="bi bi-justify fs-3" />
            </a>
          </header>
          <section className="section">
            <div className="card">
              <div className="card-header">
                <h2 className="new-price">{t("Liste des administrateurs")}</h2>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table" id="table1">
                    <thead>
                      <tr>
                        <th>{t("Email")}</th>
                        <th>{t("Pseudo")}</th>
                        <th>{t("Role")}</th>
                        <th>{t("Modifier")}</th>
                        <th>{t("Bloquer")}</th>
                        <th>{t("Débloquer")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {admins && admins.map((item)=>(
                        <tr>
                          <td>{item.email}</td>
                          <td>{item.identifiant}</td>
                          <td>{item.roleAdmin.name}</td>
                          <td>

                            <i onClick={handleModifier} className="fa-solid fa-pen-to-square"></i>

                          </td>
                          <td>
                            <i onClick={handleBlock} className="fa-solid fa-lock"></i>
                          </td>
                          <td>
                            <i onClick={handleUnblock} className="fa-solid fa-lock-open"></i>
                          </td>
                        </tr>
                      ))}
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Bootstrap Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{t("Modifier l'administrateur")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
     
        
       
          
            <div className="card">
              <div className="card-header">
                <h2 className="new-price">{t("editer un administrateur")}</h2>
              </div>
              <div className="card-content">
                <div className="card-body">
                  <form className="form form-vertical">
                    <div className="form-body">
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group">
                            <label htmlFor="email-id-icon">{t("Nom")}</label>
                            <div className="position-relative">
                              <input onChange={e=>setData({...data , prenom:e.target.value})}
                                type="text"
                                className="form-control"
                                id="email-id-icon"
                                placeholder="Nom"
                                maxLength={25}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label htmlFor="email-id-icon">{t("Email")}</label>
                            <div className="position-relative">
                              <input onChange={e=>setData({...data , email:e.target.value})}
                                type="email"
                                className="form-control"
                                id="email-id-icon"
                                maxLength={25}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label htmlFor="email-id-icon">
                              {t("Identifiant")}
                            </label>
                            <div className="position-relative">
                              <input onChange={e=>setData({...data , identifiant:e.target.value})}
                                type="text"
                                className="form-control"
                                id="email-id-icon"
                                maxLength={25}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label htmlFor="email-id-icon">{t("mot de passe")}</label>
                            <div className="position-relative">
                              <input onChange={e=>setData({...data , password:e.target.value})}
                                type="text"
                                className="form-control"
                                id="email-id-icon"
                                maxLength={25}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="email-id-icon">
                            {t("Numéro de téléphone")}
                          </label>
                          <div className="input-group mb-3">
                            <input onChange={e=>setData({...data , numTel:e.target.value})}
                              type="text"
                              className="form-control"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label htmlFor="email-id-icon">{t("Role")}</label>
                            <fieldset className="form-group mb-3">
                            <select
  value={data.roleName} // Bind select value to state
  onChange={e => setData({ ...data, roleName: e.target.value })}
  className="form-select"
  id="basicSelect"
>
  
  

  {roles && roles.map(item => (
    <option key={item.name} value={item.name}>
      {item.name}
    </option>
  ))}
</select>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                     
                    </div>
                  </form>
                </div>
              </div>
            </div>
        
       
      
    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            {t("Fermer")}
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            {t("Enregistrer")}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ListeAdministrateur;
