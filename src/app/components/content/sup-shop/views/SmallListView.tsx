import React from 'react';
import './SmallListView.scss';
import { IGpusModel, IItem } from './sup.model';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faBalanceScale, faCartPlus } from '@fortawesome/free-solid-svg-icons';

type ViewProps = {
  data: IItem[]
}

const SmallListView = ({data}: ViewProps): JSX.Element => {
  console.log("SMALL LIST DATA", data);

  const items = data.map(({id, image, title, shortStats, price, gpumodel, vram, memorytype, connectors}: IItem, index) => (
    <Link to={`search/${id}`} className="small-list__item" key={index}>
      <div className="small-list__image--container">
        <FontAwesomeIcon icon={faImage} />
        <img src={image} className="small-list__hover-image" alt=""/>
      </div>
  
      <h5 className="small-list__title">{title}</h5>

      <span className="small-list__short-stats">{shortStats}</span>
  
      <div className="small-list__compare">
        <span className="small-list__compare--icon">
          <FontAwesomeIcon icon={faBalanceScale}/>
        </span>
      </div>

      <div className="small-list__cart">
        <span className="small-list__cart--icon">
          <FontAwesomeIcon icon={faCartPlus}/>
        </span>
      </div>
  
  <div className="small-list__price">{price} zł</div>
    </Link>
  ));
  
  return (
    <div className="small-list">
      {items}
    </div>);
}

export default SmallListView;


