import React, { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { GlobalState } from "../GlobalState";

function ListeAdministrateur() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const state = useContext(GlobalState);
  const admins = state.Admins
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1212);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBlock = () => {
    Swal.fire({
      title: t("Êtes-vous sûr?"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: t("Oui"),
      cancelButtonText: t("Non, annuler!"),
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(t("Fait"));
      } else {
        Swal.fire(t("Annulé"), t("Votre élément est en sécurité :)"), "error");
      }
    });
  };

  const handleUnblock = () => {
    Swal.fire({
      title: t("Êtes-vous sûr?"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: t("Oui"),
      cancelButtonText: t("Non, annuler!"),
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(t("Fait"));
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
                {isMobile ? (
                  <div className="table-responsive">
                    <table className="table" id="table1">
                      <tbody>
                        {admins&& admins.map((item)=>(
                          <>
                                                  <tr>
                                                  <td>{t("Nom")}</td>
                                                  <td>{item.prenom}</td>
                                                </tr>
                                                <tr>
                                                  <td>{t("Pseudo")}</td>
                                                  <td>{item.pseudo}</td>
                                                </tr>
                                                <tr>
                                                  <td>{t("Role")}</td>
                                                  <td>{item.roleAdmin.name}</td>
                                                </tr>
                                                <tr>
                                                  <td>{t("Modifier")}</td>
                                                  <td>
                                                    <a href="utilisateur-edit.html">
                                                      <i className="fa-solid fa-pen-to-square"></i>
                                                    </a>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td>{t("Bloquer")}</td>
                                                  <td>
                                                    <i className="fa-solid fa-lock" onClick={handleBlock}></i>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td>{t("Débloquer")}</td>
                                                  <td>
                                                    <i className="fa-solid fa-lock-open" onClick={handleUnblock}></i>
                                                  </td>
                                                </tr>
                                                </>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
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
                        {admins && admins.map((item)=>(
                          <tr>
                          <td>{item.prenom}</td>
                          <td>{item.identifiant}</td>
                          <td>{item.roleAdmin.name}</td>
                          <td>
                            <a href="utilisateur-edit.html">
                              <i className="fa-solid fa-pen-to-square"></i>
                            </a>
                          </td>
                          <td>
                            <i className="fa-solid fa-lock" onClick={handleBlock}></i>
                          </td>
                          <td>
                            <i className="fa-solid fa-lock-open" onClick={handleUnblock}></i>
                          </td>
                        </tr>
                        ))}
                        
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ListeAdministrateur;
