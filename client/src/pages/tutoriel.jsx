import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { GlobalState } from "../GlobalState";
import axios from "axios";
const App = () => {
  const [tuto , setTuto]= useState({ordre : 0 , description:"" , file:""});
  const state =useContext(GlobalState);
  const tutorials = state.tutorials
  const handleDelete = (id) => {
    // Show SweetAlert confirmation dialog
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
        deleteItem(id);
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
      } else {
        Swal.fire("Cancelled", "Your item is safe :)", "error");
      }
    });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    const reader = new FileReader();

    reader.onloadend = () => {
      // When reading is completed, set the image data to state
      setTuto({ ...tuto, file: reader.result });
    };

    // Read the file as base64
    reader.readAsDataURL(file);
  };
  const deleteItem = async(id) => {
   try {
    const res = await axios.delete(`http://192.168.0.126:8081/api/tuto/deleteTuto?id=${id}`);
    console.log(res.data);
   } catch (error) {
    console.log(error)
   }
  };
  const addTuto = async(e) =>{
    console.log(tuto);
    console.log(tuto.ordre);
    e.preventDefault();
    try {
      const res = await axios.post('http://192.168.0.126:8081/api/tuto/publishNow',tuto)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div id="app">
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3"></i>
          </a>
        </header>

        <section id="form-and-scrolling-components">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="card">
                <div className="card-content">
                  <div className="card-body">
                    <div className="form-group">
                      <h2 className="new-price">
                        {" "}
                        Vous souhaitez ajouter une nouvelle image ?
                      </h2>
                      <button
                        type="button"
                        className="btn btn-outline-success"
                        data-bs-toggle="modal"
                        data-bs-target="#inlineForm"
                      >
                        <i className="bi bi-plus"></i>
                        Ajouter
                      </button>

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
                                Ajouter une nouvelle image
                              </h4>
                              <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                            </div>
                            <form onSubmit={addTuto} action="#">
                              <div className="modal-body">
                                <label htmlFor="email">Image</label>
                                <div className="form-group">
                                  <input
                                    id="email"
                                    type="file"
                                    placeholder="Écrivez ici"
                                    className="form-control"
                                    maxLength="25"
                                    onChange={handleImageChange}
                                  />
                                </div>
                                <label htmlFor="email">Ordre</label>
                                <div className="form-group">
                                  <input
                                    id="email"
                                    type="number"
                                    placeholder="Écrivez ici"
                                    className="form-control"
                                    maxLength="25"
                                    onChange={e=>setTuto({...tuto , ordre: e.target.value})}
                                  />
                                </div>
                                <label htmlFor="email">Description</label>
                                <div className="form-group">
                                  <textarea
                                    id="email"
                                    type="text"
                                    placeholder="Écrivez ici"
                                    className="form-control"
                                    maxLength="25"
                                    onChange={e=>setTuto({...tuto , description: e.target.value})}
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
                                  
                                  className="btn btn-primary ms-1"
                                  data-bs-dismiss="modal"
                                  type="submit"
                                >
                                  <i className="bx bx-check d-block d-sm-none"></i>
                                  <span  className="d-none d-sm-block">
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
              <h2 className="new-price">Liste des images</h2>
            </div>
            <div className="card-content">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-lg">
                    <thead>
                      <tr>
                        <th>Images</th>
                        <th>Ordre</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tutorials? tutorials.map((item)=>(
                        <tr>
                        <td className="text-bold-500"> <img
                                src={item.file}
                                alt="tuto_image"
                                style={{ width: "auto", height: "150px" }}
                              /></td>
                        <td>{item.ordre}</td>
                        <th>
                          <i
                            className="fa-solid fa-trash deleteIcon"
                            onClick={()=>handleDelete(item.id)}
                          ></i>
                        </th> 
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
    </div>
  );
};

export default App;
