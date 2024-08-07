import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Winners() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1212);
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="content-container">
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3"></i>
          </a>
        </header>
        <section className="section">
          <div className="row" id="table-contexual">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h2 className="new-price">{t("Liste des gagnants")}</h2>
                </div>
                <div className="card-content">
                  <div className="table-responsive">
                    {isMobile ? (
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>{t("Nom")}</td>
                            <td>Lorem</td>
                          </tr>
                          <tr>
                            <td>{t("Prénom")}</td>
                            <td>{t("Lorem Lorem")}</td>
                          </tr>
                          <tr>
                            <td>{t("Pseudo")}</td>
                            <td>{t("Lorem Lorem")}</td>
                          </tr>
                          <tr>
                            <td>{t("Email")}</td>
                            <td> Lorem@Lorem.Lorem </td>
                          </tr>
                          <tr>
                            <td>{t("Enchère")}</td>
                            <td>
                              <Link to="/DetailEnchere" className="btn btn-outline block">
                                <i className="fa-solid fa-eye font-medium-1"></i>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="2">
                              <hr />
                            </td>
                          </tr>
                          <tr>
                            <td>{t("User")}</td>
                            <td>
                              <img
                                style={{ borderRadius: "50px" }}
                                className="imgtable"
                                src="./Mazed.jpg"
                                alt="img"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>{t("Nom")}</td>
                            <td>Lorem</td>
                          </tr>
                          <tr>
                            <td>{t("Prénom")}</td>
                            <td>{t("Lorem Lorem")}</td>
                          </tr>
                          <tr>
                            <td>{t("Pseudo")}</td>
                            <td>{t("Lorem Lorem")}</td>
                          </tr>
                          <tr>
                            <td>{t("Email")}</td>
                            <td>Lorem@Lorem.Lorem</td>
                          </tr>
                          <tr>
                            <td>{t("Enchère")}</td>
                            <td>
                              <Link to="/DetailEnchere" className="btn btn-outline block">
                                <i className="fa-solid fa-eye font-medium-1"></i>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    ) : (
                      <table className="table">
                        <thead>
                          <tr>
                            <th>{t("User")}</th>
                            <th>{t("Nom")}</th>
                            <th>{t("Prénom")}</th>
                            <th>{t("Pseudo")}</th>
                            <th>{t("Enchère")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                style={{ borderRadius: "50px" }}
                                className="imgtable"
                                src="./Mazed.jpg"
                                alt="img"
                              />
                            </td>
                            <td>{t("Lorem Lorem")}</td>
                            <td className="text-bold-500">
                              {t("Lorem Lorem")}
                            </td>
                            <td>Lorem Lorem</td>
                            <td>
                              <Link to="/DetailEnchere" className="btn btn-outline block">
                                <i className="fa-solid fa-eye font-medium-1"></i>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                style={{ borderRadius: "50px" }}
                                className="imgtable"
                                src="./Mazed.jpg"
                                alt="img"
                              />
                            </td>
                            <td>{t("Lorem Lorem")}</td>
                            <td className="text-bold-500">
                              {t("Lorem Lorem")}
                            </td>
                            <td>Lorem Lorem</td>
                            <td>
                              <Link to="/DetailEnchere" className="btn btn-outline block">
                                <i className="fa-solid fa-eye font-medium-1"></i>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Winners;
