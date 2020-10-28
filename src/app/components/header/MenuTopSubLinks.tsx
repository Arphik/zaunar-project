import React from 'react';
import {
  NavLink
} from "react-router-dom";
import './MenuTopSubLinks.scss';
import { SubCatLink } from './MenuTop';

type Props = {
    subcatlinks: SubCatLink[]
}

const MenuTopSubLinks = ({subcatlinks}: Props) => {

    return (
        <div className="menu-top__subcategories--links">
            {subcatlinks.map(({name, url}, index) => (
                <NavLink to={url} className="menu-top__subcategories--link" key={index}>
                    {name}
                </NavLink>
            ))}
        </div>
    );
}
export default MenuTopSubLinks;