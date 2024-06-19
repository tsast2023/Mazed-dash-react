import React from "react";
import { Link } from "react-router-dom";

function EnchereListe() {
  return (
    <div className="content-container">
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3" />
          </a>
        </header>
        <section className="section">
          <div className="card">
            <div style={{display:"flex",justifyContent:"space-between"}} className="card-header">
              <h2 className="new-price">Liste d'enchére</h2>
              {/* <Link to={"/ConfigurationEnchere"} className="btn btn-primary me-1 mb-1">Confuguration</Link> */}
            </div>
            <div className="card-body">
              <div className="row ">
                <div className="col-6 form-group">
                  <h6>Catégories</h6>
                  <select className="choices form-select">
                    <option value="square">Square</option>
                    <option value="rectangle">Rectangle</option>
                    <option value="rombo">Rombo</option>
                    <option value="romboid">Romboid</option>
                    <option value="trapeze">Trapeze</option>
                    <option value="traible">Triangle</option>
                    <option value="polygon">Polygon</option>
                  </select>
                </div>
                <div className="col-6 form-group">
                  <h6 htmlFor="basicInput">Statut</h6>
                  <select className="choices form-select">
                    <option value="square">Square</option>
                    <option value="rectangle">Rectangle</option>
                  </select>
                </div>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Produit</th>
                    <th>Prix Mazed</th>
                    <th>Nb de Participant</th>
                    <th>Date de Publication</th>
                    <th>Date de Déclenchement</th>
                    <th>Statut</th>
                    <th>Configuration</th>
                    <th>Voir</th>
                    <th>Modifier</th>
                    <th>Supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-bold-500">Michael Right</td>
                    <td>$15/hr</td>
                    <td className="text-bold-500">UI/UX</td>
                    <td className="text-bold-500">Michael Right</td>
                    <td>$15/hr</td>
                    <td>
                      <a href="#" className="btn btn-secondary">
                        secondary
                      </a>
                    </td>
                    <td>
                      <div className="buttons">
                        <Link to={'/ConfigurationEnchere'}  className="btn">
                        <i className="fas fa-cog"></i>
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="buttons">
                        <Link to={'/DetailEnchere'}  className="btn">
                        <i className="fa-solid fa-eye"></i>
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="buttons">
                        <Link to={'/EnchèreCreation'} className="btn">
                        <i class="fa-solid fa-pen-to-square"></i>
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="buttons">
                        <a className="btn">
                        <i class="fa-solid fa-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-bold-500">Michael Right</td>
                    <td>$15/hr</td>
                    <td className="text-bold-500">UI/UX</td>
                    <td className="text-bold-500">Michael Right</td>
                    <td>$15/hr</td>
                    <td>
                      <a href="#" className="btn btn-secondary">
                        secondary
                      </a>
                    </td>
                    <td>
                      <div className="buttons">
                        <Link to={'/ConfigurationEnchere'}  className="btn">
                        <i className="fas fa-cog"></i>
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="buttons">
                        <Link to={'/DetailEnchere'}  className="btn">
                        <i className="fa-solid fa-eye"></i>
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="buttons">
                        <Link to={'/EnchèreCreation'}
                          className="btn"
                        >
                          <i class="fa-solid fa-pen-to-square"></i>
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="buttons">
                        <a className="btn">
                        <i class="fa-solid fa-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-bold-500">Michael Right</td>
                    <td>$15/hr</td>
                    <td className="text-bold-500">UI/UX</td>
                    <td className="text-bold-500">Michael Right</td>
                    <td>$15/hr</td>
                    <td>
                      <a href="#" className="btn btn-secondary">
                        secondary
                      </a>
                    </td>
                    <td>
                      <div className="buttons">
                        <Link to={'/ConfigurationEnchere'}  className="btn">
                        <i className="fas fa-cog"></i>
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="buttons">
                        <Link to={'/DetailEnchere'}  className="btn">
                        <i className="fa-solid fa-eye"></i>
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="buttons">
                        <Link to={'/EnchèreCreation'}
                          className="btn"
                        >
                          <i class="fa-solid fa-pen-to-square"></i>
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="buttons">
                        <a className="btn">
                        <i class="fa-solid fa-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-bold-500">Michael Right</td>
                    <td>$15/hr</td>
                    <td className="text-bold-500">UI/UX</td>
                    <td className="text-bold-500">Michael Right</td>
                    <td>$15/hr</td>
                    <td>
                      <a href="#" className="btn btn-secondary">
                        secondary
                      </a>
                    </td>
                    <td>
                      <div className="buttons">
                        <Link to={'/ConfigurationEnchere'}  className="btn">
                        <i className="fas fa-cog"></i>
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="buttons">
                        <Link to={'/DetailEnchere'}  className="btn">
                        <i className="fa-solid fa-eye"></i>
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="buttons">
                        <Link to={'/EnchèreCreation'}
                          className="btn"
                        >
                         <i class="fa-solid fa-pen-to-square"></i>
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="buttons">
                        <a className="btn">
                        <i class="fa-solid fa-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-bold-500">Michael Right</td>
                    <td>$15/hr</td>
                    <td className="text-bold-500">UI/UX</td>
                    <td className="text-bold-500">Michael Right</td>
                    <td>$15/hr</td>
                    <td>
                      <a href="#" className="btn btn-secondary">
                        secondary
                      </a>
                    </td>
                    <td>
                      <div className="buttons">
                        <Link to={'/ConfigurationEnchere'}  className="btn">
                        <i className="fas fa-cog"></i>
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="buttons">
                        <Link to={'/DetailEnchere'}  className="btn">
                        <i className="fa-solid fa-eye"></i>
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="buttons">
                        <Link to={'/EnchèreCreation'}
                          className="btn"
                        >
                          <i class="fa-solid fa-pen-to-square"></i>
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="buttons">
                        <a className="btn">
                        <i class="fa-solid fa-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
    
      </div>
    </div>
  );
}

export default EnchereListe;
