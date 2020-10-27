import React from 'react';
import {
  BrowserRouter as Router,
  Link
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
                <Link to={url} className="menu-top__subcategories--link" key={index}>
                    {name}
                </Link>
            ))}
        </div>
    );
}
export default MenuTopSubLinks;