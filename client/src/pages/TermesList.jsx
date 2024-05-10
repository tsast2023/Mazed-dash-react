import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function TermesList() {

  // Function to handle item deletion
  const handleDelete = () => {
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
        // If user confirms deletion, perform the delete action here
        // For example, you can make an AJAX request to delete the item from the server
        // After secondaryful deletion, you can update the UI accordingly
        deleteItem();
        Swal.fire("Deleted!", "Your item has been deleted.", "secondary");
      } else {
        // If user cancels deletion, do nothing or show a message
        Swal.fire("Cancelled", "Your item is safe :)", "error");
      }
    });
  };

  // Function to delete the item
  const deleteItem = () => {
    // Perform the delete action here
    // For example, you can make an AJAX request to delete the item from the server
    // After secondaryful deletion, you can update the UI accordingly
  };

  return (
    <div className="content-container">
      <div id="main">
        <div className="page-heading">
          <section className="section">
            <div className="card">
              <div className="card-header">
                <h2 className="new-price">Termes et conditions</h2>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table" id="table1">
                    <thead>
                      <tr>
                        <th>Date de création</th>
                        <th>Sujet</th>
                        <th>Voir</th>
                        <th>Editer</th>
                        <th>Supprimer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>05/05/2024</td>
                        <td>création d'un compte acheteur</td>
                        <th>
                          <Link to='/TermsAcheteur'>
                            <i class="fa-solid fa-eye"></i>
                          </Link>
                        </th>
                        <th>
                          <Link to='/TermeEdit'>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </Link>
                        </th>
                        <th>
                            <i onClick={handleDelete}  class="fa-solid fa-trash"></i>
                        </th>
                      </tr>
                      <tr>
                        <td>05/05/2024</td>
                        <td>création d'un compte vendeur</td>
                        <th>
                          <Link to='/TermsAcheteur'>
                            <i class="fa-solid fa-eye"></i>
                          </Link>
                        </th>
                        <th>
                          <Link to='/TermeEdit'>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </Link>
                        </th>
                        <th>
                            <i onClick={handleDelete}  class="fa-solid fa-trash"></i>
                        </th>
                      </tr>
                      <tr>
                        <td>05/05/2024</td>
                        <td>participation à une enchère</td>
                        <th>
                          <Link to='/TermsAcheteur'>
                            <i class="fa-solid fa-eye"></i>
                          </Link>
                        </th>
                        <th>
                          <Link to='/TermeEdit'>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </Link>
                        </th>
                        <th>
                            <i onClick={handleDelete}  class="fa-solid fa-trash"></i>
                        </th>
                      </tr>
                      <tr>
                        <td>05/05/2024</td>
                        <td>enchérir</td>
                        <th>
                          <Link to='/TermsAcheteur'>
                            <i class="fa-solid fa-eye"></i>
                          </Link>
                        </th>
                        <th>
                          <Link to='/TermeEdit'>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </Link>
                        </th>
                        <th>
                            <i onClick={handleDelete}  class="fa-solid fa-trash"></i>
                        </th>
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
}

export default TermesList;
