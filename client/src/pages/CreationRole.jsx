import React from "react";
import Form from "react-bootstrap/Form";
function CreationRole() {
  return (
    <div>
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3" />
          </a>
        </header>
        <div />
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h2 className="new-price">Créer un role</h2>
              <div id="add-input-button-container" />
              {/* + Button */}
            </div>
            <div className="card-content">
              <div className="card-body">
                <form className="form form-vertical">
                  <div className="form-body">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="first-name-vertical">Nom</label>
                          <input
                            type="text"
                            id="first-name-vertical"
                            className="form-control"
                            name="fname"
                            maxLength={25}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <Form.Select aria-label="Default select example">
                      
                          <option>Permission</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </div>
                      <br />
                      <br />
                      <br />
                      <br />
                      <div className="col-12 d-flex justify-content-end">
                        <button
                          type="reset"
                          className="btn btn-light-secondary me-1 mb-1"
                        >
                          Annuler
                        </button>
                        <button
                          type="submit"
                          className="btn btn-primary me-1 mb-1"
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

export default CreationRole;
