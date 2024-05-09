import React from "react";

function TermsForm() {
  return (
    <div className="content-container">
      <div id="main">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h2 className="new-price">Ajouter un terme</h2>
            </div>
            <div className="card-content">
              <div className="card-body">
                <form className="form form-vertical">
                  <div className="form-body">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group has-icon-left">
                          <label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label"
                          >
                            Text
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <fieldset className="form-group">
                          <label>Sujet</label>
                          <select className="form-select" id="basicSelect">
                            <option>Création d'un compte acheteur</option>
                            <option>Création d'un compte vendeur</option>
                            <option>Participation à une enchère</option>
                            <option>enchérir</option>
                          </select>
                        </fieldset>
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
                        <br/>
                        <br/>
                        <br/>
                        <button
                          type="button"
                          className="btn btn-dark"
                          id="suivantBtn"
                        >
                          Enregistrer
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

export default TermsForm;
