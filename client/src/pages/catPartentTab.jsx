import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const DataTable = () => {
  let { data } = useParams();
  useEffect(() => {

    document.querySelectorAll(".deleteIcon").forEach((icon) => {
      icon.addEventListener("click", () => {
        // Show SweetAlert confirmation dialog
        Swal.fire({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this item!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          closeOnConfirm: false,
          closeOnCancel: false,
        }).then((result) => {
          if (result.isConfirmed) {
            // Perform delete action here
            Swal.fire("Deleted!", "Your item has been deleted.", "success");
          } else {
            Swal.fire("Cancelled", "Your item is safe :)", "error");
          }
        });
      });
    });

    document.querySelectorAll(".blockIcon").forEach((icon) => {
      icon.addEventListener("click", () => {
        // Show SweetAlert confirmation dialog
        Swal.fire({
          title: "Are you sure?",
          text: "Once disabled, you will not be able to recover this item!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, disable it!",
          cancelButtonText: "No, cancel!",
          closeOnConfirm: false,
          closeOnCancel: false,
        }).then((result) => {
          if (result.isConfirmed) {
            // Perform disable action here
            Swal.fire("Disabled!", "Your item has been disabled.", "success");
          } else {
            Swal.fire("Cancelled", "Your item is safe :)", "error");
          }
        });
      });
    });
  }, []);

  return (
    <div id="app">
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3"></i>
          </a>
        </header>
        <div className="page-heading">
          <div className="page-title">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 order-last"></div>
            </div>
          </div>
          <section className="section">
            <div className="card">
              <div className="card-header">
                <h3 className="new-price">Liste des catégories filles</h3>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table" id="table1">
                    <thead>
                      <tr>
                        <th>Libellé</th>
                        <th>Statut</th>
                        <th>Supprimer</th>
                        <th>Désactiver</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Lorem</td>
                        <td>
                          <button className="btn btn-success">Publié</button>
                        </td>
                        <td>
                          <i className="bi bi-trash3-fill deleteIcon"></i>
                        </td>
                        <td>
                          <i className="bi bi-lock-fill blockIcon"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>Lorem</td>
                        <td>
                          <button className="btn btn-success">Publié</button>
                        </td>
                        <td>
                          <i className="bi bi-trash3-fill deleteIcon"></i>
                        </td>
                        <td>
                          <i className="bi bi-lock-fill blockIcon"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>Lorem</td>
                        <td>
                          <button className="btn btn-success">Publié</button>
                        </td>
                        <td>
                          <i className="bi bi-trash3-fill deleteIcon"></i>
                        </td>
                        <td>
                          <i className="bi bi-lock-fill blockIcon"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>Lorem</td>
                        <td>
                          <button className="btn btn-success">Publié</button>
                        </td>
                        <td>
                          <i className="bi bi-trash3-fill deleteIcon"></i>
                        </td>
                        <td>
                          <i className="bi bi-lock-fill blockIcon"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>Lorem</td>
                        <td>
                          <button className="btn btn-success">Publié</button>
                        </td>
                        <td>
                          <i className="bi bi-trash3-fill deleteIcon"></i>
                        </td>
                        <td>
                          <i className="bi bi-lock-fill blockIcon"></i>
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
};

export default DataTable;
