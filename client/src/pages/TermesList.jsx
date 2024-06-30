import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

function TermesList() {
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

  // Function to handle item deletion
  const handleDelete = () => {
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
        Swal.fire({   title: "Supprimer",
          text: "Votre élément est Supprimer:)",
          icon: "Succes",
          confirmButtonColor: "#b0210e",
        });       } else {
          Swal.fire({   title: "Annulé",
            text: "Votre élément est en sécurité :)",
            icon: "error",
            confirmButtonColor: "#b0210e",
          });       }
    });
  };

  const deleteItem = () => {
    // Your delete logic here
  };

  return (
    <div className="content-container">
      <div id="main">
        <div className="page-heading">
          <section className="section">
            <div className="card">
              <div className="card-header">
                <h2 className="new-price">{t("Termes et conditions")}</h2>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  {isMobile ? (
                    <table className="table" id="table1">
                      <tbody>
                        <tr>
                          <td>{t("Date de création")}</td>
                          <td>{t("05/05/2024")}</td>
                        </tr>
                        <tr>
                          <td>{t("Sujet")}</td>
                          <td>{t("création d'un compte acheteur")}</td>
                        </tr>
                        <tr>
                          <td>{t("Voir")}</td>
                          <td>
                            <Link to="/TermsAcheteur">
                              <i className="fa-solid fa-eye"></i>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>{t("Editer")}</td>
                          <td>
                            <Link to="/TermeEdit">
                              <i className="fa-solid fa-pen-to-square"></i>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>{t("Supprimer")}</td>
                          <td>
                            <i onClick={handleDelete} className="fa-solid fa-trash"></i>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="2"><hr /></td>
                        </tr>
                        <tr>
                          <td>{t("Date de création")}</td>
                          <td>{t("05/05/2024")}</td>
                        </tr>
                        <tr>
                          <td>{t("Sujet")}</td>
                          <td>{t("création d'un compte vendeur")}</td>
                        </tr>
                        <tr>
                          <td>{t("Voir")}</td>
                          <td>
                            <Link to="/TermsAcheteur">
                              <i className="fa-solid fa-eye"></i>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>{t("Editer")}</td>
                          <td>
                            <Link to="/TermeEdit">
                              <i className="fa-solid fa-pen-to-square"></i>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>{t("Supprimer")}</td>
                          <td>
                            <i onClick={handleDelete} className="fa-solid fa-trash"></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ) : (
                    <table className="table" id="table1">
                      <thead>
                        <tr>
                          <th>{t("Date de création")}</th>
                          <th>{t("Sujet")}</th>
                          <th>{t("Voir")}</th>
                          <th>{t("Editer")}</th>
                          <th>{t("Supprimer")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t("05/05/2024")}</td>
                          <td>{t("création d'un compte acheteur")}</td>
                          <th>
                            <Link to="/TermsAcheteur">
                              <i className="fa-solid fa-eye"></i>
                            </Link>
                          </th>
                          <th>
                            <Link to="/TermeEdit">
                              <i className="fa-solid fa-pen-to-square"></i>
                            </Link>
                          </th>
                          <th>
                            <i onClick={handleDelete} className="fa-solid fa-trash"></i>
                          </th>
                        </tr>
                        <tr>
                          <td>{t("05/05/2024")}</td>
                          <td>{t("création d'un compte vendeur")}</td>
                          <th>
                            <Link to="/TermsAcheteur">
                              <i className="fa-solid fa-eye"></i>
                            </Link>
                          </th>
                          <th>
                            <Link to="/TermeEdit">
                              <i className="fa-solid fa-pen-to-square"></i>
                            </Link>
                          </th>
                          <th>
                            <i onClick={handleDelete} className="fa-solid fa-trash"></i>
                          </th>
                        </tr>
                        <tr>
                          <td>{t("05/05/2024")}</td>
                          <td>{t("participation à une enchère")}</td>
                          <th>
                            <Link to="/TermsAcheteur">
                              <i className="fa-solid fa-eye"></i>
                            </Link>
                          </th>
                          <th>
                            <Link to="/TermeEdit">
                              <i className="fa-solid fa-pen-to-square"></i>
                            </Link>
                          </th>
                          <th>
                            <i onClick={handleDelete} className="fa-solid fa-trash"></i>
                          </th>
                        </tr>
                        <tr>
                          <td>{t("05/05/2024")}</td>
                          <td>{t("enchérir")}</td>
                          <th>
                            <Link to="/TermsAcheteur">
                              <i className="fa-solid fa-eye"></i>
                            </Link>
                          </th>
                          <th>
                            <Link to="/TermeEdit">
                              <i className="fa-solid fa-pen-to-square"></i>
                            </Link>
                          </th>
                          <th>
                            <i onClick={handleDelete} className="fa-solid fa-trash"></i>
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
  );
}

export default TermesList;
