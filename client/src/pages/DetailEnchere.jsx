import React, { useState, useEffect } from "react";
import "../css/DetailEnchere.css";
import { Link } from "react-router-dom";
import "../css/DetailEnchere.css";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

function DetailEnchere() {
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

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

  const deleteItem = () => {
    // Implement your delete logic here
  };

  const handleDelete = () => {
    Swal.fire({
      title: t("Êtes-vous sûr(e) ?"),
      text: t(
        "Une fois supprimé(e), vous ne pourrez pas récupérer cet élément !"
      ),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: t("Oui, supprimez-le !"),
      cancelButtonText: t("Non, annuler !"),
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem();
        Swal.fire(
          t("Supprimé(e) !"),
          t("Votre élément a été supprimé."),
          "secondary"
        );
      } else {
        Swal.fire(t("Annulé"), t("Votre élément est en sécurité :)"), "error");
      }
    });
  };

  useEffect(() => {
    const imgs = document.querySelectorAll(".img-select a");
    const imgBtns = [...imgs];
    let imgId = 1;

    imgBtns.forEach((imgItem) => {
      imgItem.addEventListener("click", (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
      });
    });

    function slideImage() {
      const displayWidth = document.querySelector(
        ".img-showcase img:first-child"
      )?.clientWidth;

      if (displayWidth) {
        document.querySelector(".img-showcase").style.transform = `translateX(${
          -(imgId - 1) * displayWidth
        }px)`;
      }
    }

    window.addEventListener("resize", slideImage);

    // Cleanup function
    return () => {
      imgBtns.forEach((imgItem) => {
        imgItem.removeEventListener("click", slideImage);
      });
      window.removeEventListener("resize", slideImage);
    };
  }, []);

  const product = {
    title: "Sample Product",
    description:
      "This is a sample product description. It provides details about the product features and benefits.",
    price: 99.99,
    stock: 20,
    images: [
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400/ff7f7f",
      "https://via.placeholder.com/600x400/7f7fff",
      "https://via.placeholder.com/600x400/7fff7f",
    ],
  };

  const [mainImage, setMainImage] = useState(product.images[0]);

  const confirmAction = (actionType) => {
    Swal.fire({
      title: t("Êtes-vous sûr?"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#b0210e",
      confirmButtonText: t("Oui"),
      cancelButtonText: t("Non, annuler!"),
    }).then((result) => {
      if (result.isConfirmed) {
        let message;
        switch (actionType) {
          case "Désactiver":
            message = t("L'élément a été désactivé");
            break;
          case "Supprimé":
            message = t("L'élément a été supprimé");
            break;
          case "Terminé":
            message = t("L'élément a été ajouté");
            break;
          default:
            message = t("Action terminée");
        }
        Swal.fire(
          t(actionType.charAt(0).toUpperCase() + actionType.slice(1)),
          message,
          "success"
        );
      }
    });
  };

  return (
    <div className="content-container">
      <div id="main">
        <section className="section">
          <div className="card-wrap">
            <div className="card">
              <div className="product-detail">
                <div className="product-images">
                  <div className="main-image">
                    <img src={mainImage} alt="Product" />
                  </div>
                  <div className="thumbnail-images">
                    {product.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => setMainImage(image)}
                      />
                    ))}
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-price">
                    <div className="col-md-12  mb-4">
                      <div
                        style={{
                          margin: 0,
                          backgroundColor: "white",
                          justifyContent: "center",
                          padding: 20,
                        }}
                        className="row form-group"
                      >
                        <h2 className="new-price">{t("Etat")} :</h2>
                        <div className="col-6">
                          <p>{t("En cours")} :</p>
                          <p>{t("Prix Mazed online")}</p>
                          <p>{t("Temps restant")}</p>
                          <p>{t("Nom et Prénom")}</p>
                          <p>{t("Pseudo")}</p>
                          <p>{t("Numéro du téléphone")}</p>
                          <p>{t("Heure/minute/seconde de majoration")}</p>
                          <p>{t("Majoration")}</p>
                          <p>{t("Prix lors de la majoration")}</p>
                        </div>
                        <div className="col-6">
                          <p>{t("Terminer")} :</p>
                          <p>{t("Prix Mazed online final")}</p>
                          <p>{t("Date/Heure")}</p>
                          <p>{t("Nom et Prénom")}</p>
                          <p>{t("Pseudo")}</p>
                          <p>{t("Numéro du téléphone")}</p>
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            {t("Publier")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="product-price">
                <br />
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <section className="section">
          <div className="card">
            <div className="card-header">
              <h2 className="new-price">{t("Liste des participants")}</h2>
            </div>
            <div className="card-body">
              <div className="table-responsive datatable-minimal">
                {isMobile ? (
                  <table className="table" id="table2">
                    <tbody>
                      <tr>
                        <td>{t("Nom de famille")}</td>
                        <td>Thamer</td>
                      </tr>
                      <tr>
                        <td>{t("Prénom")}</td>
                        <td>Seif</td>
                      </tr>
                      <tr>
                        <td>{t("Pseudo")}</td>
                        <td>Clubisty</td>
                      </tr>
                      <tr>
                        <td>{t("Numéro du téléphone")}</td>
                        <td>(+1) 613 820 8838</td>
                      </tr>
                      <tr>
                        <td>{t("Date de participation")}</td>
                        <td>04/07/2026</td>
                      </tr>
                      <tr>
                        <td>{t("Nombre d'encheres y liées")}</td>
                        <td>69</td>
                      </tr>
                      <tr>
                        <td>{t("Lien Page Details")}</td>
                        <td>Lien</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <table className="table" id="table2">
                    <thead>
                      <tr>
                        <th>{t("Nom de famille")}</th>
                        <th>{t("Prénom")}</th>
                        <th>{t("Pseudo")}</th>
                        <th>{t("Numéro du téléphone")}</th>
                        <th>{t("Date de participation")}</th>
                        <th>{t("Nombre d'encheres y liées")}</th>
                        <th>{t("Détail")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Thamer</td>
                        <td>Seif</td>
                        <td>Clubisty</td>
                        <td>(+1) 613 820 8838</td>
                        <td>04/07/2026</td>
                        <td>69</td>
                        <td>
                          <Link to="/Profile" className="btn btn-outline block">
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
        </section>
        <br />
        <br />

        <section className="section">
          <div className="card">
            <div className="card-header">
              <h2 className="new-price">{t("Liste des Enchèrissement")}</h2>
            </div>
            <div className="card-body">
              <div className="table-responsive datatable-minimal">
                {isMobile ? (
                  <table className="table" id="table2">
                    <tbody>
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
                        <td>Seif</td>
                      </tr>
                      <tr>
                        <td>{t("Prénom")}</td>
                        <td>Seif</td>
                      </tr>
                      <tr>
                        <td>{t("Pseudo")}</td>
                        <td>Clubisty</td>
                      </tr>
                      <tr>
                        <td>{t("Heure de majoration")}</td>
                        <td>Date Here</td>
                      </tr>
                      <tr>
                        <td>{t("Valeur Majoration")}</td>
                        <td>04/07/2026</td>
                      </tr>
                      <tr>
                        <td>{t("Montant total")}</td>
                        <td>69</td>
                      </tr>
                      <tr>
                        <td>{t("Gagant")}</td>
                        <td>
                          <i className="fa-solid fa-trophy"></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <table className="table" id="table2">
                    <thead>
                      <tr>
                        <th>{t("User")}</th>
                        <th>{t("Nom")}</th>
                        <th>{t("Prénom")}</th>
                        <th>{t("Pseudo")}</th>
                        <th>{t("Heure de majoration")}</th>
                        <th>{t("Valeur Majoration")}</th>
                        <th>{t("Montant total")}</th>
                        <th>{t("Gagant")}</th>
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
                        <td>Seif</td>
                        <td>Seif</td>
                        <td>Clubisty</td>
                        <td>Date Here</td>
                        <td>04/07/2026</td>
                        <td>69</td>
                        <td>
                          <Link to="/Profile" className="btn btn-outline block">
                            <i className="fa-solid fa-trophy"></i>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DetailEnchere;
