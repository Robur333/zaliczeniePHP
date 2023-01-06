import React from 'react';

function ScoreBar(props) {
  return (
    <div>
      <button className="reset-button" onClick={props.onClick}>
        Reset Game !
      </button>
    </div>
  );
}

export default ScoreBar;
