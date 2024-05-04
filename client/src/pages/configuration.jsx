import React from "react";

function Configuration() {
  return (
    <div className="content-container">
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3" />
          </a>
        </header>
        <div className="page-heading">
          <section id="basic-vertical-layouts">
            <div className=" match-height">
              <div>
                <div className="card">
                  <div className="card-header">
                    <h2 className="new-price" id="myModalLabel33">
                      Configuration
                    </h2>
                  </div>
                  <div className="card-content">
                    <div className="card-body">
                      <form className="form form-vertical">
                        <div className="form-body">
                          <div className="row">
                            <div className="col-12">
                              <div className="form-group">
                                <label htmlFor="first-name-vertical">
                                  Cout Du Participation{" "}
                                </label>
                                <input
                                  type="number"
                                  id="first-name-vertical"
                                  className="form-control"
                                  name="référence"
                                  placeholder="Ecrire Ici"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <label htmlFor="email-id-vertical">
                                  Cout Du Clic
                                </label>
                                <input
                                  type="number"
                                  id="email-id-vertical"
                                  className="form-control"
                                  name="email-id"
                                  placeholder="Ecrire Ici"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <label htmlFor="email-id-vertical">
                                  Valeur De Majoration{" "}
                                </label>
                                <input
                                  type="number"
                                  id="email-id-vertical"
                                  className="form-control"
                                  name="email-id"
                                  placeholder="Ecrire Ici"
                                  required
                                />
                              </div>
                            </div>
                            <br />
                            <br />
                            <br />
                            <div className="col-12 checkbox">
                              <input
                                type="checkbox"
                                id="checkbox1"
                                className="col-1 form-check-input"
                                defaultChecked
                                onclick
                              />{" "}
                              <span>Remboursement</span>
                            </div>
                            <div className="col-12">
                              <input
                                type="text"
                                id="email-id-vertical1"
                                className="col-6 form-control"
                                name="email-id"
                                placeholder="Ecrire Ici"
                                required
                              />
                            </div>
                            <br />
                            <br />
                            <div className="row">
                              <div className="col-12 checkbox">
                                <input
                                  type="checkbox"
                                  id="checkbox2"
                                  className="col-6 form-check-input"
                                  defaultChecked
                                  onclick
                                />{" "}
                                <span>Facilité</span>
                              </div>
                              <div className="col-6">
                                <input
                                  type="number"
                                  id="email-id-vertical2"
                                  className="col-6 form-control"
                                  name="email-id"
                                  placeholder="Ecrire Ici"
                                  required
                                />
                              </div>
                              <fieldset
                                style={{ padding: 0, margin: 0 }}
                                id="fac"
                                className="col-6 form-group"
                              >
                                <select
                                  className="form-select"
                                  id="basicSelect"
                                  required
                                >
                                  <option>Mois</option>
                                  <option>L'année</option>
                                </select>
                              </fieldset>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="col-12">
                          <div className="form-group">
                            <label htmlFor="email-id-vertical">
                              Nb De Mois
                            </label>
                            <input
                              type="number"
                              id="email-id-vertical"
                              className="form-control"
                              name
                              placeholder="Ecrire Ici"
                              required
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "white", padding: 20 }}
              className="modal-content"
            >
              <div className="modal-header">
                <h2 className="new-price" id="myModalLabel33">
                  Ajouter une nouvelle Configuration
                </h2>
                <br />
                <br />
                <br />
                <br />
              </div>
              <form action="#">
                <div className="modal-body">
                  <label htmlFor="email">Nb attendu des participants</label>
                  <div className="form-group">
                    <input
                      id
                      type="number"
                      placeholder="Écrivez ici"
                      className="form-control"
                      maxLength={25}
                      required
                    />
                  </div>
                  <label htmlFor="email">Date de Lancement</label>
                  <div className="form-group">
                    <input
                      id
                      type="datetime-local"
                      placeholder="Écrivez ici"
                      className="form-control"
                      maxLength={25}
                      required
                    />
                  </div>
                  <label htmlFor="email">Date de Fermeture</label>
                  <div className="form-group">
                    <input
                      id
                      type="datetime-local"
                      placeholder="Écrivez ici"
                      className="form-control"
                      maxLength={25}
                      required
                    />
                  </div>
                </div>
                <br />
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary ms-1"
                    data-bs-dismiss="modal"
                  >
                    <i className="bx bx-check d-block d-sm-none" />
                    <span className="d-none d-sm-block">Planifier</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary ms-1"
                    data-bs-dismiss="modal"
                  >
                    <i className="bx bx-check d-block d-sm-none" />
                    <span className="d-none d-sm-block">Publier</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary ms-1"
                    data-bs-dismiss="modal"
                  >
                    <i className="bx bx-check d-block d-sm-none" />
                    <span className="d-none d-sm-block">Enregister</span>
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Configuration;
