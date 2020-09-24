import React from 'react';
import './LargeBricksView.scss';
import { Link } from "react-router-dom";
import {IGpusModel, IItem} from './gpus.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faCartPlus } from '@fortawesome/free-solid-svg-icons';

type ViewProps = {
  data: IGpusModel
}

const LargeBricksView = ({data}: ViewProps): JSX.Element => {

  console.log(data);

  const elements = data.items.map((item: IItem, index: number) => (
      <Link to={`./${item.id}`} className="large-bricks__item" key={index}>
      
        <div className="large-bricks__compare">
          <span className="large-bricks__compare--icon">
            <FontAwesomeIcon icon={faBalanceScale}/>
          </span>
        </div>
        
        <img className="large-bricks__image" src={item.image} alt=""/>
      
        <div className="large-bricks__desc">
          <Link to={`./${item.id}`} className="large-bricks__title">{item.title}</Link>
          <div className="large-bricks__short-stats">
            <p className="large-bricks__short-stats--p">Układ: {data.gpuStats.types[1].names[item.gpumodel].t}</p>
            <p className="large-bricks__short-stats--p">Pamięć: {item.vram}</p>
            <p className="large-bricks__short-stats--p">Rodzaj pamięci: {data.gpuStats.types[2].names[item.memorytype].t}</p>
            <p className="large-bricks__short-stats--p">Złącza: {item.connectors}</p>
          </div>
        </div>
        
        <div className="large-bricks__price"><span>{item.price} zł</span></div>
        
        <span className="large-bricks__cart"><FontAwesomeIcon icon={faCartPlus} /></span>

      </Link>
  ));
  return (
    <div className="large-bricks">
      {elements}
    </div>);
}

export default LargeBricksView;