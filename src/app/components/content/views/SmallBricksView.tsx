import React from 'react';
import './SmallBricksView.scss';
import { Link } from 'react-router-dom';
import { IGpusModel, IItem } from './gpus.model';

type ViewProps = {
  data: IItem[]
}

const SmallBricksView = ({data}: ViewProps): JSX.Element => {

  const items = data.map(({id, image, title, price, gpumodel, vram, memorytype, connectors}: IItem, index) => (
        <div className="small-bricks__item" key={index}>

          <div className="small-bricks__image--container">
            <div className="small-bricks__checkbox--container"><input type="checkbox" className="small-bricks__checkbox"/> do porównania</div>
            <Link to={`search/${id}`}><img className="small-bricks__image" src={image} alt=""/></Link>
          </div>

          <div className="small-bricks__short-desc">
            <Link to="./" className="small-bricks__title">{title}</Link>
            <div className="small-bricks__short-stats">
            <p className="large-bricks__short-stats--p">Układ: {gpumodel}</p>
            <p className="large-bricks__short-stats--p">Pamięć: {vram}</p>
            <p className="large-bricks__short-stats--p">Rodzaj pamięci: {memorytype}</p>
            <p className="large-bricks__short-stats--p">Złącza: {connectors}</p>
            </div>
          </div>
          
          <div className="small-bricks__price">{price} zł</div>
        </div>
  ));
  return (
    <div className="small-bricks">
      {items}
    </div>);
}
  
export default SmallBricksView;