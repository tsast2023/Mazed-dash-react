import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function QuestionList() {

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
    <div className="content">
      <div id="main">
        <div className="page-heading">
          <section className="section">
            <div className="card">
              <div className="card-header">
                <h2 className="new-price">List des questions</h2>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table" id="table1">
                    <thead>
                      <tr>
                        <th>La question</th>
                        <th>Date de création</th>
                        <th>Voir</th>
                        <th>Editer</th>
                        <th>Supprimer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Lorem Lorem</td>
                        <td>05/05/2024</td>
                        <th>
                          <Link to='/QuestionDetail'>
                            <i className="fa-solid fa-eye"></i>
                          </Link>
                        </th>
                        <th>
                          <Link to='/QuestionEdit'>
                            <i className="fa-solid fa-pen-to-square"></i>
                          </Link>
                        </th>
                        <th>
                         
                            <i onClick={handleDelete} className="fa-solid fa-trash"></i>
                        
                        </th>
                      </tr>
                      <tr>
                        <td>Lorem Lorem</td>
                        <td>05/05/2024</td>
                        <th>
                          <Link  to='/QuestionDetail'>
                            <i className="fa-solid fa-eye"></i>
                          </Link>
                        </th>
                        <th>
                          <Link to='/QuestionEdit'>
                            <i className="fa-solid fa-pen-to-square"></i>
                          </Link>
                        </th>
                        <th>
                         
                            <i onClick={handleDelete} className="fa-solid fa-trash"></i>
                         
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

export default QuestionList;
