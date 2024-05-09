import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { GlobalState } from "../GlobalState";
import axios from "axios";
function Recharges() {
  const state = useContext(GlobalState);
  const cartes = state.cartes;
  const [carteRech , setCarteRech] = useState({numSérie : "" , valeur:""});
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCarte(id);
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
        window.location.reload();
      } else {
        Swal.fire("Cancelled", "Your item is safe :)", "error");
      }
    });
  };
const addCarte = async(e)=>{
  e.preventDefault();
  try {
    const res = await axios.post('http://192.168.0.126:8081/api/carte/publishNow' , carteRech);
    console.log(res.data);
    window.location.reload();
  } catch (error) {
    console.log(error)
  }
}
const deleteCarte = async(id)=>{
  try {
    const res = await axios.delete(`http://192.168.0.126:8081/api/carte/deleteCarte?id=${id}`);
    console.log(res.data)
  } catch (error) {
    console.log(error)
  }
}
  return (
    <div id="main">
      <header className="mb-3">
        <a href="#" className="burger-btn d-block d-xl-none">
          <i className="bi bi-justify fs-3"></i>
        </a>
      </header>

      {/* Contextual classes start */}
      <section id="form-and-scrolling-components">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="form-group">
                    <h2 className="new-price">
                      {" "}
                      Vous souhaitez ajouter une nouvelle carte ?
                    </h2>
                    {/* Button trigger for login form modal */}
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      data-bs-toggle="modal"
                      data-bs-target="#inlineForm"
                    >
                      <i className="bi bi-plus"></i>
                      Ajouter
                    </button>

                    {/*login form Modal */}
                    <div
                      className="modal fade text-left"
                      id="inlineForm"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="myModalLabel33"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel33">
                              Ajouter une nouvelle carte
                            </h4>
                            <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                          </div>
                          <form  onSubmit={addCarte}>
                            <div className="modal-body">
                              <label htmlFor="serialNumber">
                                Numéro de série
                              </label>
                              <div className="form-group">
                                <input
                                  id="serialNumber"
                                  type="text"
                                  placeholder="Écrivez ici"
                                  className="form-control"
                                  maxLength="25"
                                  onChange={e=>setCarteRech({...carteRech , numSérie:e.target.value})}
                                />
                              </div>
                              <label htmlFor="value">Valeur</label>
                              <div className="form-group">
                                <input
                                  id="value"
                                  type="text"
                                  placeholder="Écrivez ici"
                                  className="form-control"
                                  maxLength="25"
                                  onChange={e=>setCarteRech({...carteRech , valeur:e.target.value})}
                                />
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-light-secondary"
                                data-bs-dismiss="modal"
                              >
                                <i className="bx bx-x d-block d-sm-none"></i>
                                <span className="d-none d-sm-block">
                                  Annuler
                                </span>
                              </button>
                              <button
                                type="submit"
                                className="btn btn-primary ms-1"
                                data-bs-dismiss="modal"
                              >
                                <i className="bx bx-check d-block d-sm-none"></i>
                                <span className="d-none d-sm-block">
                                  Enregistrer
                                </span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section mt-4">
        <div className="card">
          <div className="card-header">
            <h2 className="new-price">Liste des cartes ajoutées</h2>
          </div>
          <div className="card-content">
            <div className="card-body">
              <div className="table-responsive datatable-minimal">
                <table className="table" id="table2">
                  <thead>
                    <tr>
                      <th>Numéro de série</th>
                      <th>Statut</th>
                      <th>Valeur</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartes? cartes.map((item)=>(
                      <tr>
                      <td className="text-bold-500">{item.numSérie}</td>
                      <td>
                        <span className={item.statuscarte==="NONUTILISER"?"badge bg-success":"badge bg-danger"}>{item.statuscarte}</span>
                      </td>
                      <td>{item.valeur}</td>
                      <td>
                        <i
                          className="fa-solid fa-trash deleteIcon"
                          onClick={()=>handleDelete(item.id)}
                        ></i>
                      </td>
                    </tr>
                    )):<div>loading</div>}
                    
                  
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Recharges;
