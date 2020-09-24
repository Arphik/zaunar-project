import React from 'react';
import './SmallListView.scss';
import { IGpusModel, IItem } from './gpus.model';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faBalanceScale, faCartPlus } from '@fortawesome/free-solid-svg-icons';

type ViewProps = {
  data: IGpusModel
}

const SmallListView = ({data}: ViewProps): JSX.Element => {
  console.log("SMALL LIST DATA", data);

  const items = data.items.map((item: IItem, index) => (
    <Link to={`${index}`} className="small-list__item" key={index}>
      <div className="small-list__image--container">
        <FontAwesomeIcon icon={faImage} />
        <img src={item.image} className="small-list__hover-image" alt=""/>
      </div>
  
      <h5 className="small-list__title">{item.title}</h5>

      <span className="small-list__short-stats">{item.shortStats}</span>
  
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
  
      <div className="small-list__price">6 738,08 zł</div>
    </Link>
  ));
  
  return (
    <div className="small-list">
      {items}
    </div>);
}

export default SmallListView;


