import React from 'react';

type TProps = {
    technicals: {
        type: string,
        technology: string,
        oar: string,
        handle: string,
        thickness: string,
        length: string,
        width: string,
    }
}

type DProps = {
    description: string
}

type SProps = {
    shipment: string
}

export const ItemViewInfo = ({ description }: DProps) => {

    return (
        <div className="item-view__tab--info item-view__tab">
            {description}
        </div>
    );
}

export const ItemViewTechnicals = ({technicals}: TProps) => {

    return (
        <div className="item-view__tab--technicals item-view__tab">
            <div className="item-view__short-stats--div">
                <span className="short-stats--title">Rodzaj:</span>
                <span className="short-stats--info">{technicals.type}</span>
            </div>
            <div className="item-view__short-stats--div">
                <span className="short-stats--title">Technologia:</span>
                <span className="short-stats--info">{technicals.technology}</span>
            </div>
            <div className="item-view__short-stats--div">
                <span className="short-stats--title">Wiosło w zestawie:</span>
                <span className="short-stats--info">{technicals.oar}</span>
            </div>
            <div className="item-view__short-stats--div">
                <span className="short-stats--title">Uchwyt na siedzisko:</span>
                <span className="short-stats--info">{technicals.handle}</span>
            </div>
            <div className="item-view__short-stats--div">
                <span className="short-stats--title">Grubość:</span>
                <span className="short-stats--info">{technicals.thickness}</span>
            </div>
            <div className="item-view__short-stats--div">
                <span className="short-stats--title">Długość:</span>
                <span className="short-stats--info">{technicals.length}</span>
            </div>
            <div className="item-view__short-stats--div">
                <span className="short-stats--title">Szerokość:</span>
                <span className="short-stats--info">{technicals.width}</span>
            </div>
        </div>
    );
}


export const ItemViewOpinions = () => {

    return (
        <div className="item-view__tab--opinions item-view__tab">
            ItemViewOpinions
        </div>
    );
}


export const ItemViewPayment = () => {

    return (
        <div className="item-view__tab--payment item-view__tab">
            ItemViewPayment
        </div>
    );
}


export const ItemViewShipment = ({ shipment}: SProps) => {

    return (
        <div className="item-view__tab--shipment item-view__tab">
            {shipment}
        </div>
    );
}
