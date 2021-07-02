import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Menu } from 'semantic-ui-react';

const SıgnedOut = ({signIn}) => {

    return (
        <div>
            <Menu.Item>
                <Button as={NavLink} to="/login"    primary >Giriş yap</Button>
                <Button  as={NavLink} to="/register"   primary style={{marginLeft:"0.5em"}} >Kayıt ol</Button>
            </Menu.Item>

        </div>
    );
}

export default SıgnedOut;
