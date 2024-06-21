import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useTranslation } from "react-i18next";

function AdsList() {
  const { t } = useTranslation();
  const [showImageModal, setShowImageModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showCarouselModal, setShowCarouselModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1212);
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDelete = () => {
    Swal.fire({
      title: t("Êtes-vous sûr(e) ?"),
      text: t("Une fois supprimé(e), vous ne pourrez pas récupérer cet élément !"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: t("Oui, supprimez-le !"),
      cancelButtonText: t("Non, annuler !"),
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem();
        Swal.fire(t("Supprimé(e) !"), t("Votre élément a été supprimé."), "success");
      } else {
        Swal.fire(t("Annulé"), t("Votre élément est en sécurité :)"), "error");
      }
    });
  };

  const deleteItem = () => {
    // Your delete logic here
  };

  return (
    <div className="content-container">
      <section className="section">
        <div className="card">
          <div className="card-header">
            <h2 className="new-price">{t("Liste des annonces")}</h2>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              {isMobile ? (
                <table className="table" id="table1">
                  <tbody>
                    <tr>
                      <td>{t("Date de création")}</td>
                      <td>01/01/2024</td>
                    </tr>
                    <tr>
                      <td>{t("Date de publication")}</td>
                      <td>05/05/2024</td>
                    </tr>
                    <tr>
                      <td>{t("Type")}</td>
                      <td>{t("Image")}</td>
                    </tr>
                    <tr>
                      <td>{t("Voir")}</td>
                      <td>
                        <Button onClick={() => setShowImageModal(true)}>
                          <i className="fa-solid fa-eye"></i>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>{t("Editer")}</td>
                      <td>
                        <a href="annonces-edit.html?id=1">
                          <i className="fa-solid fa-pen-to-square"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>{t("Supprimer")}</td>
                      <td>
                        <i className="fa-solid fa-trash deleteIcon" onClick={handleDelete}></i>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2"><hr /></td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table className="table" id="table1">
                  <thead>
                    <tr>
                      <th>{t("Date de création")}</th>
                      <th>{t("Date de publication")}</th>
                      <th>{t("Type")}</th>
                      <th>{t("Voir")}</th>
                      <th>{t("Editer")}</th>
                      <th>{t("Supprimer")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01/01/2024</td>
                      <td>05/05/2024</td>
                      <td>{t("Image")}</td>
                      <td>
                        <Button onClick={() => setShowImageModal(true)}>
                          <i className="fa-solid fa-eye"></i>
                        </Button>
                      </td>
                      <td>
                        <a href="annonces-edit.html?id=1">
                          <i className="fa-solid fa-pen-to-square"></i>
                        </a>
                      </td>
                      <td>
                        <i className="fa-solid fa-trash deleteIcon" onClick={handleDelete}></i>
                      </td>
                    </tr>
                    <tr>
                      <td>02/01/2024</td>
                      <td>06/05/2024</td>
                      <td>{t("Video")}</td>
                      <td>
                        <Button onClick={() => setShowVideoModal(true)}>
                          <i className="fa-solid fa-eye"></i>
                        </Button>
                      </td>
                      <td>
                        <a href="annonces-edit.html">
                          <i className="fa-solid fa-pen-to-square"></i>
                        </a>
                      </td>
                      <td>
                        <i className="fa-solid fa-trash deleteIcon" onClick={handleDelete}></i>
                      </td>
                    </tr>
                    <tr>
                      <td>03/01/2024</td>
                      <td>07/05/2024</td>
                      <td>{t("Carousel")}</td>
                      <td>
                        <Button onClick={() => setShowCarouselModal(true)}>
                          <i className="fa-solid fa-eye"></i>
                        </Button>
                      </td>
                      <td>
                        <a href="annonces-edit.html">
                          <i className="fa-solid fa-pen-to-square"></i>
                        </a>
                      </td>
                      <td>
                        <i className="fa-solid fa-trash deleteIcon" onClick={handleDelete}></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>

        <Modal show={showImageModal} onHide={() => setShowImageModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{t("Image")}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src="/assets/compiled/jpg/architecture1.jpg" className="img-fluid" alt={t("Image")} />
            <div className="mt-3">
              <label>{t("Date de création")}</label>
              <input type="text" className="form-control" value="01/01/2024" disabled />
            </div>
            <div className="mt-3">
              <label>{t("Date de publication")}</label>
              <input type="text" className="form-control" value="05/05/2024" disabled />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowImageModal(false)}>{t("Fermer")}</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showVideoModal} onHide={() => setShowVideoModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{t("Video")}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <video src="/assets/compiled/video/exemple.mp4" className="img-fluid" alt={t("video")} controls></video>
            <div className="mt-3">
              <label>{t("Date de création")}</label>
              <input type="text" className="form-control" value="02/01/2024" disabled />
            </div>
            <div className="mt-3">
              <label>{t("Date de publication")}</label>
              <input type="text" className="form-control" value="06/05/2024" disabled />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowVideoModal(false)}>{t("Fermer")}</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showCarouselModal} onHide={() => setShowCarouselModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{t("Carousel")}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/assets/compiled/jpg/architecture1.jpg" className="d-block w-100" alt={t("Image 1")} />
                </div>
                <div className="carousel-item">
                  <img src="/assets/compiled/jpg/jump.jpg" className="d-block w-100" alt={t("Image 2")} />
                </div>
              </div>
              <Button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">{t("Previous")}</span>
              </Button>
              <Button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">{t("Next")}</span>
              </Button>
            </div>
            <div className="mt-3">
              <label>{t("Date de création")}</label>
              <input type="text" className="form-control" value="03/01/2024" disabled />
            </div>
            <div className="mt-3">
              <label>{t("Date de publication")}</label>
              <input type="text" className="form-control" value="07/05/2024" disabled />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowCarouselModal(false)}>{t("Fermer")}</Button>
          </Modal.Footer>
        </Modal>
      </section>
    </div>
  );
}

export default AdsList;
