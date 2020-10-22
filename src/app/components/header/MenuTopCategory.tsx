import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './MenuTopCategory.scss';
import MenuTopSubCategories from './MenuTopSubCategories';
import { Category } from './MenuTop';

type Props = {
    categories: Category[]
}

const MenuTopCategory = ({categories}: Props) => {

    const grayOutContent = (choice: boolean) => {
        console.log("CHANGE");
        if(choice){
            document.querySelector('.gray-cover')?.setAttribute('style', 'background: rgba(0, 0, 0, 0.541); height: 100%;');
            console.log(document.querySelector('.gray-cover'));
        }else{
            document.querySelector('.gray-cover')?.setAttribute('style', 'background: rgba(0, 0, 0, 0); height: 0;');
        }
    }

    return (
        <div className="menu-top__categories">
            {categories.map(({name, subcats}, index) => (
                <div className="menu-top__category-container" key={index}>
                    <div className="menu-top__category--btn" onMouseEnter={() => grayOutContent(true)} onMouseLeave={() => grayOutContent(false)}>
                        {name}
                        <MenuTopSubCategories subcats={subcats} id={index}/>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default MenuTopCategory;