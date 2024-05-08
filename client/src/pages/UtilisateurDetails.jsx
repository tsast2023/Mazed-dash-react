import React from "react";
import { Link } from "react-router-dom";

function UtilisateurDetails() {
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
                  <h3> Détails d’utilisateur </h3>
                </div>
                <div className="col-12 col-md-6 order-md-2 order-first"></div>
              </div>
            </div>
            <section className="section">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="avatar avatar-xl">
                          <img
                            style={{
                              width: "48px",
                              height: "48px",
                              borderRadius: "25px",
                            }}
                            src="assets/static/images/faces/2.jpg"
                            alt="Avatar"
                          />
                        </div>
                      </div>
                      <div className="card-body">
                        <form action="#" method="get">
                          <div className="form-group">
                            <label htmlFor="name" className="form-label">
                              {" "}
                              Nom
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
                              {" "}
                              Prénom
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
                              {" "}
                              Pseudo
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
                              {" "}
                              Rôle
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
                            <button
                              type="submit"
                              className="btn btn-danger me-2"
                            >
                              Bloquer
                            </button>
                            <button
                              type="submit"
                              className="btn btn-secondary me-2"
                            >
                              Débloquer
                            </button>
                            <Link
                              to="/UtilisateurEdit"
                              className="btn btn-secondary"
                            >
                              Editer
                            </Link>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UtilisateurDetails;
