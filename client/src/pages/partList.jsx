import React, { useState } from "react";
import Swal from "sweetalert2";
import { Modal, Button, Table, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function ParticipantList() {
  const [modalShow, setModalShow] = useState(false);

  const participants = [
    {
      id: 1,
      name: "Alex",
      username: "vehi",
      phone: "20202020",
      registrationDate: "01/01/2024",
      purchaseCount: 1,
      bidCount: 1,
    },
  ];

  const handleLockUnlock = (action, item) => {
    Swal.fire({
      title: `Are you sure you want to ${action}?`,
      text: `Once ${action}ed, you will not be able to revert this!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: `Yes, ${action} it!`,
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          `${action.charAt(0).toUpperCase() + action.slice(1)}ed!`,
          `Your item has been ${action}ed.`,
          "success"
        );
      } else {
        Swal.fire("Cancelled", `Your item is safe :)`, "error");
      }
    });
  };

  return (
    <section className="section">
      <div className="card">
        <div className="card-header">
          <h2>Liste des participants</h2>
        </div>
        <div className="row" style={{ padding: "0 20px" }}>
              <div className="col-md-3 mb-4">
                <h6>Etat</h6>
                <fieldset className="form-group">
                  <select className="form-select" id="basicSelect1">
                    <option disabled selected>
                      Choose Etat
                    </option>{" "}
                    {/* Not selected by default */}
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </fieldset>
              </div>
              <div className="col-md-3 mb-4">
                <h6>Participe</h6>
                <fieldset className="form-group">
                  <select className="form-select" id="basicSelect2">
                    <option disabled selected>
                      Choose Participe
                    </option>{" "}
                    {/* Not selected by default */}
                    <option>Oui</option>
                    <option>Non</option>
                  </select>
                </fieldset>
              </div>
              <div className="col-md-3 mb-4">
                <h6>Gagnant</h6>
                <fieldset className="form-group">
                  <select className="form-select" id="basicSelect3">
                    <option disabled selected>
                      Choose Gagnant
                    </option>{" "}
                    {/* Not selected by default */}
                    <option>Oui</option>
                    <option>Non</option>
                  </select>
                </fieldset>
              </div>
              <div className="col-md-3 mb-4">
                <h6>Statut</h6>
                <fieldset className="form-group">
                  <select className="form-select" id="basicSelect3">
                    <option disabled selected>
                      Choose Statut
                    </option>{" "}
                    {/* Not selected by default */}
                    <option>Nouveau</option>
                    <option>Ancien</option>
                  </select>
                </fieldset>
              </div>
            </div>
        <div className="card-body">
          <Table responsive="sm">
            <thead>
              <tr>
                <th>Nom et prénom</th>
                <th>Pseudo</th>
                <th>Num tél</th>
                <th>Date inscri</th>
                <th>Nbr d'achats</th>
                <th>Nbr d'enchères</th>
                <th>Détail</th>
                <th>Bloquer</th>
                <th>Débloquer</th>
                <th>Solde</th>
              </tr>
            </thead>
            <tbody>
              {participants.map((participant) => (
                <tr key={participant.id}>
                  <td>{participant.name}</td>
                  <td>{participant.username}</td>
                  <td>{participant.phone}</td>
                  <td>{participant.registrationDate}</td>
                  <td>{participant.purchaseCount}</td>
                  <td>{participant.bidCount}</td>
                  <td>
                    <Button variant="link" onClick={() => setModalShow(true)}>
                      <Link to="/partdetail">
                        <i className="fa-solid fa-eye"></i>
                      </Link>
                    </Button>
                  </td>
                  <td>
                    <i
                      className="fa-solid fa-lock"
                      onClick={() => handleLockUnlock("lock", participant.id)}
                    ></i>
                  </td>
                  <td>
                    <i
                      className="fa-solid fa-unlock"
                      onClick={() => handleLockUnlock("unlock", participant.id)}
                    ></i>
                  </td>
                  <td>
                    <i
                      className="fa-solid fa-sack-dollar"
                      onClick={() => setModalShow(true)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Montant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Montant:</Form.Label>
              <Form.Control type="number" placeholder="Entrez le montant" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Manière de recharge</Form.Label>
              <Form.Select>
                <option>Virement bancaire</option>
                <option>Chèque</option>
                <option>Transfert du solde</option>
                <option>Visite Bureau Mazed</option>
                <option>Carte de recharge</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
              Ajouter
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default ParticipantList;
