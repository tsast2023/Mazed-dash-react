import React from "react";

function ParticipantDetail() {
  return (
    <div className="content-container">
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3" />
          </a>
        </header>
        <div className="page-heading"></div>
        <div className="page-content">
          <div className="page-heading">
            <section className="section">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="avatar avatar-xl">
                          <img
                            src="assets/static/images/faces/2.jpg"
                            alt="Avatar"
                          />
                        </div>
                        <h3 className="mt-3">Nom et Prénom</h3>
                        <p className="text-small">Pseudo</p>
                      </div>
                      <div className="card-body">
                        <form action="#" method="get">
                          <div className="form-group">
                            <label htmlFor="name" className="form-label">
                              Numéro de téléphone
                            </label>
                            <input
                              type="number"
                              name="name"
                              id="name"
                              className="form-control"
                              placeholder={+12222222222}
                              defaultValue="John Doe"
                              disabled
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="name" className="form-label">
                              Date d’inscription
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="form-control"
                              placeholder={+12222222222}
                              defaultValue="John Doe"
                              disabled
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="name" className="form-label">
                              Nombre d’achats
                            </label>
                            <input
                              type="number"
                              name="name"
                              id="name"
                              className="form-control"
                              placeholder={222}
                              defaultValue="John Doe"
                              disabled
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="name" className="form-label">
                              Nombre d’enchères
                            </label>
                            <input
                              type="number"
                              name="name"
                              id="name"
                              className="form-control"
                              placeholder={22}
                              defaultValue="John Doe"
                              disabled
                            />
                          </div>
                          <div className="form-group">
                            <button type="submit" className="btn btn-danger">
                              Bloquer
                            </button>
                            <button type="submit" className="btn btn-success">
                              Débloquer
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-toggle="modal"
                              data-target="#exampleModal"
                            >
                              Ajouter du solde
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Ajouter du solde
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
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
                            <option value="romboid">Visite Bureau Mazed</option>
                            <option value="trapeze">Carte de recharge</option>
                          </select>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Ajouter
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <section className="section">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title">Liste de achats</h5>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive datatable-minimal">
                          <table className="table" id="table2">
                            <thead>
                              <tr>
                                <th>Date</th>
                                <th>produit</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Graiden</td>
                                <td>vehicula.aliquet@semconsequat.co.uk</td>
                              </tr>
                              <tr>
                                <td>Graiden</td>
                                <td>vehicula.aliquet@semconsequat.co.uk</td>
                              </tr>
                              <tr>
                                <td>Graiden</td>
                                <td>vehicula.aliquet@semconsequat.co.uk</td>
                              </tr>
                              <tr>
                                <td>Graiden</td>
                                <td>vehicula.aliquet@semconsequat.co.uk</td>
                              </tr>
                              <tr>
                                <td>Graiden</td>
                                <td>vehicula.aliquet@semconsequat.co.uk</td>
                              </tr>
                              <tr>
                                <td>Graiden</td>
                                <td>vehicula.aliquet@semconsequat.co.uk</td>
                              </tr>
                              <tr>
                                <td>Graiden</td>
                                <td>vehicula.aliquet@semconsequat.co.uk</td>
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
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <section className="section">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title">Liste de enchères</h5>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive datatable-minimal">
                          <table className="table" id="table2">
                            <thead>
                              <tr>
                                <th>Date</th>
                                <th>produit</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Graiden</td>
                                <td>vehicula.aliquet@semconsequat.co.uk</td>
                              </tr>
                              <tr>
                                <td>Graiden</td>
                                <td>vehicula.aliquet@semconsequat.co.uk</td>
                              </tr>
                              <tr>
                                <td>Graiden</td>
                                <td>vehicula.aliquet@semconsequat.co.uk</td>
                              </tr>
                              <tr>
                                <td>Graiden</td>
                                <td>vehicula.aliquet@semconsequat.co.uk</td>
                              </tr>
                              <tr>
                                <td>Graiden</td>
                                <td>vehicula.aliquet@semconsequat.co.uk</td>
                              </tr>
                              <tr>
                                <td>Graiden</td>
                                <td>vehicula.aliquet@semconsequat.co.uk</td>
                              </tr>
                              <tr>
                                <td>Graiden</td>
                                <td>vehicula.aliquet@semconsequat.co.uk</td>
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
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <section className="section">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title">Liste de transactions</h5>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive datatable-minimal">
                          <table className="table" id="table2">
                            <thead>
                              <tr>
                                <th>Date</th>
                                <th>produit</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Graiden</td>
                                <td>vehicula.aliquet@semconsequat.co.uk</td>
                              </tr>
                              <tr>
                                <td>Graiden</td>
                                <td>vehicula.aliquet@semconsequat.co.uk</td>
                              </tr>
                              <tr>
                                <td>Graiden</td>
                                <td>vehicula.aliquet@semconsequat.co.uk</td>
                              </tr>
                              <tr>
                                <td>Graiden</td>
                                <td>vehicula.aliquet@semconsequat.co.uk</td>
                              </tr>
                              <tr>
                                <td>Graiden</td>
                                <td>vehicula.aliquet@semconsequat.co.uk</td>
                              </tr>
                              <tr>
                                <td>Graiden</td>
                                <td>vehicula.aliquet@semconsequat.co.uk</td>
                              </tr>
                              <tr>
                                <td>Graiden</td>
                                <td>vehicula.aliquet@semconsequat.co.uk</td>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParticipantDetail;
