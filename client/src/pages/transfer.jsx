import React from "react";
import Swal from "sweetalert2";
import { useTranslation } from 'react-i18next';

function Modal() {
  return (
    <div
      className="modal fade text-left"
      id="default"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="myModalLabel1">
              Cause
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="card-body">
            <div className="form-group with-title mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn" data-bs-dismiss="modal">
              <i className="bx bx-x d-block d-sm-none"></i>
              <span className="d-none d-sm-block">Férme</span>
            </button>
            <button
              type="button"
              className="btn btn-primary ms-1"
              data-bs-dismiss="modal"
            >
              <i className="bx bx-check d-block d-sm-none"></i>
              <span className="d-none d-sm-block">Envoyer</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableRow({ userData, status, onAccept }) {
  return (
    <tr>
      <td>{userData.name}</td>
      <td>{userData.vehicle}</td>
      <td>{userData.value}</td>
      <td>{userData.location}</td>
      <td>{userData.note}</td>
      <td>
        <span className={`badge bg-${status.color}`}>{status.text}</span>
      </td>
      <td>
        <i
          className="fa-solid fa-circle-check"
          onClick={onAccept}
        ></i>
      </td>
      <td>
        <section id="basic-modals">
          {/* Button trigger for basic modal */}
          <button
            type="button"
            className="btn btn-outline block"
            data-bs-toggle="modal"
            data-bs-target="#default"
          >
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
          <Modal />
        </section>
      </td>
    </tr>
  );
}

function Transfer() {
  const { t } = useTranslation();

  const data = [
    {
      name: "Graiden",
      vehicle: "vehicula",
      value: "076",
      location: "Offenburg",
      note: "Lorem",
      status: {
        text: "Accepté",
        color: "secondary",
      },
    },
    {
      name: "Graiden",
      vehicle: "vehicula",
      value: "076",
      location: "Offenburg",
      note: "Lorem",
      status: {
        text: "Refusé",
        color: "danger",
      },
    },
    {
      name: "Graiden",
      vehicle: "vehicula",
      value: "076",
      location: "Offenburg",
      note: "Lorem",
      status: {
        text: "En attente",
        color: "warning",
      },
    },
  ];

  const handleAccept = () => {
    Swal.fire({
      title: t("Êtes-vous sûr(e) ?"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: t("Oui"),
      cancelButtonText: t("Non, annuler !"),
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((result) => {
      if (result.isConfirmed) {
        // Call deleteItem function or equivalent action
        deleteItem();
        Swal.fire(
          t("Accepté"),
          t("Votre élément a été Accepté."),
          "secondary"
        );
      } else {
        Swal.fire(
          t("Annulé"),
          t("Votre élément est en sécurité :)"),
          "error"
        );
      }
    });
  };

  // Dummy deleteItem function for demonstration
  const deleteItem = () => {
    console.log("Item deleted");
  };

  return (
    <div className="content-container">
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3"></i>
          </a>
        </header>

        <div className="page-heading">
          <section className="section">
            <div className="card">
              <div className="card-header">
                <h2 className="new-price">Demandes de transferts</h2>
              </div>
              <div className="card-body">
                <div className="table-responsive datatable-minimal">
                  <table className="table" id="table2">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Utilisateur</th>
                        <th>Valeur</th>
                        <th>Type</th>
                        <th>Pièce jointe</th>
                        <th>Statut</th>
                        <th>Accepter</th>
                        <th>Refuser</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <TableRow
                          key={index}
                          userData={item}
                          status={item.status}
                          onAccept={handleAccept}
                        />
                      ))}
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

export default Transfer;
