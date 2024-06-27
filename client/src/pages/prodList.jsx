import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ProdList() {
  const { t } = useTranslation();
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

  const deleteItem = () => {
    // Implement your delete logic here
    console.log("Item deleted");
  };

  const handleDelete = () => {
    Swal.fire({
      title: t("Êtes-vous sûr(e) ?"),
      text: t("Une fois supprimé(e), vous ne pourrez pas récupérer cet élément !"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#b0210e",
      confirmButtonText: t("Oui, supprimez-le !"),
      cancelButtonText: t("Non, annuler !")
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem();
        Swal.fire(t("Supprimé(e) !"), t("Votre élément a été supprimé."), "success");
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
      confirmButtonColor: "#b0210e",
      confirmButtonText: t("Oui, désactivez-le !"),
      cancelButtonText: t("Non, annuler !")
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem(); // Replace with your deactivate logic
        Swal.fire(t("Désactivé(e) !"), t("Votre élément a été désactivé."), "success");
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
      confirmButtonColor: "#b0210e",
      confirmButtonText: t("Oui, mettre à l'une !"),
      cancelButtonText: t("Non, annuler !")
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem(); // Replace with your "put to top" logic
        Swal.fire(t("Effectué !"), t("Votre élément a été mis à l'une."), "success");
      } else {
        Swal.fire(t("Annulé"), t("Votre élément est en sécurité :)"), "error");
      }
    });
  };

  return (
    <div className="content-container">
      <section className="section">
        <div className="card">
          <div className="card-header">
            <h2 className="new-price">{t("Listes des Produits")}</h2>
          </div>
          <div className="card-body">
            {isMobile ? (
              <Table responsive="sm">
                <tbody>
                  <tr>
                    <td>{t("Réf")}</td>
                    <td className="text-bold-500">01121</td>
                  </tr>
                  <tr>
                    <td>{t("Libellé")}</td>
                    <td className="text-bold-500">Lorem</td>
                  </tr>
                  <tr>
                    <td>{t("Image")}</td>
                    <td>
                    <img className="imgtable" src="./Mazed.jpg" alt="img" />
                    </td>
                  </tr>
                  <tr>
                    <td>{t("Stock initial")}</td>
                    <td className="text-bold-500">50</td>
                  </tr>
                  <tr>
                    <td>{t("Stock actuel")}</td>
                    <td className="text-bold-500">10</td>
                  </tr>
                  <tr>
                    <td>{t("Statut")}</td>
                    <td>
                      <button className="btn btn-secondary">{t("Publié")}</button>
                    </td>
                  </tr>
                  <tr>
                    <td>{t("Détail")}</td>
                    <td>
                      <Link to="/prodDétail" className="btn btn-outline block">
                        <i className="fa-solid fa-eye font-medium-1"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>{t("Editer")}</td>
                    <td>
                      <Link to="/prodEdit" className="btn btn-outline block">
                        <i className="fa-solid fa-pen-to-square font-medium-1"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>{t("Supprimer")}</td>
                    <td>
                      <i className="fa-solid fa-trash deleteIcon font-medium-1" onClick={handleDelete}></i>
                    </td>
                  </tr>
                  <tr>
                    <td>{t("Désactiver")}</td>
                    <td>
                      <i className="fa-solid fa-ban blockIcon" onClick={handleBan}></i>
                    </td>
                  </tr>
                  <tr>
                    <td>{t("Mettre à l'une")}</td>
                    <td>
                      <i className="fa-solid fa-star arrowIcon" onClick={handleArrowClick}></i>
                    </td>
                  </tr>
                </tbody>
              </Table>
            ) : (
              <Table responsive="sm">
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
                      <img className="imgtable" src="./Mazed.jpg" alt="img" />
                    </td>
                    <td>50</td>
                    <td>10</td>
                    <td>
                      <button className="btn btn-secondary">{t("Publié")}</button>
                    </td>
                    <td>
                      <Link to="/prodDétail" className="btn btn-outline block">
                        <i className="fa-solid fa-eye font-medium-1"></i>
                      </Link>
                    </td>
                    <td>
                      <Link to="/prodEdit" className="btn btn-outline block">
                        <i className="fa-solid fa-pen-to-square font-medium-1"></i>
                      </Link>
                    </td>
                    <td>
                      <i className="fa-solid fa-trash deleteIcon font-medium-1" onClick={handleDelete}></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-ban blockIcon" onClick={handleBan}></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-star arrowIcon" onClick={handleArrowClick}></i>
                    </td>
                  </tr>
                </tbody>
              </Table>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProdList;
