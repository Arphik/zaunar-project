import React, { Component } from 'react';
import './ItemView.scss';
import { Link } from "react-router-dom";
import { IItem } from './views/sup.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import DataOperations from './filter/DataOperations';

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
        id: 'string',
        title: 'string',
        description: 'string',
        qty: 0,
        sentTime: 'string',
        price: 0,
        guarantee: 'string',
        image: 'string',
        producer: 'string',
        type: 'string',
        technology: 'string',
        purpose: 'string',
        oar: 'string',
        handle: 'string',
        thickness: 'string',
        length: 'string',
        width: 'string',
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

          <img className="item-view__image" src={`/assets/${this.state.item.image}`} alt="" />

          <div className="item-view__short-stats">

            <p className="item-view__title">{this.state.item.title}</p>

            <p className="item-view__desc">{this.state.item.description}</p>

            <div className="item-view__short-stats--div">
              <span className="short-stats--title">Rodzaj:</span>
              <span className="short-stats--info">{this.state.item.type}</span>
            </div>
            <div className="item-view__short-stats--div">
              <span className="short-stats--title">Technologia:</span>
              <span className="short-stats--info">{this.state.item.technology}</span>
            </div>
            <div className="item-view__short-stats--div">
              <span className="short-stats--title">Wiosło w zestawie:</span>
              <span className="short-stats--info">{this.state.item.oar}</span>
            </div>
            <div className="item-view__short-stats--div">
              <span className="short-stats--title">Uchwyt na siedzisko:</span>
              <span className="short-stats--info">{this.state.item.handle}</span>
            </div>
            <div className="item-view__short-stats--div">
              <span className="short-stats--title">Grubość:</span>
              <span className="short-stats--info">{this.state.item.thickness}</span>
            </div>
            <div className="item-view__short-stats--div">
              <span className="short-stats--title">Długość:</span>
              <span className="short-stats--info">{this.state.item.length}</span>
            </div>
            <div className="item-view__short-stats--div">
              <span className="short-stats--title">Szerokość:</span>
              <span className="short-stats--info">{this.state.item.width}</span>
            </div>
            <div className="item-view__short-stats--div">
            <div className="item-view__price"><span>Cena {this.state.item.price} zł</span></div>
            </div>
            <div className="item-view__short-stats--div">
            <span className="item-view__cart--icon"><FontAwesomeIcon icon={faCartPlus} /></span><span className="item-view__cart--title">Zarezerwuj</span>
            </div>




          </div>


      </div>);
  }

}