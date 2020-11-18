import React, { Component } from 'react';
import './ItemView.scss';
import { Link } from "react-router-dom";
import { IItem } from './views/gpus.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { DataOperations } from './filter/DataOperations';

interface IProps{
    _id: string,
    match: {
      isExact: boolean,
      params: {
        _id: string
      },

    },
}

interface IState{
    item: IItem
}

export default class ItemView extends Component<IProps, IState> {

    constructor(props: any){
      super(props);
      this.state = {
          item: {id: '', title: '', description: '', qty: 0, price: 0, shortStats: '', vram: '', image: '', gpumodel: '', producer: '', memorytype: '', connectors: ''}
      }
      // console.log("didMount data ", this.state.data);
    }
    componentDidMount(){
      const dataOps = new DataOperations();

      const promisedItem = dataOps.getItem(this.props.match.params._id);
      promisedItem.then((item)=>{
  
        this.setState(() => 
          ({item: item})
        );
  
      })
    }
    render(){
        return (
          <div className="item-view">
              <div className="item-view__compare">
              <span className="item-view__compare--icon">
                  <FontAwesomeIcon icon={faBalanceScale}/>
              </span>
              </div>
              
              <img className="item-view__image" src={this.state.item.image} alt=""/>
          
              <div className="item-view__desc">
              <Link to={`./${this.state.item.id}`} className="item-view__title">{this.state.item.title}</Link>
              <div className="item-view__short-stats">
                  <p className="item-view__short-stats--p">Układ: {this.state.item.gpumodel}</p>
                  <p className="item-view__short-stats--p">Pamięć: {this.state.item.vram}</p>
                  <p className="item-view__short-stats--p">Rodzaj pamięci: {this.state.item.memorytype}</p>
                  <p className="item-view__short-stats--p">Złącza: {this.state.item.connectors}</p>
              </div>
              </div>
              
              <div className="item-view__price"><span>{this.state.item.price} zł</span></div>
              
              <span className="item-view__cart"><FontAwesomeIcon icon={faCartPlus} /></span>
          </div>);
      }

}