import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu  } from 'react-pro-sidebar';
import './sidebar.css'
const Theme = 'light';

const themes = {
  light: {
    sidebar: {
      backgroundColor: '#ffffff',
      color: '#607489',
    },
    menu: {
      menuContent: '#fbfcfd',
      icon: '#607489',
      hover: {
        backgroundColor: '#f9df86',
        color: '#44596e',
      },
      disabled: {
        color: '#9fb6cf',
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: '#0b2948',
      color: '#8ba1b7',
    },
    menu: {
      menuContent: '#082440',
      icon: '#59d0ff',
      hover: {
        backgroundColor: '#00458b',
        color: '#b6c8d9',
      },
      disabled: {
        color: '#3e5e7e',
      },
    },
  },
};

// hex to rgba converter
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

 

  const menuItemStyles = {
    root: {
      fontSize: '16px',
      fontWeight: 400,
      fontFamily:'Nunito'
  
    },
    icon: {
      color: themes[theme].menu.icon,
    },
    SubMenuExpandIcon: {
      color: '#b6b7b9',
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(themes[theme].menu.menuContent, hasImage && !collapsed ? 0.4 : 1)
          : 'transparent',
    }),
    button: {
      '&:hover': {
        backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, hasImage ? 0.8 : 1),
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        onBreakPoint={setBroken}
        image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
        
        breakPoint="md"
        backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, hasImage ? 0.9 : 1)}
        rootStyles={{
          color: themes[theme].sidebar.color,
        }}
      >
        <div className='header' >
          <img className='logo' src='./logo-mazed.png' alt='logo' />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ flex: 1, marginBottom: '32px' }}>
            <Menu menuItemStyles={menuItemStyles}>
            <MenuItem icon={<i className="fa-solid fa-house"></i>}>Tableau de bord</MenuItem>
              <SubMenu label="Super Admin" icon={<i className="fa-solid fa-user-tie"></i>}>
                <MenuItem> Google maps</MenuItem>
                <MenuItem> Open street maps</MenuItem>
              </SubMenu>
              <SubMenu label="Catégories" icon={<i className="fa-solid fa-layer-group"></i>}>
              <MenuItem> Création de catégorie </MenuItem>
              <MenuItem> Liste de catégorie </MenuItem>
              </SubMenu>
              <SubMenu label="Produits" icon={<i className="fa-solid fa-diamond"></i>}>
              <MenuItem> Création de produit </MenuItem>
              <MenuItem> Liste de produits </MenuItem>
              </SubMenu>
              <SubMenu label="Enchère" icon={<i className="fa-solid fa-gavel"></i>}>
              <MenuItem> Création de enchère </MenuItem>
              <MenuItem> Liste de enchère </MenuItem>
              <MenuItem> Création des offres </MenuItem>
              <MenuItem> Configuration </MenuItem>
              </SubMenu>
              <SubMenu label="Participants" icon={<i className="fa-solid fa-users"></i>}>
              <MenuItem> Création d'un participant </MenuItem>
              <MenuItem> Liste des participants </MenuItem>
              </SubMenu>
              <SubMenu label="Vendeurs" icon={<i className="fa-solid fa-user-clock"></i>}>
              <MenuItem> Création d'un vendeur </MenuItem>
              <MenuItem> Liste des vendeurs </MenuItem>
              </SubMenu>
              <SubMenu label="Utilisateurs" icon={<i className="fa-solid fa-user-check"></i>}>
              <MenuItem> Création d'un utilisateur </MenuItem>
               <MenuItem> Liste des utilisateurs </MenuItem>
              </SubMenu>
              <SubMenu label="Annoces" icon={<i className="fa-solid fa-volume-low"></i>}>
              <MenuItem> Création d'une annonce </MenuItem>
              <MenuItem> Liste des annonce </MenuItem>
              </SubMenu>
              <SubMenu label="Questions fréquents" icon={<i className="fa-solid fa-file-circle-question"></i>}>
              <MenuItem> Création d'un question </MenuItem>
              <MenuItem> Liste des questions </MenuItem>
              </SubMenu>
              <SubMenu label="Termes et conditions" icon={<i className="fa-solid fa-clipboard"></i>}>
              <MenuItem> Création d'un terme</MenuItem>
              <MenuItem> Termes et conditions </MenuItem>
              </SubMenu>
            </Menu>

            <Menu menuItemStyles={menuItemStyles}>
              <MenuItem icon={<i className="fa-solid fa-circle-exclamation"></i>}> Réclamations </MenuItem>
              <MenuItem icon={<i className="fa-solid fa-right-left"></i>}> Demandes de transferts</MenuItem>
              <MenuItem icon={<i className="fa-solid fa-credit-card"></i>}> Cartes recharges</MenuItem>
              <MenuItem icon={<i className="fa-regular fa-file-video"></i>}> Tutoriel</MenuItem>
              <MenuItem icon={<i className="fa-solid fa-right-from-bracket"></i>}> Déconnexion</MenuItem>
            </Menu>
          </div>
        </div>
      </Sidebar>

      <main>
        <div style={{ padding: '16px 24px', color: '#44596e' }}>
        <div style={{ marginBottom: '16px' }}>
            {broken && (
              <button className="sb-button" onClick={() => setToggled(!toggled)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
              </button>
            )}
          </div>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ padding: '0 8px' }}>
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
