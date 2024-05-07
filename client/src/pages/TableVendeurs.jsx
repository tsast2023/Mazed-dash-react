import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function TableVendeurs() {
  const handleBlockClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once disabled, you will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, Block it!",
      cancelButtonText: "No, cancel!",
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem();
        Swal.fire("Disabled!", "Your item has been disable.", "success");
      } else {
        Swal.fire("Cancelled", "Your item is safe :)", "error");
      }
    });
  };

  const handleUnblockClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once disabled, you will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, Unblock it!",
      cancelButtonText: "No, cancel!",
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem();
        Swal.fire("Disabled!", "Your item has been disable.", "success");
      } else {
        Swal.fire("Cancelled", "Your item is safe :)", "error");
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
              <h2 className="new-price">Liste des vendeurs</h2>
            </div>
            <div className="row" style={{ padding: "0 20px" }}>
              <div className="col-md-6 mb-4">
                <h6>Statut</h6>
                <fieldset className="form-group">
                  <select className="form-select" id="basicSelect1">
                    <option>Particulier</option>
                    <option>Professionel</option>
                  </select>
                </fieldset>
              </div>
              <div className="col-md-6 mb-4">
                <h6>Etat</h6>
                <fieldset className="form-group">
                  <select className="form-select" id="basicSelect2">
                    <option>Accepte</option>
                    <option>Non confirmé</option>
                    <option>Refuse</option>
                  </select>
                </fieldset>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table" id="table1">
                  <thead>
                    <tr>
                      <th>Nom</th>
                      <th>Pseudo</th>
                      <th>Date inscription</th>
                      <th>Produits déposés dans boutique</th>
                      <th>Produits déposés aux enchères</th>
                      <th>Détail</th>
                      <th>Bloquer</th>
                      <th>Débloquer</th>
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
                        <i  class="fa-solid fa-eye"></i>
                        </Link>
                      </td>
                      <th>
                      <i onClick={handleBlockClick } class="fa-solid fa-lock"></i>                      </th>
                      <td>
                      <i onClick={handleUnblockClick} class="fa-solid fa-unlock"></i>                      </td>
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
