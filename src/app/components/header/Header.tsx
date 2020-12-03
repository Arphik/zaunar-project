import React from 'react';
import './Header.scss';
import HeaderMenu from './HeaderMenu';
import HaburgerMenu from './HaburgerMenu';
import {
    Link
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header: React.FC = () => {
    return (
        <header className="header">

            <div className="header__container1">
                <Link to="/" className="header__logo">
                    <img src="./assets/logo.png" alt="" className="header__logo--img"/>
                    Akademia Zaunara
                </Link>

                <div className="header__search">
                    <input type="text" name="" id="" className="header__search--input" placeholder="What are you searching?" />
                    <button className="header__search--button"><FontAwesomeIcon icon={faSearch} /></button>
                </div>

                <HeaderMenu />

            </div>


            <div className="header__container2">

                <div className="header__top-menu">
                    <Link to="/sup" className="header__top-menu--link">
                        <span className="header__top-menu--a">
                            SUP SHOP
                        </span>
                    </Link>
                    <Link to="/wood" className="header__top-menu--link">
                        <span className="header__top-menu--a">
                            WOODEN HANDMADES
                        </span>
                    </Link>
                    <HaburgerMenu />
                </div>

            </div>
        </header>
    );
}

export default Header;