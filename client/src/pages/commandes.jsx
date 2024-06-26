import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

function Commandes() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1212); // Adjust this breakpoint as needed
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='content-container'>
      <section className="section">
        <div className="row" id="table-contexual">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h2 className="new-price">{t("Tableau de Commandes")}</h2>
              </div>
              <div className="card-content">
                <div className="table-responsive">
                  {isMobile ? (
                    <MobileTable />
                  ) : (
                    <DesktopTable />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DesktopTable() {
  const { t } = useTranslation();
  return (
    <table className="table" id="table1">
      <thead>
        <tr>
          <th>{t("Num Commande")}</th>
          <th>{t("Produit")}</th>
          <th>{t("Image Produit")}</th>
          <th>{t("Prix Produit")}</th>
          <th>{t("Quantité")}</th>
          <th>{t("Prix Total")}</th>
          <th>{t("Date De Commande")}</th>
          <th>{t("Status")}</th>
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
          <td><span className="badge bg-secondary">{t("Terminé")}</span></td>
        </tr>
        <tr className="table">
          <td className="text-bold-500">111111</td>
          <td>Lorem Lorem</td>
          <td><img src="" alt="img"/></td>
          <td>200</td>
          <td>500</td>
          <td>800</td>
          <td>2000000</td>
          <td><span className="badge bg-warning">{t("En Cours")}</span></td>
        </tr>
      </tbody>
    </table>
  );
}

function MobileTable() {
  const { t } = useTranslation();
  return (
    <table className="table" id="table1">
      <tbody>
        <tr>
          <td>{t("Num Commande")}</td>
          <td className="text-bold-500">111111</td>
        </tr>
        <tr>
          <td>{t("Produit")}</td>
          <td>Lorem Lorem</td>
        </tr>
        <tr>
          <td>{t("Image Produit")}</td>
          <td><img src="" alt="img"/></td>
        </tr>
        <tr>
          <td>{t("Prix Produit")}</td>
          <td>200</td>
        </tr>
        <tr>
          <td>{t("Quantité")}</td>
          <td>500</td>
        </tr>
        <tr>
          <td>{t("Prix Total")}</td>
          <td>800</td>
        </tr>
        <tr>
          <td>{t("Date De Commande")}</td>
          <td>2000000</td>
        </tr>
        <tr>
          <td>{t("Status")}</td>
          <td><span className="badge bg-secondary">{t("Terminé")}</span></td>
        </tr>
        <tr>
          <td colSpan="2"><hr /></td> {/* Horizontal rule added here */}
        </tr>
        <tr>
          <td>{t("Num Commande")}</td>
          <td className="text-bold-500">111111</td>
        </tr>
        <tr>
          <td>{t("Produit")}</td>
          <td>Lorem Lorem</td>
        </tr>
        <tr>
          <td>{t("Image Produit")}</td>
          <td><img src="" alt="img"/></td>
        </tr>
        <tr>
          <td>{t("Prix Produit")}</td>
          <td>200</td>
        </tr>
        <tr>
          <td>{t("Quantité")}</td>
          <td>500</td>
        </tr>
        <tr>
          <td>{t("Prix Total")}</td>
          <td>800</td>
        </tr>
        <tr>
          <td>{t("Date De Commande")}</td>
          <td>2000000</td>
        </tr>
        <tr>
          <td>{t("Status")}</td>
          <td><span className="badge bg-warning">{t("En Cours")}</span></td>
        </tr>
      </tbody>
    </table>
  );
}

export default Commandes;
