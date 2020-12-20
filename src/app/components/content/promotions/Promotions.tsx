import React, { useState, useRef } from 'react';
import './Promotions.scss';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Promotions: React.FC = () => {

    const [promotionIndex, setPromIndex] = useState<number>(0);
    const bannersRef = useRef<HTMLDivElement>(null);

    const changePromotion = (newSide: number) => {
        const min = 0; const max = 3;
        if(newSide>max) newSide = min;
        if(newSide<min) newSide = max;
        if(bannersRef.current !== null){
            bannersRef.current.setAttribute('style', `left: -${newSide*100}%`);
        }
        console.log("Change prom", promotionIndex);
        return newSide;
    }


    return (
        <div className="promotions">
            <span className="promotions__button--left" onClick={() => setPromIndex(changePromotion(promotionIndex-1))}>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </span>
            <span className="promotions__button--right" onClick={() => setPromIndex(changePromotion(promotionIndex+1))}>
                <FontAwesomeIcon icon={faArrowRight}/>
            </span>
            <div className="promotions__banners--container">
                <div className="banners" ref={bannersRef}>
                    <span className="banner"><p className="promotions__title">Banner 1</p></span>
                    <span className="banner"><p className="promotions__title">Banner 2</p></span>
                    <span className="banner"><p className="promotions__title">Banner 3</p></span>
                    <span className="banner"><p className="promotions__title">Banner 4</p></span>
                </div>
            </div>
        </div>
    );
}

export default Promotions;