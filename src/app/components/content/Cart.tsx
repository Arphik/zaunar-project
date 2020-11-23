import React, { Component } from 'react';
import './Cart.scss';
import DataOperations from './filter/DataOperations';
import { IItem } from './views/gpus.model';

interface IProps {

}

interface IState {
    itemIds: string[],
    cartItems: JSX.Element[],
}

export default class Cart extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            itemIds: [],
            cartItems: [],
        }
    }

    removeFromCart(id: string) {
        const newString: any = localStorage.getItem('cartItems')?.replaceAll(id, '');
        localStorage.setItem('cartItems', newString);
        this.setCartItems();
    }

    setCartItems = () => {
        const dataOps = new DataOperations();
        let items: IItem[] = [];
        localStorage.getItem('cartItems')?.split(' ').map((itemId) => {
            // if(localStorage.getItem(`cartItem${i}`))
            // itemId = localStorage.getItem(`cartItem${i}`);
            if (itemId.length < 1 || itemId.includes('null')) {
                return;
            }
            else {
                dataOps.getItem(itemId)
                    .then((item) => {
                        items.push(item);
                        return items;
                    })
                    .then(data => {
                        const newCartItems = data.map(({ id, title, description, qty, price }, index) => {
                            return (
                                <div className="cart__item" key={index}>
                                    <span className="cart__id">{id}</span>
                                    <span className="cart__title">{title}</span>
                                    <span className="cart__description">{description}</span>
                                    <span className="cart__qty">{qty}</span>
                                    <span className="cart__price">{price}</span>
                                    <span className="cart__remove" onClick={() => this.removeFromCart(id)}>Remove</span>
                                </div>
                            )
                        }
                        );
                        this.setState(() => ({ cartItems: newCartItems }));
                    });
            }
        })

        return items;
    }

    cleanCart() {
        localStorage.clear();
        this.setState(() => ({ cartItems: [] }));
    }


    async componentDidMount() {
        this.setCartItems();
    }

    render() {
        return (
            <div className="cart" >
                {this.state.cartItems}
                <span className="cart__remove-all" onClick={() => this.cleanCart()}>Remove all</span>
            </div>
        );
    }
}