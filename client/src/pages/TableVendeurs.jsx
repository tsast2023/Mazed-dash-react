import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useTranslation } from 'react-i18next';

function TableVendeurs() {
  const { t } = useTranslation();
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
        Swal.fire(t("Débloquer"), t("Votre élément a été débloquer."), "secondary");
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
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3" />
          </a>
        </header>
        <section className="section">
          <div className="card">
            <div className="card-header">
              <h2 className="new-price">{t("Liste des vendeurs")}</h2>
            </div>
            <div className="row" style={{ padding: "0 20px" }}>
              <div className="col-md-6 mb-4">
                <h6>{t("Statut")}</h6>
                <fieldset className="form-group">
                  <select className="form-select" id="basicSelect1">
                    <option>{t("Particulier")}</option>
                    <option>{t("Professionel")}</option>
                  </select>
                </fieldset>
              </div>
              <div className="col-md-6 mb-4">
                <h6>{t("Etat")}</h6>
                <fieldset className="form-group">
                  <select className="form-select" id="basicSelect2">
                    <option>{t("Accepte")}</option>
                    <option>{t("Non confirmé")}</option>
                    <option>{t("Refuse")}</option>
                  </select>
                </fieldset>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table" id="table1">
                  <thead>
                    <tr>
                      <th>{t("Nom")}</th>
                      <th>{t("Pseudo")}</th>
                      <th>{t("Date inscription")}</th>
                      <th>{t("Produits déposés dans boutique")}</th>
                      <th>{t("Produits déposés aux enchères")}</th>
                      <th>{t("Détail")}</th>
                      <th>{t("Bloquer")}</th>
                      <th>{t("Débloquer")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Alex</td>
                      <td>vehi</td>
                      <td>20202020</td>
                      <td>1</td>
                      <td>1</td>
                      <td>
                        <Link to='/VendeurDetails' >
                          <i className="fa-solid fa-eye"></i>
                        </Link>
                      </td>
                      <th>
                        <i onClick={handleBlockClick} className="fa-solid fa-lock"></i>
                      </th>
                      <td>
                        <i onClick={handleUnblockClick} className="fa-solid fa-unlock"></i>
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
  );
}

export default TableVendeurs;
