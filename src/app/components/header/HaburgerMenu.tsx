import React from 'react';
import {
    NavLink
} from "react-router-dom";
import './HaburgerMenu.scss';
import { matchPath, useParams } from "react-router";

type IState = {
    match: {
      isExact: boolean,
      params: {
        id: string
      },
    },
  }

  
const HaburgerMenu = () => {

    const params = useParams();
    console.log('Match', params);

    return (
        <nav className="navbar">
            <input id="navbar__checkbox" type="checkbox" className="navbar__checkbox" name="navbar__checkbox"/>
            <label htmlFor="navbar__checkbox" className="navbar__btn--label">
                <div className="navbar__btn--line"></div>
            </label>
            <div className="navbar__content">

                <div className="navbar__link" >
                    <NavLink to="/products" className="navbar__link--a">Produkty</NavLink>
                </div>
                <div className="navbar__link" >
                <NavLink to="/blog" className="navbar__link--a">Blog</NavLink>
                </div>
                <div className="navbar__link" >
                <NavLink to="/about" className="navbar__link--a">O nas</NavLink>
                </div>
                <div className="navbar__link" >
                <NavLink to="/contact" className="navbar__link--a">Kontakt</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default HaburgerMenu;