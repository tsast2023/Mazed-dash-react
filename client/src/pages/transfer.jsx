import React from "react";

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

function TableRow({ userData, status }) {
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
        <i class="fa-solid fa-circle-check"></i>
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

function transfer() {
  const data = [
    {
      name: "Graiden",
      vehicle: "vehicula",
      value: "076",
      location: "Offenburg",
      note: "Lorem",
      status: {
        text: "Accepté",
        color: "success",
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

export default transfer;
