import React from 'react';
import './Cards.css';
import CardInfo from './CardInfo';

function Cards() {
  return (
    <div className='cards'>
      <h1>Blog About It!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__infos'>
            <CardInfo
              src='images/img-9.jpg'
              text='Struggle Code 101: FOR EACH'
              label='Self Ed'
              path='/blog'
            />
            <CardInfo
              src='images/img-9.jpg'
              text='Struggle Code 101: this IS REALLY A THING'
              label='Self Ed'
              path='/blog'
            />
          </ul>
          <ul className='cards__infos'>
            <CardInfo
              src='images/img-9.jpg'
              text='Struggle Code 101: How Many Ways Can You Call Nothing...Something?'
              label='Self Ed'
              path='/blog'
            />
            <CardInfo
              src='images/img-9.jpg'
              text='The Karen Report'
              label='Social Justice'
              path='/projects'
            />
            <CardInfo
              src='images/img-9.jpg'
              text='Got Questions?'
              label='The More You Know'
              path='/info'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;