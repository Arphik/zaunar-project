import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './MenuTop.scss';

import Menu from './MenuTop.json';
import MenuTopCategory from './MenuTopCategory';

export interface SubCatLink{
    name: string,
    url: string
}

export interface SubCat{
    name: string,
    subcatlinks: SubCatLink[]
}

export interface Category{
    name: string,
    subcats: SubCat[]
}

export interface IMenuTop{
    Menu: Category
}

const MenuTop = () => {

    // console.log(Menu);

    return (
        <nav className="menu-top">
            <MenuTopCategory categories={Menu.categories}/>
        </nav>
    );
}

export default MenuTop;