import React, { useState } from "react";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { Modal, Button } from "react-bootstrap";

function ListeAdministrateur() {
  const { t } = useTranslation();
  const [showEditModal, setShowEditModal] = useState(false);
  const [name, setName] = useState("Alex"); // Example initial values
  const [pseudo, setPseudo] = useState("vehi"); // Example initial values
  const [role, setRole] = useState("Lorem"); // Example initial values

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleSaveEdit = (event) => {
    event.preventDefault(); // Prevent form submission
    // Implement your save logic here
    handleCloseEditModal(); // Close modal after saving
    Swal.fire({
      title: t("Sauvegardé"),
      icon: "success",
    });
  };

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
        Swal.fire({
          title: "fait",
          confirmButtonColor: "#b0210e",
        });
      } else {
        Swal.fire({
          title: "Annulé",
          text: "Votre élément est en sécurité :)",
          icon: "error",
          confirmButtonColor: "#b0210e",
        });
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
        Swal.fire({ title: "fait", confirmButtonColor: "#b0210e" });
      } else {
        Swal.fire({
          title: "Annulé",
          text: "Votre élément est en sécurité :)",
          icon: "error",
          confirmButtonColor: "#b0210e",
        });
      }
    });
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
                        <th>{t("Nom")}</th>
                        <th>{t("Pseudo")}</th>
                        <th>{t("Role")}</th>
                        <th>{t("Modifier")}</th>
                        <th>{t("Bloquer")}</th>
                        <th>{t("Débloquer")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{name}</td>
                        <td>{pseudo}</td>
                        <td>{role}</td>
                        <td>
                          <Button variant="primary" onClick={handleEdit}>
                            <i className="fa-solid fa-pen-to-square"></i>
                          </Button>
                        </td>
                        <td>
                          <i className="fa-solid fa-lock" onClick={handleBlock}></i>
                        </td>
                        <td>
                          <i className="fa-solid fa-lock-open" onClick={handleUnblock}></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleCloseEditModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{t("Modification d'un administrateur")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form form-vertical" onSubmit={handleSaveEdit}>
            <div className="form-body">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="name-id">{t("Nom")}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name-id"
                      placeholder="Nom"
                      maxLength={25}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="pseudo-id">{t("Pseudo")}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="pseudo-id"
                      placeholder="Pseudo"
                      maxLength={25}
                      value={pseudo}
                      onChange={(e) => setPseudo(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="role-id">{t("Role")}</label>
                    <select
                      className="form-select"
                      id="role-id"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option>IT</option>
                      <option>Blade Runner</option>
                      <option>Thor Ragnarok</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <Button variant="secondary" onClick={handleCloseEditModal}>
                {t("Annuler")}
              </Button>
              <Button type="submit" variant="primary">
                {t("Enregistrer")}
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ListeAdministrateur;
