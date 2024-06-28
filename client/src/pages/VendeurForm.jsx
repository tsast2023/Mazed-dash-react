import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function VendeurForm() {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState("square");

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

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
              <h2 className="new-price">{t("Ajouter un Vendeur")}</h2>
            </div>
            <div className="card-content">
              <div className="card-body">
                <form className="form form-vertical">
                  <div className="form-body">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="email-id-icon">{t("Nom")}</label>
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control"
                              id="email-id-icon"
                              placeholder={t("Nom")}
                              maxLength={25}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="email-id-icon">{t("Prénom")}</label>
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control"
                              id="email-id-icon"
                              placeholder={t("Prénom")}
                              maxLength={25}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="email-id-icon">{t("Pseudo")}</label>
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control"
                              id="email-id-icon"
                              placeholder={t("Pseudo")}
                              maxLength={25}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="email-id-icon">{t("Email")}</label>
                          <div className="position-relative">
                            <input
                              type="Email"
                              className="form-control"
                              id="email-id-icon"
                              placeholder="email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="email-id-icon">
                          {t("Numéro de téléphone")}
                        </label>
                        <div className="input-group mb-2">
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <label>{t("Type vendeurs")}</label>
                        <div className="form-group">
                          <select
                            className="choices form-select"
                            value={selectedType}
                            onChange={handleTypeChange}
                          >
                            <option value="square">{t("Professionel")}</option>
                            <option value="rectangle">{t("Particulier")}</option>
                          </select>
                        </div>
                      </div>
                      {selectedType === "square" && (
                        <>
                          <div className="col-12">
                            <div className="form-group">
                              <label htmlFor="email-id-icon">{t("Patente")}</label>
                              <div className="position-relative">
                                <input
                                  type="file"
                                  className="form-control"
                                  id="email-id-icon"
                                  placeholder="email"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label htmlFor="email-id-icon">
                                {t("Nom de societe")}
                              </label>
                              <div className="position-relative">
                                <input
                                  type="Email"
                                  className="form-control"
                                  id="email-id-icon"
                                  placeholder="Nom de societe"
                                  maxLength={25}
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-light-secondary me-2"
                          data-bs-dismiss="modal"
                        >
                          <i className="bx bx-x d-block d-sm-none" />
                          <span className="btn btn-secondary me-3">
                            {t("Annuler")}
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          id="suivantBtn"
                        >
                          {t("Valider")}
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

export default VendeurForm;
