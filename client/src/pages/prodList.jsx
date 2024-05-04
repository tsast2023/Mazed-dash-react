import React from 'react';
import Swal from 'sweetalert2';

function ProdList() {
  const deleteItem = () => {
    // Function to delete item
  };

  return (
    <div className="content-container">
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
              <div className="col-12 col-md-6 order-md-1 order-last">
                {/* <h3>Produits</h3> */}
              </div>
            </div>
          </div>
          <section className="section">
            <div className="card">
              <div className="card-header">
                <h2 className="new-price">Listes des Produits</h2>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table" id="table1">
                    <thead>
                      <tr>
                        <th>Réf</th>
                        <th>Libellé</th>
                        <th>Image</th>
                        <th>Stock initial</th>
                        <th>Stock actuel</th>
                        <th>Statut</th>
                        <th>Détail</th>
                        <th>Editer</th>
                        <th>Supprimer</th>
                        <th>Désactiver</th>
                        <th>Mettre a l'une</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>01121</td>
                        <td>Lorem</td>
                        <td><img src="" alt="img" /></td>
                        <th>50</th>
                        <th>10</th>
                        <th><button className="btn btn-success">Publié</button></th>
                        <th>
                          <section id="basic-modals">
                            <a href="prod-details.html" className="btn btn-outline block">
                              <i className="fa-solid fa-eye font-medium-1"></i>
                            </a>
                          </section>
                        </th>
                        <th>
                          <section id="basic-modals">
                            <a href="Prod-edit.html?productId=01121&productName=Lorem&initialStock=50&currentStock=10" className="btn btn-outline block">
                              <i className="fa-solid fa-pen-to-square font-medium-1"></i>
                            </a>
                          </section>
                        </th>
                        <th><i className="fa-solid fa-trash deleteIcon font-medium-1" onClick={() => {
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
                              deleteItem();
                              Swal.fire("Deleted!", "Your item has been deleted.", "success");
                            } else {
                              Swal.fire("Cancelled", "Your item is safe :)", "error");
                            }
                          });
                        }}></i></th>
                        <th><i className="fa-solid fa-ban blockIcon" onClick={() => {
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
                              deleteItem();
                              Swal.fire("Disabled!", "Your item has been disable.", "success");
                            } else {
                              Swal.fire("Cancelled", "Your item is safe :)", "error");
                            }
                          });
                        }}></i></th>
                        <th><i className="fa-solid fa-box-archive arrowIcon" onClick={() => {
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
                              deleteItem();
                              Swal.fire("Disabled!", "Your item has been disable.", "success");
                            } else {
                              Swal.fire("Cancelled", "Your item is safe :)", "error");
                            }
                          });
                        }}></i></th>
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
    </div>
  );
}

export default ProdList;
