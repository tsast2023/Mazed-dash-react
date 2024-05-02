import React from 'react'
import '../css/EnchèreCreation.css'

function EnchèreCreation() {
  return (
<div className='content-container'>
  <div className="page-heading">
    <section id="basic-vertical-layouts">
      <div className=" match-height">
        <div>
          <div className="card">
            <div className="card-header">
              <h2 className="new-price">Création De Enchere</h2>
            </div>
            <div className="card-content">
              <div className="card-body">
                <form className="form form-vertical">
                  <div className="form-body">
                    <div className="row">
                      <div className="col-12">
                       
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="email-id-vertical">Prix magasin</label>
                          <input type="number" id="email-id-vertical" className="form-control" name="email-id" placeholder="dt" required />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="email-id-vertical">Prix Mazed Online</label>
                          <input type="number" id="email-id-vertical" className="form-control" name="email-id" placeholder="prix mazad" required />
                        </div>
                      </div>
                      <div className="col-12">
                        <label>Produits</label>
                        <div className="form-group">
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
                      </div>
                      <div className="col-12">
                        <label>Ville</label>
                        <fieldset className="form-group">
                          <select className="form-select" id="basicSelect" required>
                            <option>Sousse</option>
                            <option>Gafsa</option>
                            <option>Tunis</option>
                            <option>Ariana</option>
                            <option>Béja</option>
                            <option>Ben Arous</option>
                            <option>Bizerte</option>
                            <option>Gabes</option>
                            <option>Jendouba</option>
                            <option>Kairouan</option>
                            <option>Kasserine</option>
                            <option>Kebili</option>
                            <option>La Manouba</option>
                            <option>Le Kef</option>
                            <option>Mahdia</option>
                            <option>Médenine</option>
                            <option>Monastir</option>
                            <option>Nabeul</option>
                            <option>Sfax</option>
                            <option>Sidi Bouzid</option>
                            <option>Siliana</option>
                            <option>Tataouine</option>
                            <option>Tozeur</option>
                            <option>Zaghouan</option>
                          </select>
                        </fieldset>
                      </div>
                      
                      <div className="col-12">
                        <div className="form-check">
                          <div className="checkbox">
                            <input type="checkbox" id="checkbox3" className="form-check-input" defaultChecked />
                            <label htmlFor="checkbox3">Remember Me</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary me-1 mb-1"><a style={{color: 'white'}}  href="configuration.html">Suivant</a> </button>
                        <button type="reset" className="btn btn-light-secondary me-1 mb-1">Annuler</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 </div>
 </div>
  )
}

export default EnchèreCreation