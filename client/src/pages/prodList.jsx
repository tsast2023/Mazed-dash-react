import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

function ProdList() {
  const { t } = useTranslation();
  const deleteItem = () => {
    // Function to delete item
  };

  return (
    <div className="content-container">
      <div id="app">
        <div id="main">
          <header className="mb-3">
            <a href="#" className="burger-btn d-block d-xl-none">
              <i className="bi bi-justify fs-3"></i>
            </a>
          </header>

          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  {/* <h3>Produits</h3> */}
                </div>
              </div>
            </div>
            <section className="section">
              <div className="card">
                <div className="card-header">
                  <h2 className="new-price">{t("Listes des Produits")}</h2>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table" id="table1">
                      <thead>
                        <tr>
                          <th>{t("Réf")}</th>
                          <th>{t("Libellé")}</th>
                          <th>{t("Image")}</th>
                          <th>{t("Stock initial")}</th>
                          <th>{t("Stock actuel")}</th>
                          <th>{t("Statut")}</th>
                          <th>{t("Détail")}</th>
                          <th>{t("Editer")}</th>
                          <th>{t("Supprimer")}</th>
                          <th>{t("Désactiver")}</th>
                          <th>{t("Mettre à l'une")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01121</td>
                          <td>Lorem</td>
                          <td>
                            <img src="" alt="img" />
                          </td>
                          <th>50</th>
                          <th>10</th>
                          <th>
                            <button className="btn btn-secondary">
                              {t("Publié")}
                            </button>
                          </th>
                          <th>
                            <section id="basic-modals">
                              <Link
                                to="/prodDétail"
                                className="btn btn-outline block"
                              >
                                <i className="fa-solid fa-eye font-medium-1"></i>
                              </Link>
                            </section>
                          </th>
                          <th>
                            <section id="basic-modals">
                              <Link
                                to="/prodEdit"
                                className="btn btn-outline block"
                              >
                                <i className="fa-solid fa-pen-to-square font-medium-1"></i>
                              </Link>
                            </section>
                          </th>
                          <th>
                            <i
                              className="fa-solid fa-trash deleteIcon font-medium-1"
                              onClick={() => {
                                // Show SweetAlert confirmation dialog
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
                                    // Call deleteItem function
                                    deleteItem();
                                    Swal.fire(
                                      t("Supprimé(e) !"),
                                      t("Votre élément a été supprimé."),
                                      "secondary"
                                    );
                                  } else {
                                    Swal.fire(
                                      t("Annulé"),
                                      t("Votre élément est en sécurité :)"),
                                      "error"
                                    );
                                  }
                                });
                              }}
                            ></i>
                          </th>
                          <th>
                            <i
                              className="fa-solid fa-ban blockIcon"
                              onClick={() => {
                                // Show SweetAlert confirmation dialog
                                Swal.fire({
                                  title: t("Êtes-vous sûr(e) ?"),
                                  icon: "warning",
                                  showCancelButton: true,
                                  confirmButtonColor: "#DD6B55",
                                  confirmButtonText: t("Oui, désactivez-le !"),
                                  cancelButtonText: t("Non, annuler !"),
                                  closeOnConfirm: false,
                                  closeOnCancel: false,
                                }).then((result) => {
                                  if (result.isConfirmed) {
                                    deleteItem();
                                    Swal.fire(
                                      t("Désactivé(e) !"),
                                      t("Votre élément a été désactivé."),
                                      "secondary"
                                    );
                                  } else {
                                    Swal.fire(
                                      t("Annulé"),
                                      t("Votre élément est en sécurité :)"),
                                      "error"
                                    );
                                  }
                                });
                              }}
                            ></i>
                          </th>
                          <th>
                            <i
                              className="fa-solid fa-star arrowIcon"
                              onClick={() => {
                                // Show SweetAlert confirmation dialog
                                Swal.fire({
                                  title: t("Êtes-vous sûr(e) ?"),
                                  icon: "warning",
                                  showCancelButton: true,
                                  confirmButtonColor: "#DD6B55",
                                  confirmButtonText: t("Oui, mettre à l'une !"),
                                  cancelButtonText: t("Non, annuler !"),
                                  closeOnConfirm: false,
                                  closeOnCancel: false,
                                }).then((result) => {
                                  if (result.isConfirmed) {
                                    // Appeler la fonction deleteItem
                                    deleteItem();
                                    Swal.fire(
                                      t("Effectué !"),
                                      t("Votre élément a été mis à l'une."),
                                      "secondary"
                                    );
                                  } else {
                                    Swal.fire(
                                      t("Annulé"),
                                      t("Votre élément est en sécurité :)"),
                                      "error"
                                    );
                                  }
                                });
                              }}
                            ></i>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdList;
