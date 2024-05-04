import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { GlobalState } from "../GlobalState";

function CategoryList() {
  const state = useContext(GlobalState);
  const categories = state.Categories;
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
        Swal.fire("Supprimé(e) !", "Votre élément a été supprimé.", "success");
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
          "success"
        );
      } else {
        Swal.fire("Annulé", "Votre élément est en sécurité :)", "error");
      }
    });
  };

  const handleArrowClick = () => {
    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: "Are you sure?",
      text: "Once disabled, you will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((result) => {
      if (result.isConfirmed) {
        // Call deleteItem function
        deleteItem();
        Swal.fire("Disabled!", "Your item has been disabled.", "success");
      } else {
        Swal.fire("Cancelled", "Your item is safe :)", "error");
      }
    });
  };

  const deleteItem = () => {
    // Implement your delete logic here
  };

  const activateDeactivateItem = () => {
    // Implement your activate/deactivate logic here
  };

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
                    <h2 className="new-price">Liste de catégories</h2>
                  </div>
                  <div className="row" style={{ padding: "0 20px" }}>
                    <div className="col-md-4 mb-4">
                      <h6>Type</h6>
                      <fieldset className="form-group">
                        <select className="form-select" id="basicSelect1">
                          <option disabled selected>
                            Choisissez le type
                          </option>
                          <option>Parente</option>
                          <option>Fille</option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-md-4 mb-4">
                      <h6>Statut</h6>
                      <fieldset className="form-group">
                        <select className="form-select" id="basicSelect2">
                          <option disabled selected>
                            Choisissez le statut
                          </option>
                          <option>Publiée</option>
                          <option>Brouillon</option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-md-4 mb-4">
                      <h6>Etat</h6>
                      <fieldset className="form-group">
                        <select className="form-select" id="basicSelect3">
                          <option disabled selected>
                            Choisissez État
                          </option>
                          <option>Activée</option>
                          <option>Désactivée</option>
                        </select>
                      </fieldset>
                    </div>
                  </div>

                <div className="card-content">
                  <div className="table-responsive">
                    <table className="table" id="table1">
                      <thead>
                        <tr>
                          <th>Libellé</th>
                          <th>Détail</th>
                          <th>Modifier</th>
                          <th>Désactiver</th>
                          <th>Supprimer</th>
                          <th>Mettre a l'une</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories?categories.map((cat)=>(
                          <tr>
                          <td className="text-bold-500">{cat.libeléCategorie}</td>
                          <td>
                          <Link to={{
                pathname: `/editcat/${cat.id}`,
                state: { catData: cat }
              }}>
                            <i className="fa-solid fa-eye"></i>
                            </Link>
                          </td>
                          <td>
                          <Link to={"/catdetail"}>
                            <i className="fa-solid fa-pen-to-square"></i>
                            </Link>
                          </td>
                          <td><i className="fa-solid fa-ban" onClick={handleBan}></i></td>
                          <td><i className="fa-solid fa-trash deleteIcon" onClick={handleDelete}></i></td>
                          <td><i className="fa-solid fa-box-archive arrowIcon" onClick={handleArrowClick}></i></td>
                        </tr>
                        )):<div>loading</div>}
                        
                        
                      </tbody>
                    </table>
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
