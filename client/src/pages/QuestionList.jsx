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
        // After successful deletion, you can update the UI accordingly
        deleteItem();
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
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
    // After successful deletion, you can update the UI accordingly
  };

  return (
    <div className="content">
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3" />
          </a>
        </header>
        <div className="page-heading">
          <div className="page-title">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 order-last">
                {/* <h3>Questions fréquentes</h3> */}
              </div>
              <div className="col-12 col-md-6 order-md-2 order-first">
                <nav
                  aria-label="breadcrumb"
                  className="breadcrumb-header float-start float-lg-end"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Questions fréquentes
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
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
        <footer>
          <div className="footer clearfix mb-0 text-muted">
            <div className="float-start">
              <p>2024 © Mazed</p>
            </div>
            <div className="float-end">
              <p>
                Crafted with
                <span className="text-danger">
                  <i className="bi bi-heart-fill icon-mid" />
                </span>
                by <a href="https://TSAST.me">TSAST</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default QuestionList;
