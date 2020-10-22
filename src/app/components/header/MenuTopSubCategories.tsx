import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './MenuTopSubCategories.scss';
import MenuTopSubLinks from './MenuTopSubLinks';
import { SubCat } from './MenuTop';

type Props = {
    subcats: SubCat[],
    id: number
}

const MenuTopSubCategories = ({subcats, id}: Props) => {

    let subcatClass = "menu-top__subcategories--container subcat--right";
    if(id > 3) subcatClass = "menu-top__subcategories--container subcat--left";

    return (
        <ul className={subcatClass}>
            {subcats.map(({name, subcatlinks}, index) => (   
                <li className="menu-top__subcategory--li" key={index}> 
                    {name}
                    <MenuTopSubLinks subcatlinks={subcatlinks}/>
                </li>
            ))}
        </ul>
    );
}
export default MenuTopSubCategories;