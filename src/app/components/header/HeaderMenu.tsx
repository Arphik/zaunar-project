import React from 'react';
import './HeaderMenu.scss';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faShoppingCart, faUser, faHeart } from '@fortawesome/free-solid-svg-icons'

const HeaderMenu: React.FC = () => {
    return (
        <nav className="header__menu">
            <Link to="/panel" className="header__link">
                <div className="header__link-content">
                    <FontAwesomeIcon className="header__link--icon" icon={faHeadset} />
                    <span className="header__link--text">Wsparcie i kontakt</span>
                </div>
            </Link>
            <span className="header__separator"></span>
            {/* <Link to="/panel" className="header__link">
                <div className="header__link-content">
                    <FontAwesomeIcon icon={faUser} />
                    <span className="header__link--text">Twoje konto</span>
                </div>
            </Link> */}
            {/* <Link to="" className="header__link">
                <div className="header__link-content">
                    <FontAwesomeIcon icon={faHeart} />
                    <span className="header__link--text">Twoje listy</span>
                </div>
            </Link> */}
            <Link to="/cart" className="header__link">
                <div className="header__link-content">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span className="header__link--text">Koszyk</span>
                </div>
            </Link>
        </nav>
    );
}

export default HeaderMenu;