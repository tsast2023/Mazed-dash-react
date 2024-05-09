import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ProdAction() {
  const [showModal, setShowModal] = useState(false);

  const goBack = () => {
    window.history.back(); // Simulate a browser back button
  };

  const showNotification = () => {
    alert('Saved!'); // Placeholder for notification functionality
  };

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Actions</h4>
        </div>
        <div className="card-content">
          <div className="card-body">
            <form className="form form-vertical">
              <div className="form-body">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="first-name-vertical">Libellé</label>
                      <input
                        type="text"
                        id="first-name-vertical"
                        className="form-control"
                        name="fname"
                        maxLength="25"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <Button variant="light" className="me-2 mb-1" onClick={goBack}>
                      Retour
                    </Button>
                    <Button variant="success" className="me-2 mb-1" onClick={showNotification}>
                      Enregister
                    </Button>
                    <Button variant="primary" className="me-2 mb-1" onClick={handleOpenModal}>
                      Planifier
                    </Button>
                    <Button variant="primary" className="mb-1">
                      Publier immédiatement
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Planifier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="dateInput" className="form-label">Date:</label>
            <input type="date" className="form-control" id="dateInput" />
          </div>
          <div className="mb-3">
            <label htmlFor="timeInput" className="form-label">Heure:</label>
            <input type="time" className="form-control" id="timeInput" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fermer
          </Button>
          <Button variant="primary">
            Planifier
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProdAction;
