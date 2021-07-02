import React from "react";
import { Icon, Menu } from "semantic-ui-react";


import { NavLink } from "react-router-dom";
const NavMenu = () => {
 

  return (
    <div>
      <Menu vertical>
        <Menu.Item  header>Menu</Menu.Item>
      <Menu.Item  as={NavLink}  to="/candidateList"   name="updates">Candidate List</Menu.Item>
      <Menu.Item   as={NavLink}  to="/companyList"   name="updates">Company List</Menu.Item>
      <Menu.Item   as={NavLink}  to="/jobAdvertisementList"  name="updates">JobAdvertisement List</Menu.Item>
      </Menu>
    </div>
  );
};

export default NavMenu;
