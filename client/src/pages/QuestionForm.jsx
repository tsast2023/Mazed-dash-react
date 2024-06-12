import React from "react";
import { useTranslation } from "react-i18next";

function QuestionForm() {
  const { t } = useTranslation();

  return (
    <div className="content-container">
      <div id="main">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h2 className="new-price">{t("Ajouter une Question")}</h2>
            </div>
            <div className="card-content">
              <div className="card-body">
                <form className="form form-vertical">
                  <div className="form-body">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group has-icon-left">
                          <label
                            htmlFor="question"
                            className="form-label"
                          >
                            {t("La question")}
                          </label>
                          <textarea
                            className="form-control"
                            id="question"
                            rows={3}
                          />
                        </div>
                        <div className="form-group has-icon-left">
                          <label
                            htmlFor="reponse"
                            className="form-label"
                          >
                            {t("La réponse")}
                          </label>
                          <textarea
                            className="form-control"
                            id="reponse"
                            rows={3}
                          />
                        </div>
                      </div>
                      <div className="modal-footer d-flex justify-content-between">
                        <button
                          type="button"
                          className="btn btn-light-secondary"
                          data-bs-dismiss="modal"
                        >
                          <i className="bx bx-x d-block d-sm-none" />
                          <span className="d-sm-block btn btn-dark">{t("Annuler")}</span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-dark"
                          id="suivantBtn"
                        >
                          {t("Enregister")}
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

export default QuestionForm;
