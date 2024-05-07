import React from 'react';

function Commandes() {
  return (
    <div className='content-container'>
    <section className="section">
      <div className="row" id="table-contexual">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h2 className="new-price">Tableau de Commandes</h2>
            </div>
            <div className="card-content">
              <div className="table-responsive">
                <table className="table" id="table1">
                  <thead>
                    <tr>
                      <th>Num Commande</th>
                      <th>Produit</th>
                      <th>Image Produit</th>
                      <th>Prix Produit</th>
                      <th>Status</th>
                      <th>Quantité</th>
                      <th>Prix Total</th>
                      <th>Date De Commande</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table">
                      <td className="text-bold-500">111111</td>
                      <td>Lorem Lorem</td>
                      <td><img src="" alt="img"/></td>
                      <td>200</td>
                      <td>500</td>
                      <td>800</td>
                      <td>2000000</td>
                      <td><span className="badge bg-success">Terminé</span></td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr className="table">
                      <td className="text-bold-500">111111</td>
                      <td>Lorem Lorem</td>
                      <td><img src="" alt="img"/></td>
                      <td>200</td>
                      <td>500</td>
                      <td>800</td>
                      <td>2000000</td>
                      <td><span className="badge bg-warning">En Cours</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Commandes;
