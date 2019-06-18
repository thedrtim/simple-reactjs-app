import React from 'react';
import HeaderMenu from '../Menu/Menu';

const Menu = (props) => {
    return (
        <div>
            <HeaderMenu />
            {props.children}
        </div>
    )
}

export default Menu;
