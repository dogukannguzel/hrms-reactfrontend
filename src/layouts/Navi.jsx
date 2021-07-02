import React from "react";
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import SıgnedIn from "./SıgnedIn";
import { Button, Container, Dropdown, Menu, Icon } from "semantic-ui-react";
import SıgnedOut from "./SıgnedOut";
const Navi = () => {


  const history=useHistory()

  const [isAuthhentication, setisAuthhentication] = useState(true)




  function handleSignOut() {

    setisAuthhentication(false)
    history.push("/")
  }

  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as={NavLink} to="/" exact  name="Ana Sayfa" />
    
          <Menu.Menu position="right">
      {isAuthhentication?<SıgnedIn sıgnedOut={handleSignOut}  />:<SıgnedOut/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
};

export default Navi;
