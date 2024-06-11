import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

function ProdList() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 750);
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const deleteItem = () => {
    // Implement your delete logic here
  };

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
        Swal.fire(t("Supprimé(e) !"), t("Votre élément a été supprimé."), "secondary");
      } else {
        Swal.fire(t("Annulé"), t("Votre élément est en sécurité :)"), "error");
      }
    });
  };

  const handleBan = () => {
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
        deleteItem(); // Replace with your deactivate logic
        Swal.fire(t("Désactivé(e) !"), t("Votre élément a été désactivé."), "secondary");
      } else {
        Swal.fire(t("Annulé"), t("Votre élément est en sécurité :)"), "error");
      }
    });
  };

  const handleArrowClick = () => {
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
        deleteItem(); // Replace with your "put to top" logic
        Swal.fire(t("Effectué !"), t("Votre élément a été mis à l'une."), "secondary");
      } else {
        Swal.fire(t("Annulé"), t("Votre élément est en sécurité :)"), "error");
      }
    });
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
                    {isMobile ? (
                      <table style={{ width: "100%", textAlign: "center" }}>
                        <tbody>
                          {/* Replace this with dynamic content */}
                          <tr style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <hr />
                            <td style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                              <th>{t("Réf")}</th>
                              <tr className="text-bold-500">01121</tr>
                              <th>{t("Libellé")}</th>
                              <tr className="text-bold-500">Lorem</tr>
                              <th>{t("Image")}</th>
                              <tr>
                                <img src="" alt="img" />
                              </tr>
                              <th>{t("Stock initial")}</th>
                              <tr className="text-bold-500">50</tr>
                              <th>{t("Stock actuel")}</th>
                              <tr className="text-bold-500">10</tr>
                              <th>{t("Statut")}</th>
                              <tr>
                                <button className="btn btn-secondary">{t("Publié")}</button>
                              </tr>
                              <th>{t("Détail")}</th>
                              <tr>
                                <Link to="/prodDétail" className="btn btn-outline block">
                                  <i className="fa-solid fa-eye font-medium-1"></i>
                                </Link>
                              </tr>
                              <th>{t("Editer")}</th>
                              <tr>
                                <Link to="/prodEdit" className="btn btn-outline block">
                                  <i className="fa-solid fa-pen-to-square font-medium-1"></i>
                                </Link>
                              </tr>
                              <th>{t("Supprimer")}</th>
                              <tr>
                                <i className="fa-solid fa-trash deleteIcon font-medium-1" onClick={handleDelete}></i>
                              </tr>
                              <th>{t("Désactiver")}</th>
                              <tr>
                                <i className="fa-solid fa-ban blockIcon" onClick={handleBan}></i>
                              </tr>
                              <th>{t("Mettre à l'une")}</th>
                              <tr>
                                <i className="fa-solid fa-star arrowIcon" onClick={handleArrowClick}></i>
                              </tr>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    ) : (
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
                          {/* Replace this with dynamic content */}
                          <tr>
                            <td>01121</td>
                            <td>Lorem</td>
                            <td>
                              <img src="" alt="img" />
                            </td>
                            <th>50</th>
                            <th>10</th>
                            <th>
                              <button className="btn btn-secondary">{t("Publié")}</button>
                            </th>
                            <th>
                              <Link to="/prodDétail" className="btn btn-outline block">
                                <i className="fa-solid fa-eye font-medium-1"></i>
                              </Link>
                            </th>
                            <th>
                              <Link to="/prodEdit" className="btn btn-outline block">
                                <i className="fa-solid fa-pen-to-square font-medium-1"></i>
                              </Link>
                            </th>
                            <th>
                              <i className="fa-solid fa-trash deleteIcon font-medium-1" onClick={handleDelete}></i>
                            </th>
                            <th>
                              <i className="fa-solid fa-ban blockIcon" onClick={handleBan}></i>
                            </th>
                            <th>
                              <i className="fa-solid fa-star arrowIcon" onClick={handleArrowClick}></i>
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    )}
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
