import React from 'react';
import './SmallBricksView.scss';
import { Link } from 'react-router-dom';
import { IGpusModel, IItem } from './gpus.model';

type ViewProps = {
  data: IGpusModel
}

const SmallBricksView = ({data}: ViewProps): JSX.Element => {

  const items = data.items.map((item: IItem, index) => (
        <div className="small-bricks__item" key={index}>

          <div className="small-bricks__image--container">
            <div className="small-bricks__checkbox--container"><input type="checkbox" className="small-bricks__checkbox"/> do porównania</div>
            <Link to="./"><img className="small-bricks__image" src={item.image} alt=""/></Link>
          </div>

          <div className="small-bricks__short-desc">
            <Link to="./" className="small-bricks__title">{item.title}</Link>
            <div className="small-bricks__short-stats">
            <p className="large-bricks__short-stats--p">Układ: {data.gpuStats.types[1].names[item.gpumodel].t}</p>
            <p className="large-bricks__short-stats--p">Pamięć: {item.vram}</p>
            <p className="large-bricks__short-stats--p">Rodzaj pamięci: {data.gpuStats.types[2].names[item.memorytype].t}</p>
            <p className="large-bricks__short-stats--p">Złącza: {item.connectors}</p>
            </div>
          </div>
          
          <div className="small-bricks__price">{item.price} zł</div>
        </div>
  ));
  return (
    <div className="small-bricks">
      {items}
    </div>);
}
  
export default SmallBricksView;