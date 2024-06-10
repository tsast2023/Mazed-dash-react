import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

function TermesList() {
  const { t } = useTranslation();
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
        Swal.fire(t("Supprimé(e) !"), t("Votre élément a été supprimé."), "secondary");
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
      <div id="main">
        <div className="page-heading">
          <section className="section">
            <div className="card">
              <div className="card-header">
                <h2 className="new-price">{t("Termes et conditions")}</h2>
              </div>
              <div className="card-body">
                <div className="table-responsive">
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
