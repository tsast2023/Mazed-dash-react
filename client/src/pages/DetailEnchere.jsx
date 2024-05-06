import React, { useEffect } from "react";import '../css/DetailEnchere.css'
import { Link } from "react-router-dom";

function DetailEnchere() {

    useEffect(() => {
        const imgs = document.querySelectorAll(".img-select a");
        const imgBtns = [...imgs];
        let imgId = 1;
    
        imgBtns.forEach((imgItem) => {
          imgItem.addEventListener("click", (event) => {
            event.preventDefault();
            imgId = imgItem.dataset.id;
            slideImage();
          });
        });
    
        function slideImage() {
          const displayWidth = document.querySelector(
            ".img-showcase img:first-child"
          ).clientWidth;
    
          document.querySelector(".img-showcase").style.transform = `translateX(${
            -(imgId - 1) * displayWidth
          }px)`;
        }
    
        window.addEventListener("resize", slideImage);
    
        // Cleanup function
        return () => {
          imgBtns.forEach((imgItem) => {
            imgItem.removeEventListener("click", slideImage);
          });
          window.removeEventListener("resize", slideImage);
        };
      }, []);

  return (

    
    <div className="content-container">
      <div id="main">
        <header className="mb-3">
          <div id="timer" />
        </header>
        <section className="section">
          <div className="card-wrapper">
            <div className="cardss">
              {/* card left */}
              <div className="product-imgs">
                <div className="img-display">
                  <div className="img-showcase">
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg"
                      alt="shoe image"
                    />
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
                      alt="shoe image"
                    />
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
                      alt="shoe image"
                    />
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
                      alt="shoe image"
                    />
                  </div>
                </div>
                <div className="img-select">
                  <div className="img-item">
                    <a href="#" data-id={1}>
                      <img
                        src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg"
                        alt="shoe image"
                      />
                    </a>
                  </div>
                  <div className="img-item">
                    <a href="#" data-id={2}>
                      <img
                        src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
                        alt="shoe image"
                      />
                    </a>
                  </div>
                  <div className="img-item">
                    <a href="#" data-id={3}>
                      <img
                        src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
                        alt="shoe image"
                      />
                    </a>
                  </div>
                  <div className="img-item">
                    <a href="#" data-id={4}>
                      <img
                        src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
                        alt="shoe image"
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* card right */}
              <div className="product-price">
                <p href="#" className="new-price">
                  Reference :
                </p>
                <div className="product-price">
                  {/* <p class="last-price">Old Price: <span>$257.00</span></p> */}
                  <div className="col-md-12 mb-4">
                    <div
                      style={{
                        margin: 0,
                        backgroundColor: "white",
                        justifyContent: "center",
                        padding: 20,
                      }}
                      className="row form-group"
                    >
                      <h2 className="new-price">Etat :</h2>
                      <div className="col-6">
                        <p>En cours :</p>
                        <p>Prix Mazed online</p>
                        <p>temps restant</p>
                        <p>Nom de la famille et Prénom</p>
                        <p>pseudo</p>
                        <p>numéro du téléphone</p>
                        <p>Heure/minute/seconde de majoration</p>
                        <p>Majoration</p>
                        <p>Prix lors de la majoration</p>
                      </div>
                      <div className="col-6">
                        <p>Terminer :</p>
                        <p>Peix Mazed online final</p>
                        <p>Date/Heure</p>
                        <p>Nom de la famille et Prénom</p>
                        <p>pseudo</p>
                        <p>numéro du téléphone</p>
                        <button
                          type="button"
                          className="btn btn-outline-success"
                          data-bs-toggle="modal"
                          data-bs-target="#success"
                        >
                          Publier
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{ backgroundColor: "white", padding: 20 }}
                  className="row product-detail"
                >
                  {" "}
                  <h2 className="new-price">Details :</h2>
                  <div className="col-6">
                    <p>Libellé du Produit :</p>
                    <p>Le Commercant</p>
                    <p>Le Prix Magasin</p>
                    <p>Le Prix Mazed online</p>
                    <p>Le Cout de Clic</p>
                    <p>Le Frais d'inscription</p>
                  </div>
                  <div className="col-6">
                    <p>La Valeur de Majoraion</p>
                    <p>Formule de Facilité</p>
                    <p>Nombre attendu des Participants</p>
                    <p>Nombre réel des Participants</p>
                    <p>Date de Publication</p>
                    <p>Date de Fermeture</p>
                    <p>Date de Lancement</p>
                  </div>
                  <div style={{ textAlign: "center" }} className="buuttt">
                    <div className="modal-success me-1 mb-1 d-inline-block">
                      <button
                        type="button"
                        className="btn btn-outline-success pub"
                        data-bs-toggle="modal"
                        data-bs-target="#success"
                      >
                        Publier
                      </button>
                      <div
                        className="modal fade text-left"
                        id="success"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="myModalLabel110"
                        aria-hidden="true"
                      >
                        <div
                          className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-header bg-success">
                              <h5
                                className="modal-title white"
                                id="myModalLabel110"
                              >
                                Success Modal
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >
                                <i data-feather="x" />
                              </button>
                            </div>
                            <div className="modal-body">
                              Tart lemon drops macaroon oat cake chocolate
                              toffee chocolate bar icing. Pudding jelly beans
                              carrot cake pastry gummies cheesecake lollipop. I
                              love cookie lollipop cake I love sweet gummi bears
                              cupcake dessert.
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-light-secondary"
                                data-bs-dismiss="modal"
                              >
                                <i className="bx bx-x d-block d-sm-none" />
                                <span className="d-none d-sm-block">Close</span>
                              </button>
                              <button
                                type="button"
                                className="btn btn-success ms-1"
                                data-bs-dismiss="modal"
                              >
                                <i className="bx bx-check d-block d-sm-none" />
                                <span className="d-none d-sm-block">
                                  Accept
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-primary me-1 mb-1 d-inline-block">
                      <Link to={'/ModificationDetailsEnchere'}>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#primary"
                        >
                          Modifier
                        </button>
                      </Link>
                    </div>
                    <div className="modal-danger me-1 mb-1 d-inline-block">
                      <button
                        type="button"
                        className="btn btn-outline-danger deleteIcon"
                        data-bs-toggle="modal"
                        data-bs-target="#danger"
                      >
                        Annuler
                      </button>
                      <div
                        className="modal fade text-left"
                        id="danger"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="myModalLabel120"
                        aria-hidden="true"
                      >
                        <div
                          className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-header bg-danger">
                              <h5
                                className="modal-title white"
                                id="myModalLabel120"
                              />
                              <button
                                type="button"
                                className="close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >
                                <i data-feather="x" />
                              </button>
                            </div>
                            <div className="modal-body">
                              Vous Avez Sur de Supprimer !
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-light-secondary"
                                data-bs-dismiss="modal"
                              >
                                <i className="bx bx-x d-block d-sm-none" />
                                <span className="d-none d-sm-block">Close</span>
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger ms-1"
                                data-bs-dismiss="modal"
                              >
                                <i className="bx bx-check d-block d-sm-none" />
                                <span className="d-none d-sm-block">
                                  Accept
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <section className="section">
          <div className="card">
            <div className="card-header">
              <h2 className="new-price">Liste des Participants</h2>
            </div>
            <div className="card-body">
              <div className="table-responsive datatable-minimal">
                <table className="table" id="table2">
                  <thead>
                    <tr>
                      <th>Nom de famille</th>
                      <th>Prénom</th>
                      <th>Pseudo</th>
                      <th>Numéro du téléphone</th>
                      <th>Date de participation</th>
                      <th>Nombre d'encheres y liées</th>
                      <th>Lien Page Details</th>
                      {/* <th>Publier immédiatement</th>
        <th>Modifier</th>
        <th>Annuler</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Thamer</td>
                      <td>Seif</td>
                      <td>Clubisty</td>
                      <td>(+1) 613 820 8838</td>
                      <td>04/07/2026</td>
                      <td>69</td>
                      <td>Lien</td>
                    </tr>
                    <tr>
                      <td>Thamer</td>
                      <td>Seif</td>
                      <td>Clubisty</td>
                      <td>(+1) 613 820 8838</td>
                      <td>04/07/2026</td>
                      <td>69</td>
                      <td>Lien</td>
                    </tr>
                    <tr>
                      <td>Thamer</td>
                      <td>Seif</td>
                      <td>Clubisty</td>
                      <td>(+1) 613 820 8838</td>
                      <td>04/07/2026</td>
                      <td>69</td>
                      <td>Lien</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="footer clearfix mb-0 text-muted">
            <div className="float-start">
              <p>2024 © Mazed</p>
            </div>
            <div className="float-end">
              <p>
                Crafted with
                <span className="text-danger">
                  <i className="bi bi-heart-fill icon-mid" />
                </span>
                by <a href="https://TSAST.me">TSAST</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default DetailEnchere;
