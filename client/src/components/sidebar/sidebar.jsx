import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from "react-router-dom";

const sidebar = () => {
  return (
    <>
      <Sidebar>
        <Menu>
        <MenuItem> Tableau de bord </MenuItem>
        <SubMenu label="Super Admin">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <SubMenu label="Catégories">
            <MenuItem> Création de catégorie </MenuItem>
            <MenuItem> Liste de catégorie </MenuItem>
          </SubMenu>
          <SubMenu label="Produits">
            <MenuItem> Création de produit </MenuItem>
            <MenuItem> Liste de produits </MenuItem>
          </SubMenu>
          <SubMenu label="Enchère">
            <MenuItem> Création de enchère </MenuItem>
            <MenuItem> Liste de enchère </MenuItem>
            <MenuItem> Création des offres </MenuItem>
            <MenuItem> Configuration </MenuItem>
          </SubMenu>
          <MenuItem> Réclamations </MenuItem>
          <SubMenu label="Participants">
            <MenuItem> Création d </MenuItem>
            <MenuItem> Liste de enchère </MenuItem>
            <MenuItem> Création des offres </MenuItem>
            <MenuItem> Configuration </MenuItem>
          </SubMenu>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export default sidebar;
