import "../css/DemandeCreation.css";
import React from 'react'
import Swal from "sweetalert2";


function DemandeVendeurCreation() {
    const handleBlock = () => {
        // Show SweetAlert confirmation dialog
        Swal.fire({
          title: "Are you sure?",
          text: "Once disabled, you will not be able to recover this item!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, Valider it!",
          cancelButtonText: "No , cancel!",
          closeOnConfirm: false,
          closeOnCancel: false,
        }).then((result) => {
          if (result.isConfirmed) {
            // Perform the blocking action here
            // For example, you can make an AJAX request to disable the administrator
            // After successful blocking, you can update the UI accordingly
            Swal.fire("Valider!", "The administrator has been Valide.", "success");
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
          confirmButtonText: "Yes !",
          cancelButtonText: "No , cancel!",
          closeOnConfirm: false,
          closeOnCancel: false,
        }).then((result) => {
          if (result.isConfirmed) {
            // Perform the unblocking action here
            // For example, you can make an AJAX request to enable the administrator
            // After successful unblocking, you can update the UI accordingly
            Swal.fire("Refuser!", "The administrator has been Refuse.", "success");
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
              <h2 className="new-price">Demande de Creation</h2>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <table className="table" id="table1">
                  <thead>
                    <tr>
                        
                      <th>Profile Image</th>
                      <th>Nom</th>
                      <th>Prenom</th>
                      <th>Date De Naissance</th>
                      <th>Nom Famille</th>
                      <th>Pseudo</th>
                      <th>Photo de Profil</th>
                      <th>Nom Societé</th>
                      <th>Num Tel</th>
                      <th>Valider</th>
                      <th>Refuser</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <td >                      <img className="imgtable" src="./Mazed.jpg" alt="img" />
                    </td>
                      <td>Toni</td>
                      <td>Kross</td>
                      <td>08/06/2024</td>
                      <td>vehi</td>
                      <td>Alex</td>
                      <td>Photo</td>
                      <td>Tsast</td>
                      <td>69 696 969</td>
                      <td>
                     
                          <i onClick={handleBlock} class="fa-solid fa-check"></i>
                      </td>
                      <td>
              
                          <i onClick={handleUnblock} class="fa-solid fa-xmark"></i>
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
          
        </div>
      </footer>
    </div>
  </div>
  )
}

export default DemandeVendeurCreation