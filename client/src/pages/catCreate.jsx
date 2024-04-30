import React, { useEffect } from "react";
import Choices from "choices.js";
import "choices.js/public/assets/styles/choices.css";

const CatCreate = () => {
  useEffect(() => {
    const select = new Choices("#category-select", {
      removeItemButton: true,
      placeholder: true,
      placeholderValue: "Select an option",
    });

    return () => {
      select.destroy();
    };
  }, []);

  return (
    <div className="content-container">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h2 className="card-title">Créer une catégorie</h2>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="basicInput">Libellé</label>
                <input
                  type="text"
                  className="form-control"
                  id="basicInput"
                  placeholder="Enter text"
                />
              </div>

              <div className="form-group">
                <label htmlFor="category-select">Catégories</label>
                <select
                  id="category-select"
                  className="choices form-select multiple-remove"
                  multiple
                >
                  <optgroup>
                    <option value="romboid">catégorie1</option>
                    <option value="trapeze">catégorie2</option>
                    <option value="triangle">catégorie3</option>
                    <option value="polygon">catégorie4</option>
                  </optgroup>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCreate;
