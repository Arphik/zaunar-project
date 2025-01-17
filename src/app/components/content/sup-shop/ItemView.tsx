import React, { Component } from 'react';
import './ItemView.scss';
import { Link, NavLink, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import DataOperations from '../filter/DataOperations';
import { IItem } from './views/sup.model';
import { ItemViewInfo, ItemViewOpinions, ItemViewPayment, ItemViewShipment, ItemViewTechnicals } from './itemViewTabs';

interface IProps {
  _id: string,
  match: {
    isExact: boolean,
    params: {
      id: string
    },
  },
}

interface IState {
  item: IItem
}

export default class ItemView extends Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      item: {
        id: '',
        title: '',
        description: '',
        qty: 0,
        sentTime: '',
        price: 0,
        guarantee: '',
        image: '',
        producer: '',
        type: '',
        technology: '',
        purpose: '',
        oar: '',
        handle: '',
        thickness: '',
        length: '',
        width: '',
      }
    }
    // console.log("didMount data ", this.state.data);
  }
  componentDidMount() {

    console.log("match", this.props.match);

    const dataOps = new DataOperations();

    const promisedItem = dataOps.getItem(this.props.match.params.id);
    promisedItem.then((item) => {

      this.setState(() =>
        ({ item: item })
      );

    })
  }
  render() {
    return (
      <div className="item-view">

        <div className="item-view__compare">
          <span className="item-view__compare--icon">
            <FontAwesomeIcon icon={faBalanceScale} />
          </span>
        </div>

        <img className="item-view__image" src={`./assets/${this.state.item.image}`} alt="" />

        <div className="item-view__short-stats">

          <p className="item-view__title">{this.state.item.title}</p>

          <p className="item-view__desc">{this.state.item.description}</p>

          <div className="item-view__short-stats--div">
            <div className="item-view__price"><span>Cena {this.state.item.price} zł</span></div>
          </div>

          <div className="item-view__short-stats--div">
            <span className="item-view__cart--icon" onClick={() => new DataOperations().addToCart(this.state.item.id)}><FontAwesomeIcon icon={faCartPlus} /></span><span className="item-view__cart--title">Zarezerwuj</span>
          </div>
        </div>

        <div className="item-view__fullinfo">

          <div className="item-view__infotabs">
            <NavLink to={`/sup/${this.state.item.id}/info`} className="item-view__infotab" activeClassName="item-view__infotab--active">OPIS PRODUKTU</NavLink>
            <NavLink to={`/sup/${this.state.item.id}/technicals`} className="item-view__infotab" activeClassName="item-view__infotab--active">DANE TECHNICZNE</NavLink>
            <NavLink to={`/sup/${this.state.item.id}/opinions`} className="item-view__infotab" activeClassName="item-view__infotab--active">OPINIE KLIENTÓW</NavLink>
            <NavLink to={`/sup/${this.state.item.id}/payment`} className="item-view__infotab" activeClassName="item-view__infotab--active">PŁATNOŚCI</NavLink>
            <NavLink to={`/sup/${this.state.item.id}/shipment`} className="item-view__infotab" activeClassName="item-view__infotab--active">WYSYŁKA</NavLink>
          </div>

          <div className="item-view__infotab--content">

            <Switch>

              <Route exact path="/sup/:id/info">
                <ItemViewInfo description={this.state.item.description}/>
              </Route>

              <Route path="/sup/:id/technicals">
                <ItemViewTechnicals technicals={{
                  type: this.state.item.type,
                  technology: this.state.item.technology,
                  oar: this.state.item.oar,
                  handle: this.state.item.handle,
                  thickness: this.state.item.thickness,
                  length: this.state.item.length,
                  width: this.state.item.width,
                }}/>
              </Route>
              <Route path="/sup/:id/opinions">
                <ItemViewOpinions/>
              </Route>
              <Route path="/sup/:id/payment">
                <ItemViewPayment/>
              </Route>
              <Route path="/sup/:id/shipment">
                <ItemViewShipment shipment={this.state.item.sentTime}/>
              </Route>
              
            </Switch>

          </div>

        </div>

      </div>);
  }
}