import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { GlobalState } from "../GlobalState";

function CreationRole() {
  const [data, setData] = useState({ name: "", permissions: [] });
  const state = useContext(GlobalState);
  const allPermissions = state.Permissions;

  const createRole = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const res = await axios.post(
        "http://localhost:8081/admin/create-role",
        data
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePermissionChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setData({ ...data, permissions: selectedOptions });
  };

  return (
    <div>
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3" />
          </a>
        </header>
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h2 className="new-price">Créer un rôle</h2>
              <div id="add-input-button-container" />
              {/* + Button */}
            </div>
            <div className="card-content">
              <div className="card-body">
                <form className="form form-vertical" onSubmit={createRole}>
                  <div className="form-body">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="role-name">Nom du rôle</label>
                          <input
                            type="text"
                            id="role-name"
                            className="form-control"
                            name="roleName"
                            maxLength={25}
                            onChange={(e) =>
                              setData({ ...data, name: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <Form.Select
                          onChange={handlePermissionChange}
                          multiple
                          aria-label="Sélectionner les permissions"
                          value={data.permissions}
                        >
                          {allPermissions &&
                            allPermissions.map((permission) => (
                              <option key={permission.id} value={permission.name}>
                                {permission.name}
                              </option>
                            ))}
                        </Form.Select>
                      </div>
                      <div className="col-12 d-flex justify-content-end mt-3">
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

export default CreationRole;
