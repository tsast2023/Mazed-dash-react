import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ProdList() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [starClicked, setStarClicked] = useState(false); // State to track star click

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
        Swal.fire({   title: "Supprimer",
          text: "Votre élément est Supprimer :)",
          icon: "success",
          confirmButtonColor: "#b0210e",
        });      } else {
        Swal.fire({   title: "Annulé",
          text: "Votre élément est en sécurité :)",
          icon: "error",
          confirmButtonColor: "#b0210e",
        }); }
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
        Swal.fire({   title: "Desactiver",
          text: "Votre élément est Desactiver :)",
          icon: "success",
          confirmButtonColor: "#b0210e",
        });      } else {
          Swal.fire({   title: "Annulé",
            text: "Votre élément est en sécurité :)",
            icon: "error",
            confirmButtonColor: "#b0210e",
          });      }
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
        // Toggle starClicked state
        setStarClicked(!starClicked);
        Swal.fire({   title: "Effectuer",
          text: "Votre élément est Effectuer :)",
          icon: "success",
          confirmButtonColor: "#b0210e",
        });      } else {
          Swal.fire({   title: "Annulé",
            text: "Votre élément est en sécurité :)",
            icon: "error",
            confirmButtonColor: "#b0210e",
          });      }
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
                  {/* Your table rows */}
                  <tr>
                    <td>{t("Mettre à l'une")}</td>
                    <td>
                      {/* Conditional rendering based on starClicked state */}
                      {starClicked ? (
                        <i className="fa-solid fa-star arrowIcon" onClick={handleArrowClick}></i>
                      ) : (
                        <i className="fa-regular fa-star arrowIcon" onClick={handleArrowClick}></i>
                      )}
                    </td>
                  </tr>
                </tbody>
              </Table>
            ) : (
              <Table responsive="sm">
                <thead>
                  <tr>
                    {/* Your table headers */}
                    <th>{t("Image")}</th>
                    <th>{t("Réf")}</th>
                    <th>{t("Libellé")}</th>
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
                    {/* Your table data */}
                    <td>
                      <img className="imgtable" src="./Mazed.jpg" alt="img" />
                    </td>
                    <td>01121</td>
                    <td>Lorem</td>
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
                      {/* Conditional rendering based on starClicked state */}
                      {starClicked ? (
                        <i className="fa-solid fa-star arrowIcon" onClick={handleArrowClick}></i>
                      ) : (
                        <i className="fa-regular fa-star arrowIcon" onClick={handleArrowClick}></i>
                      )}
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
