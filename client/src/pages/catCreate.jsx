import React from 'react'

const catCreate = () => {
  return (
    <div className="content-container">
    <div className="card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h2 class="card-title">Créer une catégorie</h2>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label>Libellé</label>
              <input type="text" className="form-control" id="basicInput" />
            </div>

            <div className="form-group">
              <label>Catégories</label>
              <input type="text" className="form-control" id="helpInputTop" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default catCreate