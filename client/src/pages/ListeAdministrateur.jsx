import React from "react";
import Swal from "sweetalert2";

function ListeAdministrateur() {
  
  // Function to handle blocking an administrator
  const handleBlock = () => {
    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: "Are you sure?",
      text: "Once disabled, you will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, Blocked it!",
      cancelButtonText: "No, cancel!",
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the blocking action here
        // For example, you can make an AJAX request to disable the administrator
        // After successful blocking, you can update the UI accordingly
        Swal.fire("Blocked!", "The administrator has been blocked.", "success");
      } else {
        Swal.fire("Cancelled", "The administrator is safe :)", "error");
      }
    });
  };

  // Function to handle unblocking an administrator
  const handleUnblock = () => {
    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: "Are you sure?",
      text: "Once enabled, you will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, Unblocked it!",
      cancelButtonText: "No, cancel!",
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the unblocking action here
        // For example, you can make an AJAX request to enable the administrator
        // After successful unblocking, you can update the UI accordingly
        Swal.fire("Unblocked!", "The administrator has been unblocked.", "success");
      } else {
        Swal.fire("Cancelled", "The administrator remains blocked :)", "error");
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
                <h2 className="new-price">Liste des administrateurs</h2>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table" id="table1">
                    <thead>
                      <tr>
                        <th>Nom</th>
                        <th>Pseudo</th>
                        <th>Role</th>
                        <th>Edit</th>
                        <th>Bloquer</th>
                        <th>Débloquer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Alex</td>
                        <td>vehi</td>
                        <td>Lorem</td>
                        <td>
                          <a href="utilisateur-edit.html">
                            <i className="fa-solid fa-pen-to-square"></i>
                          </a>
                        </td>
                        <td>
                       
                            <i onClick={handleBlock} className="fa-solid fa-lock"></i>
                          
                        </td>
                        <td>
                
                            <i onClick={handleUnblock} className="fa-solid fa-lock-open"></i>
                      
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Contextual classes end */}
        <footer>
          <div className="footer clearfix mb-0 text-muted">
            <div className="float-end">
              <p>2024 © Mazed</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ListeAdministrateur;
