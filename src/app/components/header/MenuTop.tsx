import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './MenuTop.scss';

import Menu from './MenuTop.json';

const MenuTop: React.FC = () => {

    // console.log(Menu);
    const categories = Menu.categories.map((category, index) => (
        
            <div className="menu-top__category--btn" key={index}>
                {category.name}
                <ul className="menu-top__subcategories">
                    {category.subcats.map((subcat, index) => (   
                        <li className="menu-top__categories--link" key={index}>
                            {subcat.name}
                            <div className="menu-top__subcategories--content" key={index}>
                                {subcat.links.map((link, index) => (
                                    <div className="subcategory__link" key={index}>
                                        <Link to={`/${link.url}`}>{link.name}</Link>
                                    </div>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
    ));

    return (
        <Router>
        <nav className="menu-top">
            {categories}
        </nav>
        </Router>
    );
}

export default MenuTop;