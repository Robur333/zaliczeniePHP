import React from 'react';

function Card(props) {
  let buttonBackGroundColor = props.color;
  const photo = require('./photos/' + props.color + '.jpg');
  const isDisabled = props.clickCount > 1 ? true : false;
  const style = [
    {
      backgroundColor:
        props.isRevealed === true ? buttonBackGroundColor : 'white',
    },
  ];

  // let buttonBackGroundColor = props.clicked === false ? 'white' : props.color;
  return (
    <button
      disabled={isDisabled}
      id={props.id}
      onClick={props.handleClick}
      className="card"
      style={style[0]}
      color={props.color}
    >
      {props.isRevealed === false ? '?' : <img src={photo} alt="df" />}
    </button>
  );
}

export default Card;
