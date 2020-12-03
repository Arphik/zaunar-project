import React from 'react';
import './LargeBricksView.scss';
import { Link } from "react-router-dom";
import { IItem } from './sup.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faCartPlus } from '@fortawesome/free-solid-svg-icons';

type ViewProps = {
  data: IItem[],
  toCart(id: string): void,
}

const LargeBricksView = ({ data, toCart }: ViewProps): JSX.Element => {

  const elements = data.map(({ id, image, title, price, type, technology, oar, handle, thickness, length, width }: IItem, index: number) => (
    <div className="large-bricks__item" key={index}>

      <div className="large-bricks__compare">
        <span className="large-bricks__compare--icon">
          <FontAwesomeIcon icon={faBalanceScale} />
        </span>
      </div>
      <Link to={`sup/${id}`} className="larg-bricks__link">
        <img className="large-bricks__image" src={`./assets/${image}`} alt="" />
      </Link>

  <span className="large-bricks__title">{title}</span>

      <div className="large-bricks__desc">
        <div className="large-bricks__short-stats">
          <p className="large-bricks__short-stats--p">Rodzaj: {type}</p>
          <p className="large-bricks__short-stats--p">Technologia: {technology}</p>
          <p className="large-bricks__short-stats--p">Wiosło w zestawie: {oar}</p>
          <p className="large-bricks__short-stats--p">Uchwyt na siedzisko: {handle}</p>
          <p className="large-bricks__short-stats--p">Grubość: {thickness}</p>
          <p className="large-bricks__short-stats--p">Długość: {length}</p>
          <p className="large-bricks__short-stats--p">Szerokość: {width}</p>
        </div>
      </div>

      <div className="large-bricks__price"><span>Cena {price} zł</span></div>

      <span className="large-bricks__cart" onClick={() => toCart(id)}><FontAwesomeIcon icon={faCartPlus} /></span>

    </div>
  ));
  console.log('elements ', elements);

  return (
    <div className="large-bricks">
      {elements}
    </div>);
}

export default LargeBricksView;