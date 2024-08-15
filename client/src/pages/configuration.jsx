import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "choices.js/public/assets/styles/choices.css";
import Choices from "choices.js";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

function Configuration() {
  const { t } = useTranslation();
  const [showEmail1, setShowEmail1] = useState(true);
  const [showEmail2, setShowEmail2] = useState(true);
  const [showFac, setShowFac] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState(""); // State for input value

  const selectRef = useRef(null);
  const choicesInstance = useRef(null);

  useEffect(() => {
    // Initialize Choices.js
    if (selectRef.current) {
      choicesInstance.current = new Choices(selectRef.current, {
        allowHTML: false,
        removeItemButton: true,
        addItemText: (value) => `Add "${value}"`,
        itemSelectText: "",
        duplicateItemsAllowed: false, // Prevent duplicate items
        shouldSort: false, // Disable sorting to keep the original order
      });
    }

    // Cleanup Choices.js
    return () => {
      if (choicesInstance.current) {
        choicesInstance.current.destroy();
        choicesInstance.current = null;
      }
    };
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      event.preventDefault(); // Prevent default form submission or other actions

      if (choicesInstance.current) {
        const value = inputValue.trim();
        // Add the new option
        choicesInstance.current.setChoices(
          [{ value: value, label: value, selected: true, disabled: false }],
          "value",
          "label",
          true // This flag indicates that the options should be added to the end of the existing list
        );
        setInputValue(""); // Clear the input after adding
      }
    }
  };

  const handleCheckbox1Change = () => {
    setShowEmail1(!showEmail1);
  };

  const handleCheckbox2Change = () => {
    setShowEmail2(!showEmail2);
    setShowFac(!showFac);
  };

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleDelete = () => {
    Swal.fire({
      title: "Êtes-vous sûr(e) ?",
      text: "Une fois supprimé(e), vous ne pourrez pas récupérer cet élément !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Oui, Annuler-le !",
      cancelButtonText: "Non, annuler !",
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem();
        Swal.fire({
          title: "Annuler(e) !",
          text: "Votre élément a été supprimé.",
          icon: "success",
          iconColor: "black",
          confirmButtonColor: "#b0210e",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Annulé",
          text: "Votre élément est en sécurité :)",
          icon: "error",
          confirmButtonColor: "#b0210e",
          confirmButtonText: "OK",
        });
      }
    });
  };

  const deleteItem = () => {
    // Implement your delete logic here
  };

  return (
    <div className="content-container">
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3" />
          </a>
        </header>
        <div className="page-heading">
          <section id="basic-vertical-layouts">
            <div className="match-height">
              <div>
                <div className="card">
                  <div className="card-header">
                    <h2 className="new-price" id="myModalLabel33">
                      {t("Configuration De L'enchere")}
                    </h2>
                  </div>
                  <div className="card-content">
                    <div className="card-body">
                      <form className="form form-vertical">
                        <div className="form-body">
                          <div className="row">
                            <div className="col-12">
                              <div className="form-group">
                                <label htmlFor="participation-cost">
                                  {t("Cout Du Participation")}
                                </label>
                                <input
                                  type="number"
                                  id="participation-cost"
                                  className="form-control"
                                  name="participation-cost"
                                  placeholder={t("Ecrire Ici")}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <label htmlFor="click-cost">
                                  {t("Cout Du Clic")}
                                </label>
                                <input
                                  type="number"
                                  id="click-cost"
                                  className="form-control"
                                  name="click-cost"
                                  placeholder={t("Ecrire Ici")}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <label htmlFor="increment-value">
                                  {t("Ajouter Valeur De Majoration")}
                                </label>
                                <input
                                  type="text"
                                  id="increment-value"
                                  className="form-control"
                                  value={inputValue}
                                  onChange={handleInputChange}
                                  onKeyDown={handleKeyPress}
                                  placeholder={t(
                                    "Add new option and press Enter"
                                  )}
                                />
                                <label htmlFor="increment-value">
                                  {t("Select Valeur De Majoration")}
                                </label>
                                <select
                                  id="choices-select"
                                  className="form-select"
                                  name="increment-value"
                                  ref={selectRef}
                                  required
                                  multiple
                                >
                                  {/* Initial options can be added here if needed */}
                                </select>
                              </div>
                            </div>
                            <div className="col-12 checkbox">
                              <input
                                type="checkbox"
                                id="checkbox1"
                                className="col-1 form-check-input"
                                checked={showEmail1}
                                onChange={handleCheckbox1Change}
                              />
                              <span>Remboursement</span>
                            </div>
                            {showEmail1 && (
                              <div className="col-12">
                                <input
                                  type="text"
                                  id="email-id-vertical1"
                                  className="col-6 form-control"
                                  name="email-id"
                                  placeholder="Ecrire Ici"
                                  required
                                />
                              </div>
                            )}
                            <br />
                            <br />
                            <div className="row">
                              <div className="col-12 checkbox">
                                <input
                                  type="checkbox"
                                  id="checkbox2"
                                  className="col-6 form-check-input"
                                  checked={showEmail2}
                                  onChange={handleCheckbox2Change}
                                />
                                <span>Facilité</span>
                              </div>
                              {showEmail2 && (
                                <div className="col-6">
                                  <input
                                    type="number"
                                    id="email-id-vertical2"
                                    className="col-6 form-control"
                                    name="email-id"
                                    placeholder="Ecrire Ici"
                                    required
                                  />
                                </div>
                              )}
                              {showFac && (
                                <fieldset
                                  style={{ padding: "0px", margin: "0px" }}
                                  id="fac"
                                  className="col-6 form-group"
                                >
                                  <select
                                    className="form-select"
                                    id="basicSelect"
                                    required
                                  >
                                    <option>Mois</option>
                                    <option>L'année</option>
                                  </select>
                                </fieldset>
                              )}
                            </div>

                            <div className="col-12">
                              <div className="form-group">
                                <label htmlFor="number-of-months">
                                  {t("Nb De Mois")}
                                </label>
                                <input
                                  type="number"
                                  id="number-of-months"
                                  className="form-control"
                                  name="number-of-months"
                                  placeholder={t("Ecrire Ici")}
                                  required
                                />
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
            <br />
            <br />
            <div className="card">
              <div
                style={{ backgroundColor: "white", padding: 20 }}
                className="modal-content"
              >
                <div className="modal-header">
                  <h2 className="new-price" id="myModalLabel33">
                    {t("Ajouter une nouvelle Configuration")}
                  </h2>
                </div>
                <div className="modal-body">
                  <button
                    className="btn btn-primary"
                    onClick={handleOpenModal}
                  >
                    {t("Ajouter une nouvelle Configuration")}
                  </button>
                </div>
                <Modal
                  show={showModal}
                  onHide={handleCloseModal}
                  style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>{t("Modal title")}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{t("Modal body text goes here.")}</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                      {t("Fermer")}
                    </Button>
                    <Button variant="primary" onClick={handleCloseModal}>
                      {t("Save Changes")}
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Configuration;
