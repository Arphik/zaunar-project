import React from 'react';
import './LargeBricksView.scss';
import { Link } from "react-router-dom";
import { IItem } from './gpus.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faCartPlus } from '@fortawesome/free-solid-svg-icons';

type ViewProps = {
  data: IItem[],
  toCart(id: string): void,
}

const LargeBricksView = ({ data, toCart }: ViewProps): JSX.Element => {

  const elements = data.map(({ id, image, title, price, gpumodel, vram, memorytype, connectors }: IItem, index: number) => (
    <Link to={`search/${id}`} className="large-bricks__item" key={index}>

      <div className="large-bricks__compare">
        <span className="large-bricks__compare--icon">
          <FontAwesomeIcon icon={faBalanceScale} />
        </span>
      </div>

      <img className="large-bricks__image" src={`./assets/${image}`} alt="" />

      <div className="large-bricks__desc">
        <div className="large-bricks__short-stats">
          <p className="large-bricks__short-stats--p">Układ: {gpumodel}</p>
          <p className="large-bricks__short-stats--p">Pamięć: {vram}</p>
          <p className="large-bricks__short-stats--p">Rodzaj pamięci: {memorytype}</p>
          <p className="large-bricks__short-stats--p">Złącza: {connectors}</p>
        </div>
      </div>

      <div className="large-bricks__price"><span>{price} zł</span></div>

      <span className="large-bricks__cart" onClick={() => toCart(id)}><FontAwesomeIcon icon={faCartPlus} /></span>

    </Link>
  ));
  console.log('elements ', elements);

  return (
    <div className="large-bricks">
      {elements}
    </div>);
}

export default LargeBricksView;