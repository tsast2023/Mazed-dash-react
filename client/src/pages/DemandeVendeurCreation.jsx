import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../css/DemandeCreation.css";


function DemandeVendeurCreation() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1212);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBlock = () => {
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
        Swal.fire({
          text: "Valider ! The administrator has been Valide.",
          icon: "success",
          confirmButtonColor: "#b0210e",
        });
      } else {
        Swal.fire({
          text: "Cancelled , The administrator is safe :)",
          icon: "error",
          confirmButtonColor: "#b0210e",
        });
      }
    });
  };

  const handleUnblock = () => {
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
        Swal.fire({
          text: "Refuser! , The administrator has been Refuse.",
          icon: "success",
          confirmButtonColor: "#b0210e",
        });
      } else {
        Swal.fire({
          text: "Cancelled , The administrator remains blocked :)",
          icon: "error",
          confirmButtonColor: "#b0210e",
        });
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
                {isMobile ? (
                  <table className="table" id="table1">
                    <tbody>
                      <tr>
                        <td>Profile Image</td>
                        <td>
                          <img className="imgtable" src="./Mazed.jpg" alt="img" />
                        </td>
                      </tr>
                      <tr>
                        <td>Prenom</td>
                        <td>Kross</td>
                      </tr>
                      <tr>
                        <td>Date De Naissance</td>
                        <td>08/06/2024</td>
                      </tr>
                      <tr>
                        <td>Nom Famille</td>
                        <td>vehi</td>
                      </tr>
                      <tr>
                        <td>Pseudo</td>
                        <td>Alex</td>
                      </tr>
                      <tr>
                        <td>Nom Societé</td>
                        <td>Tsast</td>
                      </tr>
                      <tr>
                        <td>Num Tel</td>
                        <td>69 696 969</td>
                      </tr>
                      <tr>
                        <td>Valider</td>
                        <td>
                          <i onClick={handleBlock} className="fa-solid fa-check"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>Refuser</td>
                        <td>
                          <i onClick={handleUnblock} className="fa-solid fa-xmark"></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <table className="table" id="table1">
                    <thead>
                      <tr>
                        <th>Profile Image</th>
                        <th>Prenom</th>
                        <th>Date De Naissance</th>
                        <th>Nom Famille</th>
                        <th>Pseudo</th>
                        <th>Nom Societé</th>
                        <th>Num Tel</th>
                        <th>Valider</th>
                        <th>Refuser</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img className="imgtable" src="./Mazed.jpg" alt="img" />
                        </td>
                        <td>Kross</td>
                        <td>08/06/2024</td>
                        <td>vehi</td>
                        <td>Alex</td>
                        <td>Tsast</td>
                        <td>69 696 969</td>
                        <td>
                          <i onClick={handleBlock} className="fa-solid fa-check"></i>
                        </td>
                        <td>
                          <i onClick={handleUnblock} className="fa-solid fa-xmark"></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </section>
        </div>
        <footer>
          <div className="footer clearfix mb-0 text-muted"></div>
        </footer>
      </div>
    </div>
  );
}

export default DemandeVendeurCreation;
