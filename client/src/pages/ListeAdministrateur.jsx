import React from "react";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

function ListeAdministrateur() {
  const { t } = useTranslation();
  const handleBlock = () => {
    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: t(`Êtes-vous sûr?`),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: t(`Oui`),
      cancelButtonText: t("Non, annuler!"),
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          t(`Fait`),
        );
      } else {
        Swal.fire(t("Annulé"), t("Votre élément est en sécurité :)"), "error");
      }
    });
  };

  // Function to handle unblocking an administrator
  const handleUnblock = () => {
    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: t(`Êtes-vous sûr?`),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: t(`Oui`),
      cancelButtonText: t("Non, annuler!"),
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          t(`Fait`),
        );
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
              <i className="bi bi-justify fs-3" />
            </a>
          </header>
          <section className="section">
            <div className="card">
              <div className="card-header">
                <h2 className="new-price">{t("Liste des administrateurs")}</h2>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table" id="table1">
                    <thead>
                      <tr>
                        <th>{t("Nom")}</th>
                        <th>{t("Pseudo")}</th>
                        <th>{t("Role")}</th>
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
                          <a href="utilisateur-edit.html">
                            <i className="fa-solid fa-pen-to-square"></i>
                          </a>
                        </td>
                        <td>
                          <i
                            onClick={handleBlock}
                            className="fa-solid fa-lock"
                          ></i>
                        </td>
                        <td>
                          <i
                            onClick={handleUnblock}
                            className="fa-solid fa-lock-open"
                          ></i>
                        </td>
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
  );
}

export default ListeAdministrateur;
