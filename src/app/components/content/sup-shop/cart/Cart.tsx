import React, { Component, InputHTMLAttributes } from 'react';
import './Cart.scss';
import DataOperations from '../../filter/DataOperations';
import { IItem } from '../views/sup.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface IProps {

}

interface IState {
    itemIds: string[],
    cartItems: JSX.Element[],
    order: Order,
}

interface OrderItem{
    id: string,
    title: string,
    description: string,
    qty: number,
    price: number,
}

interface Order {
    namesurname: string,
    phone: string,
    address: string,
    payment: string,
    shipment: string,
    items: OrderItem[],
    sum: number,
    [key: string]: string | object[] | number,
}

export default class Cart extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            itemIds: [],
            cartItems: [],
            order: {
                namesurname: '',
                phone: '',
                address: '',
                payment: '',
                shipment: '',
                items: [],
                sum: 0,
            }
        }
        console.log('localstorage', localStorage.getItem('cartItems'));
    }

    removeFromCart = (id: string) => {
        const newString: any = localStorage.getItem('cartItems')?.replaceAll(id, '');
        localStorage.setItem('cartItems', newString);
        let newOrder: Order = this.state.order;
        newOrder.items = newOrder.items.filter((item) => item.id !== id);
        this.setState({ order: newOrder});
    }

    updateOrderQty = (index: number, e: React.FormEvent<HTMLInputElement>) => {
        let newOrder = this.state.order;
        newOrder.items[index].qty = Number(e.currentTarget.value);
        this.setState({ order: newOrder });
    }

    setCart = async () => {
        const dataOps = new DataOperations();
        const itemsIDs: any = localStorage.getItem('cartItems')?.split(' ')
        .filter((itemId) => 
            (itemId.length < 2 || itemId.includes('null') ? false : true
        ));
        // .map((id) => dataOps.getItem(id));
        const orderItems: IItem[] = await dataOps.getSelectedItems(itemsIDs);
        const newOrder = this.state.order;
        orderItems.map(item => newOrder.items.push({id: item.id, title: item.title, description: item.description, qty: 1, price: item.price}));
        console.log('newOrder.items', dataOps.getSelectedItems(itemsIDs));
        this.setState({ order: newOrder });

    }

    drawCartItems = (): JSX.Element[] => {
        console.log('Draw order items');
        return this.state.order.items.map(({ id, title, price, description }, index) =>
            (
                <div className="cart__item" key={index}>
                    <span className="cart__title">{title}</span>
                    <span className="cart__price">{price} zł</span>
                    Ilość: <input type="text" onChange={(e) => this.updateOrderQty(index, e)} value={this.state.order.items[index].qty} name="" id="" className="cart__qty" />
                    <span className="cart__remove" onClick={() => this.removeFromCart(id)}><FontAwesomeIcon icon={faTrash} /></span>
                    <span className="cart__description">{description}</span>
                </div>
            ));
    }

    cleanCart = () => {
        localStorage.clear();
        this.setState(() => ({ cartItems: [] }));
    }


    componentDidMount() {
        this.setCart();
    }

    updateOrder = (e: React.FormEvent<HTMLInputElement>) => {
        let newOrder: Order = { ...this.state.order };
        newOrder[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ order: newOrder });
        // console.clear();
        // console.log('Imię nazwisko telefon', this.state.order.namesurname, this.state.order.phone);
        // console.log('Adres:', this.state.order.address);
        // console.log('Metody:', this.state.order.payment, this.state.order.shipment);
    }

    makeOrder = () => {

    }

    render() {
        const sum = this.state.order.items.reduce((total, curr,) => total + (curr.qty * curr.price), 0);
        return (
            <div className="cart" >
                {this.state.order.items.length > 0 ?

                    (<div className="cart__container">
                        <span className="cart__remove-all" onClick={() => this.cleanCart()}>Wyczyść koszyk</span>

                        <div className="cart__items">
                            {this.drawCartItems()}
                        </div>

                        <div className="cart__customer">
                            <div className="cart__customer--data">
                                <div className="cart__order--title">Dane odbiorcy:</div>
                                <input type="text" onChange={(e) => this.updateOrder(e)} className="cart__order--name cart__customer--input" name="namesurname" id="" placeholder="Imię i nazwisko" />
                                <input type="text" onChange={(e) => this.updateOrder(e)} className="cart__order--phone cart__customer--input" name="phone" id="" placeholder="Telefon" />
                                <input type="text" onChange={(e) => this.updateOrder(e)} className="cart__order--address cart__customer--input" name="address" id="" placeholder="Adres" />
                            </div>
                            <div className="cart__order--payment">
                                <div className="cart__order--title">Metoda płatności:</div>
                                <div className="cart__order--radio">
                                    <input type="radio" onChange={(e) => this.updateOrder(e)} name="payment" value="przelew" id="" className="cart__order--payment" />Przelew
                                    <input type="radio" onChange={(e) => this.updateOrder(e)} name="payment" value="paypal" id="" className="cart__order--payment" />Paypal
                                    <input type="radio" onChange={(e) => this.updateOrder(e)} name="payment" value="przyodbiorze" id="" className="cart__order--payment" />Przy odbiorze
                                </div>
                            </div>
                            <div className="cart__order--shipment">
                                <div className="cart__order--title">Sposób dostawy:</div>
                                <div className="cart__order--radio">
                                    <input type="radio" onChange={(e) => this.updateOrder(e)} name="shipment" value="kurier" id="" className="cart__order--payment" />Kurier
                                    <input type="radio" onChange={(e) => this.updateOrder(e)} name="shipment" value="poczta" id="" className="cart__order--payment" />Poczta Polska
                                    <input type="radio" onChange={(e) => this.updateOrder(e)} name="shipment" value="paczkomat" id="" className="cart__order--payment" />Paczkomat
                                </div>
                            </div>

                        </div>
                        <div className="cart__summary">
                            Suma: {sum} zł
                            <div className="cart__order--btn">Złóż zamówienie</div>
                        </div>
                    </div>
                    )
                    :
                    (<span className="cart__empty" onClick={() => console.log(this.state.order.items)}>Your cart is empty</span>)
                }

            </div>
        );
    }
}