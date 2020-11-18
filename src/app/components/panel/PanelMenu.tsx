import React from 'react';
import './PanelMenu.scss';
import { NavLink } from 'react-router-dom';

const PanelMenu = () => {
    return (
        <nav className="panel__menu">
        <NavLink to="/panel/list" className="panel__link" activeClassName="active">Products list</NavLink>
            <NavLink to="/panel/add" className="panel__link" activeClassName="active">Add product</NavLink>
            <NavLink to="/panel/edit" className="panel__link" activeClassName="active">Edit product</NavLink>
        </nav>
    );
}

export default PanelMenu;