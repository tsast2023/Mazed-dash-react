import React from "react";

function QuestionForm() {
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
              <h2 className="new-price">Ajouter une Question</h2>
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
                            La question
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-group has-icon-left">
                          <label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label"
                          >
                            La réponse
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            defaultValue={""}
                          />
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
        <footer>
          <div className="footer clearfix mb-0 text-muted">
            <div className="float-start">
              <p>2024 © Mazed</p>
            </div>
            <div className="float-end">
              <p>
                Crafted with
                <span className="text-danger">
                  <i className="bi bi-heart-fill icon-mid" />
                </span>
                by <a href="https://TSAST.me">TSAST</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default QuestionForm;
