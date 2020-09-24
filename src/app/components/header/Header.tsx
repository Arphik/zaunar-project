import React from 'react';
import './Header.scss';
import HeaderMenu from './HeaderMenu';
import MenuTop from './MenuTop';
import {
    Link
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="header__container">
                <Link to="./" className="header__logo">LOGO</Link>

                <div className="header__search">
                    <input type="text" name="" id="" className="header__search--input" placeholder="What are you searching?" />
                    <span className="header__separator"></span>
                    <select name="" id="" className="header__search--select">
                        <option value="" className="search__select--option">Wszędzie</option>
                    </select>
                    <button className="header__search--button"><FontAwesomeIcon icon={faSearch} /></button>
                </div>

                <HeaderMenu/>
            </div>
            <MenuTop/>
        </div>
    );
}

export default Header;