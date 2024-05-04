import React, { useEffect, useState } from "react";
import Choices from "choices.js";
import "choices.js/public/assets/styles/choices.css";

const CatCreate = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    const select = new Choices("#category-select", {
      removeItemButton: true,
      placeholder: true,
      placeholderValue: "Select an option",
      shouldSort: false,
    });

    // Handle changes in selection to enable/disable the "+" button and manage input fields
    const handleSelectChange = () => {
      const hasSelection = select.getValue().length > 0;
      setIsEnabled(hasSelection);
      if (!hasSelection) {
        setInputs([]); // Remove all inputs if no options are selected
      }
    };

    select.passedElement.element.addEventListener('change', handleSelectChange);

    return () => {
      select.passedElement.element.removeEventListener('change', handleSelectChange);
      select.destroy();
    };
  }, []);

  const handleAddInput = () => {
    const newInput = {
      id: inputs.length + 1,
      value: ""
    };
    setInputs([...inputs, newInput]); // Add new input to the inputs array
  };

  return (
    <div className="content-container">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h2 className="card-title">Créer une catégorie</h2>
          <button 
            type="button" 
            className="btn btn-primary"  // Changed from btn-success to btn-primary
            onClick={handleAddInput}
            disabled={!isEnabled}
          >
            +
          </button>
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

              <div className="form-group" style={{ marginBottom: "15px" }}>
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
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-end">
          <button type="button" className="btn btn-secondary me-3">Annuler</button>
          <button type="button" className="btn btn-primary">Enregistrer</button>
        </div>
      </div>
    </div>
  );
};

export default CatCreate;
