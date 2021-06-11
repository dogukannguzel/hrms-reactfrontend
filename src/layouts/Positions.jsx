import React, { useEffect, useState } from "react";
import { Input, Label, Menu } from "semantic-ui-react";
import JobPositionsService from "../services/positionService";

import { NavLink } from "react-router-dom";
const Positions = () => {
 

  return (
    <div>
      <Menu vertical>
        <Menu.Item header>Menu</Menu.Item>
      <Menu.Item as={NavLink}  to="/candidateList"  name="updates">CandidatesList</Menu.Item>
      <Menu.Item as={NavLink}  to="/companyList"   name="updates">CompanyList</Menu.Item>
      <Menu.Item as={NavLink}  to="/jobAdvertisementList"  name="updates">JobAdvertisementsList</Menu.Item>
      </Menu>
    </div>
  );
};

export default Positions;
