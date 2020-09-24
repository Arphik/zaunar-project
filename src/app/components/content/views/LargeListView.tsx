import React from 'react';
import './LargeListView.scss';
import {IGpusModel, IItem} from './gpus.model';
import { Link } from 'react-router-dom';

type ViewProps = {
  data: IGpusModel
}

const LargeListView = ({data}: ViewProps): JSX.Element => {

  const items = data.items.map((item: IItem, index) => (
    <div className="large-list__item" key={index}>

      <div className="large-list__image--container">
        <Link to="./" className="large-list__link"><img src={item.image} className="large-list__image" alt=""/></Link>
      </div>

      <div className="large-list__short-desc">
        <div className="large-list__title"><Link to="./">{item.title}</Link></div>
        <div className="large-list__short-stats">
            Układ: {data.gpuStats.types[1].names[item.gpumodel].t} Pamięć: {item.vram} Rodzaj pamięci: {data.gpuStats.types[2].names[item.memorytype].t} Złącza: {item.connectors}
        </div>
      </div>

      <div className="large-list__checkbox--container"><input type="checkbox" className="large-list__checkbox"/> do porównania</div>

      <div className="large-list__price"><span className="large-list__price--span">{item.price} zł</span></div>
    </div>
  ));

  return (
    <div className="large-list">
      {items}
    </div>);
}

export default LargeListView;