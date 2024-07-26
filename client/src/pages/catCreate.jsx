import React, { useContext, useEffect, useState } from "react";
import Choices from "choices.js";
import "choices.js/public/assets/styles/choices.css";
import { GlobalState } from "../GlobalState";
import { useTranslation } from "react-i18next";
import axios from "axios";

const CatCreate = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [data, setData] = useState({ libCategorie: "", categoriesParents: [], criteres: [] });
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
      select.passedElement.element.removeEventListener("change", handleSelectChange);
      select.destroy();
    };
  }, [categoriess]);

  const handleAddInput = () => {
    const newInput = {
      id: inputs.length + 1,
      value: "",
    };
    setInputs([...inputs, newInput]);
  };

  const submitCat = async (e) => {
    e.preventDefault();
    setData((prevData) => ({
      ...prevData,
      criteres: inputs.map((item) => item.value),
    }));
    console.log(inputs);
    console.log("data:", data);

    try {
      const res = await axios.post("http://localhost:8081/api/category/addCategory", data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions).map((option) => ({
      id: JSON.parse(option.value).id,  // Use getAttribute to get the data-id value
      libCategorie: JSON.parse(option.value).libCategorie,
    }));
    setData((prevData) => ({
      ...prevData,
      categoriesParents: selectedOptions,
    }));
  };

  return (
    <div className="content-container">
      <form onSubmit={submitCat} className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h2 className="card-title">{t("Créer une catégorie")}</h2>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddInput}
            disabled={!isEnabled}
            style={{ backgroundColor: !isEnabled ? "#b0210e" : "" }}
          >
            +
          </button>
        </div>
        <div className="card-body">
          <div className="row">
            <div onSubmit={() => console.log(data)} className="col-md-12">
              <div className="form-group">
                <label htmlFor="basicInput">{t("Libellé")}</label>
                <input
                  onChange={(e) => {
                    setData({ ...data, libCategorie: e.target.value });
                    console.log(data);
                  }}
                  type="text"
                  className="form-control"
                  id="basicInput"
                  placeholder="Enter text"
                />
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label htmlFor="category-select">{t("Catégories")}</label>
                <select
                  id="category-select"
                  className="choices form-select multiple-remove"
                  multiple
                  onChange={handleCategoryChange}
                >
                  <optgroup>
                    {categoriess ? (
                      categoriess.map((item) => (
                        <option key={item.id} value={JSON.stringify({ id: item.id, libCategorie: item.libCategorie })} >
                          {item.libCategorie}
                        </option>
                      ))
                    ) : (
                      <option>loading</option>
                    )}
                  </optgroup>
                </select>
              </div>

              {inputs.map((input, index) => (
                <div key={index} className="form-group" style={{ marginTop: "15px" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Additional input"
                    value={input.value}
                    onChange={(e) => {
                      const newInputs = [...inputs];
                      newInputs[index].value = e.target.value;
                      setInputs(newInputs);
                      console.log(inputs);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-end">
          <button type="button" className="btn btn-secondary me-3" onClick={goBack}>
            {t("Annuler")}
          </button>
          <button type="submit" className="btn btn-primary">
            {t("Enregistrer")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CatCreate;
