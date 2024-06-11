import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

function TableUtilisateur() {
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

  const handleBlockClick = () => {
    Swal.fire({
      title: t("Êtes-vous sûr(e) ?"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: t("Oui"),
      cancelButtonText: t("Non"),
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem();
        Swal.fire(t("Désactivé(e) !"), t("Votre élément a été désactivé."), "secondary");
      } else {
        Swal.fire(t("Annulé"), t("Votre élément est en sécurité :)"), "error");
      }
    });
  };

  const handleUnblockClick = () => {
    Swal.fire({
      title: t("Êtes-vous sûr(e) ?"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: t("Oui"),
      cancelButtonText: t("Non"),
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem();
        Swal.fire(t("Débloqué(e)"), t("Votre élément a été débloqué."), "secondary");
      } else {
        Swal.fire(t("Annulé"), t("Votre élément est en sécurité :)"), "error");
      }
    });
  };

  const deleteItem = () => {
    // Your delete logic here
  };

  return (
    <div id="main">
      <header className="mb-3">
        <a href="#" className="burger-btn d-block d-xl-none">
          <i className="bi bi-justify fs-3"></i>
        </a>
      </header>
      <section className="section">
        <div className="card">
          <div className="card-header">
            <h2 className="new-price">{t("Liste des utilisateurs")}</h2>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              {isMobile ? (
                <table className="table" id="table1">
                  <tbody>
                    <tr>
                      <td>{t("Nom")}</td>
                      <td>Alex</td>
                    </tr>
                    <tr>
                      <td>{t("Pseudo")}</td>
                      <td>vehi</td>
                    </tr>
                    <tr>
                      <td>{t("Role")}</td>
                      <td>Lorem</td>
                    </tr>
                    <tr>
                      <td>{t("Détail")}</td>
                      <td>
                        <Link to='/UtilisateurDetails'>
                          <i className="fa-solid fa-eye"></i>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>{t("Modifier")}</td>
                      <td>
                        <Link to='/UtilisateurEdit'>
                          <i className="fa-solid fa-pen-to-square"></i>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>{t("Bloquer")}</td>
                      <td>
                        <i className="fa-solid fa-lock" onClick={handleBlockClick}></i>
                      </td>
                    </tr>
                    <tr>
                      <td>{t("Débloquer")}</td>
                      <td>
                        <i className="fa-solid fa-lock-open" onClick={handleUnblockClick}></i>
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
                      <th>{t("Nom")}</th>
                      <th>{t("Pseudo")}</th>
                      <th>{t("Role")}</th>
                      <th>{t("Détail")}</th>
                      <th>{t("Modifier")}</th>
                      <th>{t("Bloquer")}</th>
                      <th>{t("Débloquer")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Alex</td>
                      <td>vehi</td>
                      <td>Lorem</td>
                      <td>
                        <Link to='/UtilisateurDetails'>
                          <i className="fa-solid fa-eye"></i>
                        </Link>
                      </td>
                      <td>
                        <Link to='/UtilisateurEdit'>
                          <i className="fa-solid fa-pen-to-square"></i>
                        </Link>
                      </td>
                      <td>
                        <i className="fa-solid fa-lock" onClick={handleBlockClick}></i>
                      </td>
                      <td>
                        <i className="fa-solid fa-lock-open" onClick={handleUnblockClick}></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TableUtilisateur;
