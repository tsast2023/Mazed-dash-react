import React from "react";
import { Link } from "react-router-dom";

function TableParticipant() {
  return (
    <div className="content-container">
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3" />
          </a>
        </header>
        <section className="section">
          <div className="card">
            <div className="card-header">
              <h2 className="new-price">Liste des participants</h2>
            </div>
            <div className="row" style={{ padding: "0 20px" }}>
              <div className="col-md-3 mb-4">
                <h6>Etat</h6>
                <fieldset className="form-group">
                  <select className="form-select" id="basicSelect1">
                    <option disabled selected>
                      Choose Etat
                    </option>{" "}
                    {/* Not selected by default */}
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </fieldset>
              </div>
              <div className="col-md-3 mb-4">
                <h6>Participe</h6>
                <fieldset className="form-group">
                  <select className="form-select" id="basicSelect2">
                    <option disabled selected>
                      Choose Participe
                    </option>{" "}
                    {/* Not selected by default */}
                    <option>Oui</option>
                    <option>Non</option>
                  </select>
                </fieldset>
              </div>
              <div className="col-md-3 mb-4">
                <h6>Gagnant</h6>
                <fieldset className="form-group">
                  <select className="form-select" id="basicSelect3">
                    <option disabled selected>
                      Choose Gagnant
                    </option>{" "}
                    {/* Not selected by default */}
                    <option>Oui</option>
                    <option>Non</option>
                  </select>
                </fieldset>
              </div>
              <div className="col-md-3 mb-4">
                <h6>Statut</h6>
                <fieldset className="form-group">
                  <select className="form-select" id="basicSelect3">
                    <option disabled selected>
                      Choose Statut
                    </option>{" "}
                    {/* Not selected by default */}
                    <option>Nouveau</option>
                    <option>Ancien</option>
                  </select>
                </fieldset>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <div
                  className="modal fade"
                  id="myModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Ajouter Montant
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <form />
                        <div className="form-group">
                          <label htmlFor="inputAmount">Montant:</label>
                          <input
                            type="number"
                            className="form-control"
                            id="inputAmount"
                            placeholder="Entrez le montant"
                          />
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Manière de recharge</label>
                            <select className="choices form-select">
                              <option value="square">Virement bancaire</option>
                              <option value="rectangle">Chèque</option>
                              <option value="rombo">Transfert du solde</option>
                              <option value="romboid">
                                Visite Bureau Mazed
                              </option>
                              <option value="trapeze">Carte de recharge</option>
                            </select>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Ajouter
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <table className="table" id="table1">
                  <thead>
                    <tr>
                      <th>Nom et prénom</th>
                      <th>Pseudo</th>
                      <th>Num tél</th>
                      <th>Date inscri</th>
                      <th>Nbr d'achats</th>
                      <th>Nbr d'enchères</th>
                      <th>Détail</th>
                      <th>Bloquer</th>
                      <th>Débloquer</th>
                      <th>Solde</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Alex</td>
                      <td>vehi</td>
                      <td>20202020</td>
                      <td>01/01/2024</td>
                      <td>1</td>
                      <td>1</td>
                      <td>
                        <Link to={'/ParticipantDetail'}>
                        <i className="fa-solid fa-eye"></i>
                        </Link>
                      </td>
                      <td>
                      <i className="fa-solid fa-lock"></i>
                      </td>
                      <td>
                      <i className="fa-solid fa-unlock"></i>
                      </td>
                      <td>
                        <i
                          className="bi bi-cash-coin"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TableParticipant;
