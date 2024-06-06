import React, { useContext, useState , useEffect } from "react";
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { GlobalState } from "../GlobalState";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function CategoryList() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const state = useContext(GlobalState);
  const categories = state.Categories;
  const [isMobile , setIsMobile] = useState(false)
  const handleDelete = () => {
    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: "Êtes-vous sûr(e) ?",
      text: "Une fois supprimé(e), vous ne pourrez pas récupérer cet élément !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Oui, supprimez-le !",
      cancelButtonText: "Non, annuler !",
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((result) => {
      if (result.isConfirmed) {
        // Call deleteItem function
        deleteItem();
        Swal.fire("Supprimé(e) !", "Votre élément a été supprimé.", "secondary");
      } else {
        Swal.fire("Annulé", "Votre élément est en sécurité :)", "error");
      }
    });
  };

  const handleBan = () => {
    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: "Êtes-vous sûr(e) ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Oui, désactivez-le !",
      cancelButtonText: "Non, annuler !",
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((result) => {
      if (result.isConfirmed) {
        // Call activateDeactivateItem function
        activateDeactivateItem();
        Swal.fire(
          "Désactivé(e) !",
          "Votre élément a été désactivé.",
          "secondary"
        );
      } else {
        Swal.fire("Annulé", "Votre élément est en sécurité :)", "error");
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
        // Appeler la fonction deleteItem
        deleteItem();
        Swal.fire(t("Effectué !"), t("Votre élément a été mis à l'une."), "secondary");
      } else {
        Swal.fire(t("Annulé"), t("Votre élément est en sécurité :)"), "error");
      }
    });
  };

  const deleteItem = () => {  
    // Implement your delete logic here
  };

  const activateDeactivateItem = () => {
    // Implement your activate/deactivate logic here
  };
  useEffect(() => {
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 750);
    };
  
    window.addEventListener('resize', handleResize);
  
    // Initial check
    handleResize();
  
    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="content-container">
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
                <p className="text-subtitle text-muted"></p>
              </div>
            </div>
          </div>

          <section className="section">
            <div className="row" id="table-head">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h2 className="new-price">{t("Liste de catégories")}</h2>
                  </div>
                  <div className="row" style={{ padding: "0 20px" }}>
                    <div className="col-md-4 mb-4">
                      <h6>{t("Type")}</h6>
                      <fieldset className="form-group">
                        <select className="form-select" id="basicSelect1">
                          <option disabled selected>
                            {t("Choisissez le type")}
                          </option>
                          <option>{t("Parente")}</option>
                          <option>{t("Fille")}</option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-md-4 mb-4">
                      <h6>{t("Statut")}</h6>
                      <fieldset className="form-group">
                        <select className="form-select" id="basicSelect2">
                          <option disabled selected>
                            {t("Choisissez le statut")}
                          </option>
                          <option>{t("Publiée")}</option>
                          <option>{t("Brouillon")}</option>
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
                          <option>{t("Activée")}</option>
                          <option>{t("Désactivée")}</option>
                        </select>
                      </fieldset>
                    </div>
                  </div>

                <div className="card-content">
                  <div className="table-responsive">
                   {isMobile?  <table className="table" id="table1">
                    <thead>
                      <tr>
                      </tr>
                    </thead>
                    <tbody>
                      {categories?categories.map((cat)=>(
                        <td>
                          <th>{t("Libellé")}</th>
                        <tr className="text-bold-500">{cat.libeléCategorie}</tr>
                        <th>{t("Détail")}</th>
                        <tr>
                        <a onClick={()=>navigate(`/catdetail/${cat.id}`, { state: { cat } })} >
                          <i className="fa-solid fa-eye"></i>
                          </a>
                        </tr>
                        <th>{t("Modifier")}</th>
                        <tr>
                        <Link to={"/catmodif"}>
                          <i className="fa-solid fa-pen-to-square"></i>
                          </Link>
                        </tr>
                        <th>{t("Désactiver")}</th>
                        <tr><i className="fa-solid fa-ban" onClick={handleBan}></i></tr>
                        <th>{t("Supprimer")}</th>
                        <tr><i className="fa-solid fa-trash deleteIcon" onClick={handleDelete}></i></tr>
                        <th>{t("Mettre a l'une")}</th>
                        <tr><i className="fa-solid fa-star arrowIcon" onClick={handleArrowClick}></i></tr>
                      </td>
                      )):<div>loading</div>}
                      
                      
                    </tbody>
                  </table> :
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
                      {categories?categories.map((cat)=>(
                        <tr>
                        <td className="text-bold-500">{cat.libeléCategorie}</td>
                        <td>
                        <a onClick={()=>navigate(`/catdetail/${cat.id}`, { state: { cat } })} >
                          <i className="fa-solid fa-eye"></i>
                          </a>
                        </td>
                        <td>
                        <Link to={"/catmodif"}>
                          <i className="fa-solid fa-pen-to-square"></i>
                          </Link>
                        </td>
                        <td><i className="fa-solid fa-ban" onClick={handleBan}></i></td>
                        <td><i className="fa-solid fa-trash deleteIcon" onClick={handleDelete}></i></td>
                        <td><i className="fa-solid fa-star arrowIcon" onClick={handleArrowClick}></i></td>
                      </tr>
                      )):<div>loading</div>}
                      
                      
                    </tbody>
                  </table>}
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
