import React from "react";

function VendeurDetails() {
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
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>Détails d’un vendeur</h3>
                </div>
                <div className="col-12 col-md-6 order-md-2 order-first"></div>
              </div>
            </div>
            <section className="section">
              <div className="row">
                <div className="col-12">
                  <div className="card mb-4"> {/* Added mb-4 for spacing */}
                    <div className="card-body">
                      <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="avatar avatar-xl">
                          <img
                            style={{
                              width: "48px",
                              height: "48px",
                              borderRadius: "5px",
                            }}
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
                              Date d'inscription
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="form-control"
                              placeholder={12222222222}
                              defaultValue="John Doe"
                              disabled
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="name" className="form-label">
                              Nombre de produits déposés dans la boutique
                            </label>
                            <input
                              type="text"
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
                              Les ventes
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
                              L’évaluation
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
                              Les réclamations
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
                            <button type="submit" className="btn btn-danger me-2">
                              Bloquer
                            </button>
                            <button type="submit" className="btn btn-secondary">
                              Débloquer
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <section className="section">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title">Ventes</h5>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive datatable-minimal">
                          <table className="table" id="table2">
                            <thead>
                              <tr>
                                <th>Le stock à l’entrée</th>
                                <th>Le stock actuel</th>
                                <th>Le prix de vente</th>
                                <th>Les promotions</th>
                                <th>L’évaluation</th>
                                <th>Le nombre de visites sur produit</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>500</td>
                                <td>200</td>
                                <td>20</td>
                                <td>20%</td>
                                <td>Lorem</td>
                                <td>350</td>
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

export default VendeurDetails;
