import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { GlobalState } from "../GlobalState";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function CategoryList() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const state = useContext(GlobalState);
  const categories = state.Categories;
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

  const handleDelete = () => {
    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: t("Êtes-vous sûr(e) ?"),
      text: t(
        "Une fois supprimé(e), vous ne pourrez pas récupérer cet élément !"
      ),
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
        Swal.fire(t("Annulé"), t("Votre élément est en sécurité :)"), "error");
      }
    });
  };

  const handleBan = () => {
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
        // Call activateDeactivateItem function
        activateDeactivateItem();
        Swal.fire(
          t("Désactivé(e) !"),
          t("Votre élément a été désactivé."),
          "secondary"
        );
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
        // Call relevant action
        handleAction();
        Swal.fire(
          t("Effectué !"),
          t("Votre élément a été mis à l'une."),
          "secondary"
        );
      } else {
        Swal.fire(t("Annulé"), t("Votre élément est en sécurité :)"), "error");
      }
    });
  };

  const deleteItem = () => {
    // Implement delete logic
  };

  const activateDeactivateItem = () => {
    // Implement activate/deactivate logic
  };

  const handleAction = () => {
    // Implement action logic
  };

  const DesktopTable = () => (
    <table className="table" id="table1">
      <thead>
        <tr>
          <th>{t("Libellé")}</th>
          <th>{t("Détail")}</th>
          <th>{t("Modifier")}</th>
          <th>{t("Désactiver")}</th>
          <th>{t("Supprimer")}</th>
          <th>{t("Mettre a l'une")}</th>
        </tr>
      </thead>
      <tbody>
        {categories ? (
          categories.map((cat, index) => (
            <tr key={index}>
              <td className="text-bold-500">{cat.libeléCategorie}</td>
              <td>
                <a
                  onClick={() =>
                    navigate(`/catdetail/${cat.id}`, {
                      state: { cat },
                    })
                  }
                >
                  <i className="fa-solid fa-eye"></i>
                </a>
              </td>
              <td>
                <Link to={"/catmodif"}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>
              </td>
              <td>
                <i className="fa-solid fa-ban" onClick={handleBan}></i>
              </td>
              <td>
                <i
                  className="fa-solid fa-trash deleteIcon"
                  onClick={handleDelete}
                ></i>
              </td>
              <td>
                <i
                  className="fa-solid fa-star arrowIcon"
                  onClick={handleArrowClick}
                ></i>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">Loading...</td>
          </tr>
        )}
      </tbody>
    </table>
  );

  const MobileTable = () => (
    <table style={{ width: "100%", textAlign: "center" }}>
      <tbody>
        {categories ? (
          categories.map((cat, index) => (
            <React.Fragment key={index}>
              <tr>
                <td>
                  <hr />
                  <th>{t("Libellé")}</th>
                </td>
              </tr>
              <tr>
                <td className="text-bold-500">{cat.libeléCategorie}</td>
              </tr>
              <tr>
                <td>
                  <th>{t("Détail")}</th>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    onClick={() =>
                      navigate(`/catdetail/${cat.id}`, {
                        state: { cat },
                      })
                    }
                  >
                    <i className="fa-solid fa-eye"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <th>{t("Modifier")}</th>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to={"/catmodif"}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <th>{t("Désactiver")}</th>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa-solid fa-ban" onClick={handleBan}></i>
                </td>
              </tr>
              <tr>
                <td>
                  <th>{t("Supprimer")}</th>
                </td>
              </tr>
              <tr>
                <td>
                  <i
                    className="fa-solid fa-trash deleteIcon"
                    onClick={handleDelete}
                  ></i>
                </td>
              </tr>
              <tr>
                <td>
                  <th>{t("Mettre a l'une")}</th>
                </td>
              </tr>
              <tr>
                <td>
                  <i
                    className="fa-solid fa-star arrowIcon"
                    onClick={handleArrowClick}
                  ></i>
                </td>
              </tr>
            </React.Fragment>
          ))
        ) : (
          <tr>
            <td>Loading...</td>
          </tr>
        )}
      </tbody>
    </table>
  );

  return (
    <div className="content-container">
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3"></i>
          </a>
        </header>

        <div className="page-heading">
          <section className="section">
            <div className="row" id="table-head">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h2 className="new-price">{t("Liste de catégories")}</h2>
                  </div>
                  <div className="card-content">
                    <div className="row" style={{ padding: "0 20px" }}>
                      <div className="col-md-4 mb-4">
                        <h6>{t("Type")}</h6>
                        <fieldset className="form-group">
                          <select className="form-select" id="basicSelect1">
                            <option disabled selected>
                              {t("Choisissez le type")}
                            </option>
                            <option> Parente </option>
                            <option> Fille </option>
                          </select>
                        </fieldset>
                      </div>
                      <div className="col-md-4 mb-4">
                        <h6> Statut </h6>
                        <fieldset className="form-group">
                          <select className="form-select" id="basicSelect2">
                            <option disabled selected>
                              {t("Choisissez le statut")}
                            </option>
                            <option> Publiée </option>
                            <option> Brouillon </option>
                          </select>
                        </fieldset>
                      </div>
                      <div className="col-md-4 mb-4">
                        <h6>{t("Etat")}</h6>
                        <fieldset className="form-group">
                          <select className="form-select" id="basicSelect3">
                            <option disabled selected>
                              {t("Choisissez État")}
                            </option>
                            <option> Activée </option>
                            <option> Désactivée </option>
                          </select>
                        </fieldset>
                      </div>
                    </div>
                    <div>
                      {isMobile ? <MobileTable /> : <DesktopTable />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
