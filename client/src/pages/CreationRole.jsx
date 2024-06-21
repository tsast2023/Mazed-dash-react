import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Choices from "choices.js";

import { GlobalState } from "../GlobalState";
import { useTranslation } from "react-i18next";

function CreationRole() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [inputs, setInputs] = useState([]);
  const state = useContext(GlobalState);
  const categoriess = state.Categories;
  const { t } = useTranslation();

  const goBack = () => {
    window.history.back(); // Simulate a browser back button
  };

  useEffect(() => {
    console.log("cat from here", categoriess);
    const select = new Choices("#category-select", {
      removeItemButton: true,
      placeholder: true,
      placeholderValue: "Select an option",
      shouldSort: false,
    });

    const handleSelectChange = () => {
      const hasSelection = select.getValue().length > 0;
      setIsEnabled(hasSelection);
      if (!hasSelection) {
        setInputs([]);
      }
    };

    select.passedElement.element.addEventListener("change", handleSelectChange);

    return () => {
      select.passedElement.element.removeEventListener(
        "change",
        handleSelectChange
      );
      select.destroy();
    };
  }, []);
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
                      <div className="form-group" style={{ marginBottom: "15px" }}>
                <label htmlFor="category-select">{t("Role")}</label>
                <select
                  id="category-select"
                  className="choices form-select multiple-remove"
                  multiple
                >
                  <optgroup>
                    {categoriess ? (
                      categoriess.map((item) => (
                        <option value={item}>{item.libeléCategorie}</option>
                      ))
                    ) : (
                      <option>loading</option>
                    )}
                  </optgroup>
                </select>
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
