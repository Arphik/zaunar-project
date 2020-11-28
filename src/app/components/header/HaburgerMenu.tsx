import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import './HaburgerMenu.scss';

const HaburgerMenu = () => {

    // console.log(Menu);

    return (
        <nav className="navbar">
            <input id="navbar__checkbox" type="checkbox" className="navbar__checkbox" name="navbar__checkbox"/>
            <label htmlFor="navbar__checkbox" className="navbar__btn--label">
                <div className="navbar__btn--line"></div>
            </label>
            <div className="navbar__content">

                <div className="navbar__link" >
                    <Link to="/products" className="navbar__link--a">Produkty</Link>
                </div>
                <div className="navbar__link" >
                <Link to="/blog" className="navbar__link--a">Blog</Link>
                </div>
                <div className="navbar__link" >
                <Link to="/about" className="navbar__link--a">O sklepie</Link>
                </div>
                <div className="navbar__link" >
                <Link to="/contact" className="navbar__link--a">Kontakt</Link>
                </div>
            </div>
        </nav>
    );
}

export default HaburgerMenu;