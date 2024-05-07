import React from "react";

function UtilisateurEdit() {
  return (
    <div className="content-container">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Modifier d'un utilisateur</h4>
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
                            maxLength={25}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="email-id-icon">Pseudo</label>
                        <div className="position-relative">
                          <input
                            type="text"
                            className="form-control"
                            id="email-id-icon"
                            maxLength={25}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="disabledInput">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="disabledInput"
                        placeholder="Email ici"
                        disabled
                      />
                    </div>
                    <label>Numéro de téléphone</label>
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
                    <label htmlFor="email">Role</label>
                    <div className="input-group mb-3">
                      <label
                        className="input-group-text"
                        htmlFor="inputGroupSelect01"
                      >
                        Options
                      </label>
                      <select className="form-select" id="inputGroupSelect01">
                        <option selected>Choisir...</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <div className="modal-footer">
                      {/* Cancel Button */}
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
                        Enregister
                      </button>
                      {/* Bloquer and Débloquer Buttons */}
                      <div
                        className="btn-group"
                        role="group"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "auto",
                        }}
                      >
                        <button
                          type="button"
                          className="btn btn-light-secondary me-2"
                          data-bs-dismiss="modal"
                        >
                          <i className="bx bx-x d-block d-sm-none" />
                          <span className="d-none d-sm-block">Bloquer</span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-dark"
                          id="suivantBtn"
                        >
                          Débloquer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UtilisateurEdit;
