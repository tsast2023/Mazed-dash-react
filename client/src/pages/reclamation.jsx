import React from 'react';

function App() {
  return (
    <div id="main">
      <header className="mb-3">
        <a href="#" className="burger-btn d-block d-xl-none">
          <i className="bi bi-justify fs-3"></i>
        </a>
      </header>

      {/* Contextual classes start */}
      <section className="section">
        <div className="row" id="table-contexual">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h2 className="new-price">Tableau de Réclamation</h2>
              </div>
              <div className="card-content">
                {/* table contextual / colored */}
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Utilisateur</th>
                        <th>Sujet</th>
                        <th>Statut</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-bold-500">10/10/2024</td>
                        <td>Lorem Lorem</td>
                        <td className="text-bold-500">Lorem Lorem</td>
                        <td><span className="badge bg-success">Ouverte</span></td>
                        <td>
                          <section id="basic-modals">
                            {/* Button trigger for basic modal */}
                            <button
                              type="button"
                              className="btn btn-outline block"
                              data-bs-toggle="modal"
                              data-bs-target="#default1"
                            >
                              <i className="fa-solid fa-eye font-medium-1"></i>
                            </button>

                            {/*Basic Modal */}
                            <div
                              className="modal fade text-left"
                              id="default1"
                              tabIndex="-1"
                              role="dialog"
                              aria-labelledby="myModalLabel1"
                              aria-hidden="true"
                            >
                              <div
                                className="modal-dialog modal-dialog-scrollable"
                                role="document"
                              >
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5
                                      className="modal-title"
                                      id="myModalLabel1"
                                    >
                                      Réclamation
                                    </h5>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="modal-body">
                                    <p>
                                      Bonbon caramels muffin. Chocolate bar
                                      oat cake cookie pastry dragée pastry.
                                      Carrot cake chocolate tootsie roll
                                      chocolate bar candy canes biscuit.
                                      Gummies bonbon apple pie fruitcake icing
                                      biscuit apple pie jelly-o sweet roll.
                                    </p>
                                    <div className="card-body">
                                    <div className="form-group with-title mb-3">
                                      <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                      ></textarea>
                                    </div>
                                  </div>
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                      data-bs-dismiss="modal"
                                    >
                                      Fermer
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                      data-bs-dismiss="modal"
                                    >
                                      Envoyer
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-bold-500">10/10/2024</td>
                        <td>Lorem Lorem</td>
                        <td className="text-bold-500">Lorem Lorem</td>
                        <td><span className="badge bg-danger">Fermée</span></td>
                        <td>
                          <section id="basic-modals">
                            {/* Button trigger for basic modal */}
                            <button
                              type="button"
                              className="btn btn-outline block"
                              data-bs-toggle="modal"
                              data-bs-target="#default2"
                            >
                              <i className="fa-solid fa-eye font-medium-1"></i>
                            </button>

                            {/*Basic Modal */}
                            <div
                              className="modal fade text-left"
                              id="default2"
                              tabIndex="-1"
                              role="dialog"
                              aria-labelledby="myModalLabel2"
                              aria-hidden="true"
                            >
                              <div
                                className="modal-dialog modal-dialog-scrollable"
                                role="document"
                              >
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5
                                      className="modal-title"
                                      id="myModalLabel2"
                                    >
                                      Réclamation
                                    </h5>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="modal-body">
                                    <p>
                                      Bonbon caramels muffin. Chocolate bar
                                      oat cake cookie pastry dragée pastry.
                                      Carrot cake chocolate tootsie roll
                                      chocolate bar candy canes biscuit.
                                      Gummies bonbon apple pie fruitcake icing
                                      biscuit apple pie jelly-o sweet roll.
                                      Toffee sugar plum sugar plum jelly-o
                                      jujubes bonbon dessert carrot cake.
                                      Cookie dessert tart muffin topping donut
                                      icing fruitcake. Sweet roll cotton candy
                                      dragée danish Candy canes
                                    </p>
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                      data-bs-dismiss="modal"
                                    >
                                      Fermer
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                      data-bs-dismiss="modal"
                                    >
                                      Envoyer
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contextual classes end */}

      <footer>
        <div className="footer clearfix mb-0 text-muted">
          <div className="float-start">
            <p>2024 &copy; Mazed</p>
          </div>
          <div className="float-end">
            <p>
              Crafted with
              <span className="text-danger"
                ><i className="bi bi-heart-fill icon-mid"></i
              ></span>
              by <a href="https://TSAST.me">TSAST</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
