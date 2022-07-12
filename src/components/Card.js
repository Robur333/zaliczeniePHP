import React from 'react';

function Card(props) {
  let buttonBackGroundColor = props.color;
  console.log(props);

  const style = [
    {
      backgroundColor:
        props.isRevealed === true ? buttonBackGroundColor : 'white',
    },
  ];

  // let buttonBackGroundColor = props.clicked === false ? 'white' : props.color;
  return (
    <button
      id={props.id}
      onClick={props.handleClick}
      className="card"
      style={style[0]}
    >
      Click me
    </button>
  );
}

export default Card;
