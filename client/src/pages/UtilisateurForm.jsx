import React from "react";

function UtilisateurForm() {
  return (
    <div className="content-container">
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3" />
          </a>
        </header>
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h2 className="new-price">Ajouter un Utilisateur</h2>
            </div>
            <div className="card-content">
              <div className="card-body">
                <form className="form form-vertical">
                  <div className="form-body">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="email-id-icon">Nom</label>
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control"
                              id="email-id-icon"
                              placeholder="Nom"
                              maxLength={25}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="email-id-icon">Prénom</label>
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control"
                              id="email-id-icon"
                              placeholder="Prénom"
                              maxLength={25}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="email-id-icon">Email</label>
                          <div className="position-relative">
                            <input
                              type="email"
                              className="form-control"
                              id="email-id-icon"
                              placeholder="Pseudo"
                              maxLength={25}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="email-id-icon">
                          Numéro de téléphone
                        </label>
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1">
                            +216
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="email-id-icon">Role</label>
                          <fieldset className="form-group mb-3">
                            <select className="form-select" id="basicSelect">
                              <option>IT</option>
                              <option>Blade Runner</option>
                              <option>Thor Ragnarok</option>
                            </select>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-light-secondary me-2"
                        data-bs-dismiss="modal"
                      >
                        <i className="bx bx-x d-block d-sm-none" />
                        <span className="d-none d-sm-block">Annuler</span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-dark"
                        id="suivantBtn"
                      >
                        Enregistrer
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UtilisateurForm;
