import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

function AdsList() {
  const [showImageModal, setShowImageModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showCarouselModal, setShowCarouselModal] = useState(false);

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
      } else {
        Swal.fire('Cancelled', 'Your item is safe :)', 'error');
      }
    });
  };
  return (
    <section className="section">
      <div className="card">
        <div className="card-header">
          <h2 className="new-price">List des annonces</h2>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table" id="table1">
              <thead>
                <tr>
                  <th>Date de création</th>
                  <th>Date de publication</th>
                  <th>Type</th>
                  <th>Voir</th>
                  <th>Editer</th>
                  <th>Supprimer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01/01/2024</td>
                  <td>05/05/2024</td>
                  <td>Image</td>
                  <th>
                    <Button onClick={() => setShowImageModal(true)}>
                      <i className="fa-solid fa-eye"></i>
                    </Button>
                  </th>
                  <th>
                    <a href="annonces-edit.html?id=1"><i className="fa-solid fa-pen-to-square"></i></a>
                  </th>
                  <th>
                    <i className="fa-solid fa-trash deleteIcon" onClick={handleDelete}></i>
                  </th>
                </tr>
                <tr>
                  <td>02/01/2024</td>
                  <td>06/05/2024</td>
                  <td>Video</td>
                  <th>
                    <Button onClick={() => setShowVideoModal(true)}>
                      <i className="fa-solid fa-eye"></i>
                    </Button>
                  </th>
                  <th>
                    <a href="annonces-edit.html"><i className="fa-solid fa-pen-to-square"></i></a>
                  </th>
                  <th>
                    <i className="fa-solid fa-trash deleteIcon" onClick={handleDelete}></i>
                  </th>
                </tr>
                <tr>
                  <td>03/01/2024</td>
                  <td>07/05/2024</td>
                  <td>Carousel</td>
                  <th>
                    <Button onClick={() => setShowCarouselModal(true)}>
                      <i className="fa-solid fa-eye"></i>
                    </Button>
                  </th>
                  <th>
                    <a href="annonces-edit.html"><i className="fa-solid fa-pen-to-square"></i></a>
                  </th>
                  <th>
                    <i className="fa-solid fa-trash deleteIcon" onClick={handleDelete}></i>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal show={showImageModal} onHide={() => setShowImageModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="/assets/compiled/jpg/architecture1.jpg" className="img-fluid" alt="Image" />
          <div className="mt-3">
            <label>Date de création:</label>
            <input type="text" className="form-control" value="01/01/2024" disabled />
          </div>
          <div className="mt-3">
            <label>Date de publication:</label>
            <input type="text" className="form-control" value="05/05/2024" disabled />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowImageModal(false)}>Fermer</Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showVideoModal} onHide={() => setShowVideoModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <video src="/assets/compiled/video/exemple.mp4" className="img-fluid" alt="video" controls></video>
          <div className="mt-3">
            <label>Date de création:</label>
            <input type="text" className="form-control" value="02/01/2024" disabled />
          </div>
          <div className="mt-3">
            <label>Date de publication:</label
            ><input type="text" className="form-control" value="06/05/2024" disabled />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowVideoModal(false)}>Fermer</Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showCarouselModal} onHide={() => setShowCarouselModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Carousel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/assets/compiled/jpg/architecture1.jpg" className="d-block w-100" alt="Image 1" />
              </div>
              <div className="carousel-item">
                <img src="/assets/compiled/jpg/jump.jpg" className="d-block w-100" alt="Image 2" />
              </div>
            </div>
            <Button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </Button>
            <Button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </Button>
          </div>
          <div className="mt-3">
            <label>Date de création:</label>
            <input type="text" className="form-control" value="03/01/2024" disabled />
          </div>
          <div className="mt-3">
            <label>Date de publication:</label
            ><input type="text" className="form-control" value="07/05/2024" disabled />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCarouselModal(false)}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default AdsList;
