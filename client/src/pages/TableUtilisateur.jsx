import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function TableUtilisateur() {
  const handleBlockClick = () => {
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
        Swal.fire("Disabled!", "Your item has been disabled.", "secondary");
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
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem();
        Swal.fire("Disabled!", "Your item has been disabled.", "secondary");
      } else {
        Swal.fire("Cancelled", "Your item is safe :)", "error");
      }
    });
  };

  const deleteItem = () => {
    // Your delete logic here
  };

  return (
    <div id="main">
      <header className="mb-3">
        <a href="#" className="burger-btn d-block d-xl-none">
          <i className="bi bi-justify fs-3"></i>
        </a>
      </header>
      <section className="section">
        <div className="card">
          <div className="card-header">
            <h2 className="new-price">Liste des utilisateurs</h2>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table" id="table1">
                <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Pseudo</th>
                    <th>Role</th>
                    <th>Détail</th>
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
                    <td><Link to='/UtilisateurDetails'><i className="fa-solid fa-eye"></i></Link></td>
                    
                    <td>
                      <Link to='/UtilisateurEdit' ><i className="fa-solid fa-pen-to-square"></i></Link>
                    </td>
                    <td><i className="fa-solid fa-lock" onClick={handleBlockClick}></i></td>
                    <td><i className="fa-solid fa-lock-open" onClick={handleUnblockClick}></i></td>
                  
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TableUtilisateur;
