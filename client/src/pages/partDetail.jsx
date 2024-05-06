import React, { useState } from 'react';
import { Modal, Button, Form, Table, Container, Row, Col, Card } from 'react-bootstrap';

function PartDetail() {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  return (
    <div className="page-content">
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Card>
              <Card.Body>
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <div className="avatar avatar-xl">
                    <img src="assets/static/images/faces/2.jpg" alt="Avatar" />
                  </div>
                  <h3 className="mt-3">Nom et Prénom</h3>
                  <p className="text-small">Pseudo</p>
                </div>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Numéro de téléphone</Form.Label>
                    <Form.Control type="number" placeholder="+12222222222" disabled />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Date d’inscription</Form.Label>
                    <Form.Control type="text" placeholder="01/01/2024" disabled />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre d’achats</Form.Label>
                    <Form.Control type="number" placeholder="222" disabled />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre d’enchères</Form.Label>
                    <Form.Control type="number" placeholder="22" disabled />
                  </Form.Group>
                  <Button variant="danger" type="submit">Bloquer</Button>
                  <Button variant="success" type="submit">Débloquer</Button>
                  <Button variant="primary" onClick={handleModalShow}>Ajouter du solde</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12}>
            <Card>
              <Card.Header>
                <h5>Liste de achats</h5>
              </Card.Header>
              <Card.Body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Produit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Data would be dynamically inserted here */}
                    <tr>
                      <td>01/01/2024</td>
                      <td>Product Name</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          {/* Repeat for other sections like auctions and transactions */}
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter du solde</Modal.Title>
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
                <option value="square">Virement bancaire</option>
                <option value="rectangle">Chèque</option>
                <option value="rombo">Transfert du solde</option>
                <option value="romboid">Visite Bureau Mazed</option>
                <option value="trapeze">Carte de recharge</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">Ajouter</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PartDetail;
