import React from 'react';
import { Link } from 'react-router-dom';

function CardInfo(props) {
  return (
    <>
      <li className='cards__info'>
        <Link className='cards__info__link' to={props.path}>
          <figure className='cards__info__pic-wrap' data-category={props.label}>
            <img
              className='cards__info__img'
              alt='img-6.jpg'
              src={props.src}
            />
          </figure>
          <div className='cards__info__info'>
            <h5 className='cards__info__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardInfo;