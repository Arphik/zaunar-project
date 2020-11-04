import React from 'react';
import './PanelMenu.scss';
import { NavLink } from 'react-router-dom';

const PanelMenu = () => {
    return (
        <nav className="panel__menu">
            <NavLink to="/panel/add" className="panel__link" activeClassName="active">Add product</NavLink>
            <NavLink to="/panel/list" className="panel__link" activeClassName="active">Products list</NavLink>
        </nav>
    );
}

export default PanelMenu;