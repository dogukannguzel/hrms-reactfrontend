import React from "react";

import { Button, Container, Dropdown, Menu, Icon } from "semantic-ui-react";
const Navi = () => {
  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item name="Ana Sayfa" />
          <Menu.Item name="İş ilanları" />
          <Menu.Item name="İş arayanlar" />
          <Menu.Item name="İş verenler" />
          <Menu.Menu position="right">
            <Menu.Item>
              <Button color="blue" attached="left">Kayıt ol</Button>
              <Button color="blue" attached="right">Giriş yap</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
};

export default Navi;
