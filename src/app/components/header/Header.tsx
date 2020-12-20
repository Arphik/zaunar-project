import React from 'react';
import './Header.scss';
import HeaderMenu from './HeaderMenu';
import HaburgerMenu from './HaburgerMenu';
import {
    Link, Route, Switch
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
                    <Switch>
                        <Route exact path="/">
                            <Link to="/sup" className="header__top-menu--link">
                                <div className="header__button--bg header__top-menu--sup"></div>
                                <span className="header__link--span">
                                    DESKI SUP
                                </span>
                            </Link>
                            <Link to="/wood" className="header__top-menu--link header__top-menu--wood">
                                <div className="header__button--bg header__top-menu--wood"></div>
                                <span className="header__link--span">
                                    WYROBY DREWNIANE
                                </span>
                            </Link>
                        </Route>
                    </Switch>
                    <HaburgerMenu />
                </div>

            </div>
        </header>
    );
}

export default Header;