import React from "react";

function TermsAcheteur() {
  return (
    <div className="content-container">
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3" />
          </a>
        </header>
        <div className="page-heading">
          <div className="page-title">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 order-last">
                {/* <h3>Layout Default</h3> */}
                <p className="text-subtitle text-muted">The default layout.</p>
              </div>
              <div className="col-12 col-md-6 order-md-2 order-first">
                <nav
                  aria-label="breadcrumb"
                  className="breadcrumb-header float-start float-lg-end"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Layout Default
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <section className="section">
            <div className="card">
              <div className="card-header">
                <h3 className="new-price">Default Layout</h3>
              </div>
              <div className="card-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                commodi? Ullam quaerat similique iusto temporibus, vero aliquam
                praesentium, odit deserunt eaque nihil saepe hic deleniti?
                Placeat delectus quibusdam ratione ullam!
              </div>
            </div>
          </section>
        </div>
        <footer>
          <div className="footer clearfix mb-0 text-muted">
            <div className="float-start">
              <p>2024 © Mazed</p>
            </div>
            <div className="float-end">
              <p>
                Crafted with
                <span className="text-danger">
                  <i className="bi bi-heart-fill icon-mid" />
                </span>
                by <a href="https://TSAST.me">TSAST</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default TermsAcheteur;
