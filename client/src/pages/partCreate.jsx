import React from 'react';

function App() {
  return (
    <div className="content-container">
    <div id="main">
      <header className="mb-3">
        <a href="#" className="burger-btn d-block d-xl-none">
          <i className="bi bi-justify fs-3"></i>
        </a>
      </header>

      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h2 className="new-price">Ajouter un Participant</h2>
          </div>
          <div className="card-content">
            <div className="card-body">
              <form className="form form-vertical">
                <div className="form-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="nom">Nom</label>
                        <div className="position-relative">
                          <input
                            type="text"
                            className="form-control"
                            id="nom"
                            placeholder="Nom"
                            maxLength="25"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="prenom">Prénom</label>
                        <div className="position-relative">
                          <input
                            type="text"
                            className="form-control"
                            id="prenom"
                            placeholder="Prénom"
                            maxLength="25"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="pseudo">Pseudo</label>
                        <div className="position-relative">
                          <input
                            type="text"
                            className="form-control"
                            id="pseudo"
                            placeholder="Pseudo"
                            maxLength="25"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <div className="position-relative">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            maxLength="25"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <label className="mb-1">Numéro de téléphone</label>
                      <div className="input-group mb-4">
                        <span className="input-group-text" id="basic-addon1">+216</span>
                        <input
                          type="number"
                          className="form-control"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      {/* Cancel Button */}
                      <button
                        type="button"
                        className="btn btn-light-secondary me-2"
                        data-bs-dismiss="modal"
                      >
                        <i className="bx bx-x d-block d-sm-none"></i>
                        <span className="d-none d-sm-block">Annuler</span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-dark"
                        id="suivantBtn"
                      >
                        Enregister
                      </button>
                    </div>
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

export default App;
