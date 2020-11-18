import React from 'react';
import './LargeListView.scss';
import {IGpusModel, IItem} from './gpus.model';
import { Link } from 'react-router-dom';

type ViewProps = {
  data: IItem[]
}

const LargeListView = ({data}: ViewProps): JSX.Element => {

  const items = data.map(({id, image, title, price, gpumodel, vram, memorytype, connectors}: IItem, index) => (
    <div className="large-list__item" key={index}>

      <div className="large-list__image--container">
        <Link to={`search/${id}`} className="large-list__link"><img src={image} className="large-list__image" alt=""/></Link>
      </div>

      <div className="large-list__short-desc">
        <div className="large-list__title"><Link to="./">{title}</Link></div>
        <div className="large-list__short-stats">
            Układ: {gpumodel} Pamięć: {vram} Rodzaj pamięci: {memorytype} Złącza: {connectors}
        </div>
      </div>

      <div className="large-list__checkbox--container"><input type="checkbox" className="large-list__checkbox"/> do porównania</div>

      <div className="large-list__price"><span className="large-list__price--span">{price} zł</span></div>
    </div>
  ));

  return (
    <div className="large-list">
      {items}
    </div>);
}

export default LargeListView;