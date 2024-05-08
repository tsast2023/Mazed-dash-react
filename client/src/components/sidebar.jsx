import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "../css/sidebar.css";
import { Link } from "react-router-dom";
const Theme = "light";

const themes = {
  light: {
    sidebar: {
      backgroundColor: "#ffffff",
      color: "#000",
    },
    menu: {
      menuContent: "#fbfcfd",
      icon: "#000",
      hover: {
        backgroundColor: "#b0210e",
        color: "#fff",
      },
      disabled: {
        color: "#9fb6cf",
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: "#0b2948",
      color: "#8ba1b7",
    },
    menu: {
      menuContent: "#082440",
      icon: "#59d0ff",
      hover: {
        backgroundColor: "#00458b",
        color: "#b6c8d9",
      },
      disabled: {
        color: "#3e5e7e",
      },
    },
  },
};

const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const Playground = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(false);
  const [hasImage, setHasImage] = useState(false);
  const [theme, setTheme] = useState(Theme);

  // State to manage active link
  const [activeLink, setActiveLink] = useState("");

  const menuItemStyles = {
    root: {
      fontSize: "16px",
      fontWeight: 400,
      fontFamily: "Nunito",
    },
    icon: {
      color: themes[theme].menu.icon,
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(
              themes[theme].menu.menuContent,
              hasImage && !collapsed ? 0.4 : 1
            )
          : "transparent",
    }),
    button: {
      "&:hover": {
        backgroundColor: hexToRgba(
          themes[theme].menu.hover.backgroundColor,
          hasImage ? 0.8 : 1
        ),
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
    // Style for active link
    active: {
      backgroundColor: themes[theme].menu.hover.backgroundColor,
      color: themes[theme].menu.hover.color,
    },
  };

  return (
    <div style={{ display: "flex", overflow: "hidden" }}>
      <Sidebar
        style={{ overflowY: "auto" }}
        collapsed={collapsed}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        onBreakPoint={setBroken}
        breakPoint="md"
        backgroundColor={hexToRgba(
          themes[theme].sidebar.backgroundColor,
          hasImage ? 0.9 : 1
        )}
        rootStyles={{
          color: themes[theme].sidebar.color,
        }}
      >
        <div className="header">
          <img className="logo" src="./logo-mazed.png" alt="logo" />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <div style={{ flex: 1, marginBottom: "32px" }}>
            <Menu menuItemStyles={menuItemStyles}>
              <MenuItem
                component={<Link to="/" />}
                icon={<i className="fa-solid fa-house"></i>}
                onClick={() => setActiveLink("/")}
                style={activeLink === "/" ? menuItemStyles.active : null}
              >
                Tableau de bord
              </MenuItem>
              <SubMenu
                label="Super Admin"
                icon={<i className="fa-solid fa-user-tie"></i>}
              >
                <MenuItem
                  component={<Link to="/google-maps" />}
                  onClick={() => setActiveLink("/google-maps")}
                  style={
                    activeLink === "/google-maps" ? menuItemStyles.active : null
                  }
                >
                  Google maps
                </MenuItem>
                <MenuItem
                  component={<Link to="/open-street-maps" />}
                  onClick={() => setActiveLink("/open-street-maps")}
                  style={
                    activeLink === "/open-street-maps"
                      ? menuItemStyles.active
                      : null
                  }
                >
                  Open street maps
                </MenuItem>
              </SubMenu>
              <SubMenu
                label="Catégories"
                icon={<i className="fa-solid fa-layer-group"></i>}
              >
                <MenuItem
                  component={<Link to="/CreationCat" />}
                  onClick={() => setActiveLink("/CreationCat")}
                  style={
                    activeLink === "/CreationCat" ? menuItemStyles.active : null
                  }
                >
                  Création de catégorie
                </MenuItem>
                <MenuItem
                  component={<Link to="/ListeCat" />}
                  onClick={() => setActiveLink("/ListeCat")}
                  style={
                    activeLink === "/ListeCat" ? menuItemStyles.active : null
                  }
                >
                  Liste de catégories
                </MenuItem>
              </SubMenu>
              <SubMenu
                label="Produits"
                icon={<i className="fa-solid fa-diamond"></i>}
              >
                <MenuItem
                  component={<Link to="/CreationProd" />}
                  onClick={() => setActiveLink("/CreationProd")}
                  style={
                    activeLink === "/CreationProd"
                      ? menuItemStyles.active
                      : null
                  }
                >
                  Création de produit
                </MenuItem>
                <MenuItem
                  component={<Link to="/ProdListe" />}
                  onClick={() => setActiveLink("/ProdListe")}
                  style={
                    activeLink === "/ProdListe" ? menuItemStyles.active : null
                  }
                >
                  Liste de produits
                </MenuItem>
              </SubMenu>
              <SubMenu
                label="Enchère"
                icon={<i className="fa-solid fa-gavel"></i>}
              >
                <MenuItem
                  component={<Link to="/EnchèreCreation" />}
                  onClick={() => setActiveLink("/EnchèreCreation")}
                  style={
                    activeLink === "/EnchèreCreation"
                      ? menuItemStyles.active
                      : null
                  }
                >
                  Création de enchère
                </MenuItem>
                <MenuItem
                  component={<Link to="/EnchereListe" />}
                  onClick={() => setActiveLink("/EnchereListe")}
                  style={
                    activeLink === "/EnchereListe"
                      ? menuItemStyles.active
                      : null
                  }
                >
                  Liste de enchère
                </MenuItem>
                <MenuItem
                  component={<Link to="/OffreEnchere" />}
                  onClick={() => setActiveLink("/OffreEnchere")}
                  style={
                    activeLink === "/OffreEnchere"
                      ? menuItemStyles.active
                      : null
                  }
                >
                  Création des offres
                </MenuItem>
                <MenuItem
                  component={<Link to="/ConfigurationEnchere" />}
                  onClick={() => setActiveLink("/ConfigurationEnchere")}
                  style={
                    activeLink === "/ConfigurationEnchere"
                      ? menuItemStyles.active
                      : null
                  }
                >
                  Configuration
                </MenuItem>
              </SubMenu>

              <SubMenu
                label="Participants"
                icon={<i className="fa-solid fa-users"></i>}
              >
                <MenuItem
                  component={<Link to="/CreationPart" />}
                  onClick={() => setActiveLink("/CreationPart")}
                  style={
                    activeLink === "/CreationPart"
                      ? menuItemStyles.active
                      : null
                  }
                >
                  Création d'un participant
                </MenuItem>
                <MenuItem
                  component={<Link to="/PartListe" />}
                  onClick={() => setActiveLink("/PartListe")}
                  style={
                    activeLink === "/PartListe" ? menuItemStyles.active : null
                  }
                >
                  Liste des participants
                </MenuItem>
              </SubMenu>
              <SubMenu
                label="Vendeurs"
                icon={<i className="fa-solid fa-user-clock"></i>}
              >
                <MenuItem component={<Link to="/VendeurForm" />}>
                  {" "}
                  Création d'un vendeur{" "}
                </MenuItem>
                <MenuItem component={<Link to="/TableVendeurs" />}>
                  {" "}
                  Liste des vendeurs{" "}
                </MenuItem>
              </SubMenu>
              <SubMenu
                label="Utilisateurs"
                icon={<i className="fa-solid fa-user-check"></i>}
              >
                <MenuItem component={<Link to="/UtilisateurForm" />}>
                  {" "}
                  Création d'un utilisateur{" "}
                </MenuItem>
                <MenuItem component={<Link to="/TableUtilisateur" />}>
                  {" "}
                  Liste des utilisateurs{" "}
                </MenuItem>
              </SubMenu>
              <SubMenu
                label="Annonces"
                icon={<i className="fa-solid fa-volume-low"></i>}
              >
                <MenuItem
                  component={<Link to="/CreationAd" />}
                  onClick={() => setActiveLink("/CreationAd")}
                  style={
                    activeLink === "/CreationAd" ? menuItemStyles.active : null
                  }
                >
                  Création d'une annonce
                </MenuItem>
                <MenuItem
                  component={<Link to="/ListeAds" />}
                  onClick={() => setActiveLink("/ListeAds")}
                  style={
                    activeLink === "/ListeAds" ? menuItemStyles.active : null
                  }
                >
                  Liste des annonce
                </MenuItem>
              </SubMenu>
              <SubMenu
                label="Questions fréquents"
                icon={<i className="fa-solid fa-file-circle-question"></i>}
              >
                <MenuItem component={<Link to="/QuestionForm" />}>
                  {" "}
                  Création d'un question{" "}
                </MenuItem>
                <MenuItem component={<Link to="/QuestionList" />}>
                  {" "}
                  Liste des questions{" "}
                </MenuItem>
              </SubMenu>
              <SubMenu
                label="Termes et conditions"
                icon={<i className="fa-solid fa-clipboard"></i>}
              >
                <MenuItem component={<Link to="/TermsForm" />}>
                  {" "}
                  Création d'un terme
                </MenuItem>
                <MenuItem component={<Link to="/TermesList" />}>
                  {" "}
                  Termes et conditions{" "}
                </MenuItem>
              </SubMenu>
            </Menu>

            <Menu menuItemStyles={menuItemStyles}>
              <MenuItem
                component={<Link to="/Réclamations" />}
                icon={<i className="fa-solid fa-circle-exclamation"></i>}
                onClick={() => setActiveLink("/Réclamations")}
                style={
                  activeLink === "/Réclamations" ? menuItemStyles.active : null
                }
              >
                Réclamations
              </MenuItem>
              <MenuItem
                component={<Link to="/Transferts" />}
                icon={<i className="fa-solid fa-right-left"></i>}
                onClick={() => setActiveLink("/Transferts")}
                style={
                  activeLink === "/Transferts" ? menuItemStyles.active : null
                }
              >
                Demandes de transferts
              </MenuItem>
              <MenuItem
                component={<Link to="/Cartes" />}
                icon={<i className="fa-solid fa-credit-card"></i>}
                onClick={() => setActiveLink("/Cartes")}
                style={activeLink === "/Cartes" ? menuItemStyles.active : null}
              >
                Cartes recharges
              </MenuItem>
              <MenuItem
                component={<Link to="/Commandes" />}
                icon={<i className="fa-solid fa-bag-shopping"></i>}
                onClick={() => setActiveLink("/Commandes")}
                style={
                  activeLink === "/Commandes" ? menuItemStyles.active : null
                }
              >
                Commandes
              </MenuItem>
              <MenuItem
                component={<Link to="/Tutoriel" />}
                icon={<i class="fa-solid fa-video"></i>}
                onClick={() => setActiveLink("/Tutoriel")}
                style={
                  activeLink === "/Tutoriel" ? menuItemStyles.active : null
                }
              >
                Tutoriel
              </MenuItem>
              <MenuItem
                icon={<i className="fa-solid fa-right-from-bracket"></i>}
              >
                Déconnexion
              </MenuItem>
            </Menu>
          </div>
        </div>
      </Sidebar>

      <main style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ padding: "16px 24px", color: "#44596e" }}>
          <div style={{ marginBottom: "16px" }}>
            {broken && (
              <button
                className="sb-button"
                onClick={() => setToggled(!toggled)}
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            )}
          </div>
          <div style={{ marginBottom: "48px" }}>
            <div style={{ padding: "0 8px" }}>
              <div style={{ marginBottom: 16 }}>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ marginBottom: 16 }}>
                      {/* <Switch
                        id="collapse"
                        checked={collapsed}
                        onChange={() => setCollapsed(!collapsed)}
                        label="Collapse"
                      /> */}
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      {/* <Switch id="rtl" checked={rtl} onChange={handleRTLChange} label="RTL" /> */}
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      {/* <Switch
                        id="theme"
                        checked={theme === 'dark'}
                        onChange={handleThemeChange}
                        label="Dark theme"
                      /> */}
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      {/* <Switch id="image" checked={hasImage} onChange={handleImageChange} label="Image" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Playground;
