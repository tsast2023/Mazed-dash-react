import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function AnnonceCreator() {
  const [showSuivantModal, setShowSuivantModal] = useState(false);
  const [showPlanifierModal, setShowPlanifierModal] = useState(false);
  const [fileInputType, setFileInputType] = useState("");

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setFileInputType(selectedType);
  };

  const handleFileInput = () => {
    if (fileInputType === "image" || fileInputType === "video") {
      return (
        <input
          type="file"
          className="form-control"
          accept={fileInputType === "video" ? "video/*" : "image/*"}
        />
      );
    } else if (fileInputType === "carousel") {
      return (
        <input type="file" className="form-control" multiple accept="image/*" />
      );
    }
    return null;
  };

  return (
    <div className="col-md-12">
      <div className="card">
        <div className="card-header">
          <h2 className="new-price">création d'annonce</h2>
        </div>
        <div className="card-content">
          <div className="card-body">
            <form className="form form-vertical">
              <div className="form-body">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="type-annonce">Type de l'annonce</label>
                      <div className="position-relative">
                        <select
                          className="form-control"
                          id="type-annonce"
                          onChange={handleTypeChange}
                        >
                          <option value="">
                            Sélectionner le type d'annonce
                          </option>
                          <option value="image">Image</option>
                          <option value="video">Vidéo</option>
                          <option value="carousel">Carousel</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-12" id="file-input-container">
                    {handleFileInput()}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <Button
                  variant="light"
                  className="me-2"
                  onClick={() => setShowSuivantModal(false)}
                >
                  Annuler
                </Button>
                <Button
                  variant="dark"
                  onClick={() => setShowSuivantModal(true)}
                >
                  Suivant
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Modal
        show={showSuivantModal}
        onHide={() => setShowSuivantModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Actions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="primary" className="mb-1">
            Annuler
          </Button>
          <Button
            variant="warning"
            className="mb-1"
            onClick={() => {
              setShowSuivantModal(false);
              setShowPlanifierModal(true);
            }}
          >
            Planifier
          </Button>
          <Button variant="info">Publier</Button>
        </Modal.Body>
      </Modal>
      <Modal
        show={showPlanifierModal}
        onHide={() => setShowPlanifierModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Planifier la publication</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="publicationDate">Date</label>
            <input type="date" id="publicationDate" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="publicationTime">Heure</label>
            <input type="time" id="publicationTime" className="form-control" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={() => setShowPlanifierModal(false)}>
            Annuler
          </Button>
          <Button variant="success">Planifier</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AnnonceCreator;
