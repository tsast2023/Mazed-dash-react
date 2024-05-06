import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../css/prod-detail.css";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [
    "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg",
    "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg",
    "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg",
    "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg",
  ];

  useEffect(() => {
    window.addEventListener("resize", updateImagePosition);
    return () => window.removeEventListener("resize", updateImagePosition);
  }, []);

  const updateImagePosition = () => {
    const displayWidth =
      document.querySelector(".img-showcase img").clientWidth;
    document.querySelector(".img-showcase").style.transform = `translateX(${
      -selectedImage * displayWidth
    }px)`;
  };

  const selectImage = (index) => {
    setSelectedImage(index);
    updateImagePosition();
  };

  const confirmAction = (actionType) => {
    Swal.fire({
      title: `Are you sure you want to ${actionType}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, ${actionType} it!`,
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Implement the action based on actionType
        Swal.fire("Completed!", `The item has been ${actionType}.`, "success");
      }
    });
  };

  return (
    <section className="section">
      <div className="cardProd_wrapper">
        <div className="cardProd">
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                {images.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Shoe ${index + 1}`}
                    onClick={() => selectImage(index)}
                  />
                ))}
              </div>
            </div>
            <div className="img-select">
              {images.map((src, index) => (
                <div key={src} className="img-item">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      selectImage(index);
                    }}
                  >
                    <img src={src} alt={`Shoe ${index + 1}`} />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="product-content">
            <h2 className="product-title">Nom de produit</h2>
            <a href="#" className="product-link">
              Catégorie
            </a>
            <div className="product-price">
              <p className="new-price">
                Prix: <span>$249.00</span>
              </p>
            </div>
            <div className="product-detail">
              <h2>Description</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              <ul>
                <li>
                  Stock initial : <span>20</span>
                </li>
                <li>
                  Stock actuel : <span>10</span>
                </li>
                <li>
                  Couleurs : <span>Black</span>
                </li>
                <li>
                  Statut : <span>Publié</span>
                </li>
              </ul>
            </div>
            <div className="form-group">
              <button
                className="btn btn-primary me-3"
                onClick={() => confirmAction("edit")}
              >
                Modifier
              </button>
              <button
                className="btn btn-primary me-3 banIcon"
                onClick={() => confirmAction("deactivate")}
              >
                Désactiver
              </button>
              <button
                className="btn btn-primary me-3 deleteIcon"
                onClick={() => confirmAction("delete")}
              >
                Supprimer
              </button>
              <button
                className="btn btn-primary"
                onClick={() => confirmAction("add auction")}
              >
                Ajouter une enchère
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
