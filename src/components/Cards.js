import { click } from '@testing-library/user-event/dist/click';
import React, { useState, useEffect } from 'react';
import Card from './Card';
import ScoreBar from './ScoreBar';
import logo from './photos/logo.png';

let clickedHistoryColor = [];

const cardData = [
  { id: 1, color: 'ania', isRevealed: false, isMatched: false },
  { id: 2, color: 'ekipa', isRevealed: false, isMatched: false },
  { id: 3, color: 'iga', isRevealed: false, isMatched: false },
  { id: 4, color: 'laura', isRevealed: false, isMatched: false },
  { id: 5, color: 'magda', isRevealed: false, isMatched: false },
  { id: 6, color: 'robur', isRevealed: false, isMatched: false },
  { id: 7, color: 'sara', isRevealed: false, isMatched: false },
  { id: 8, color: 'zosia', isRevealed: false, isMatched: false },
  { id: 9, color: 'ania', isRevealed: false, isMatched: false },
  { id: 10, color: 'ekipa', isRevealed: false, isMatched: false },
  { id: 11, color: 'iga', isRevealed: false, isMatched: false },
  { id: 12, color: 'laura', isRevealed: false, isMatched: false },
  { id: 13, color: 'magda', isRevealed: false, isMatched: false },
  { id: 14, color: 'robur', isRevealed: false, isMatched: false },
  { id: 15, color: 'sara', isRevealed: false, isMatched: false },
  { id: 16, color: 'zosia', isRevealed: false, isMatched: false },
];

const shuffledData = shuffle(cardData);

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

const Cards = () => {
  const [cardStatus, setCardStatus] = useState(shuffledData);
  const [clickCount, setCardCount] = useState(0);

  function pushHistoryIntoArray(event) {
    clickedHistoryColor.push(event.target.getAttribute('color'));
  }

  function areColorsMatching() {
    return clickedHistoryColor[clickedHistoryColor.length - 1] ===
      clickedHistoryColor[clickedHistoryColor.length - 2]
      ? true
      : false;
  }

  function unfocusClickedBoxesAfterDelay() {
    setTimeout(() => {
      setCardStatus((prevStatus) => {
        return prevStatus.map((box) => {
          return box.isMatched === true
            ? { ...box, isRevealed: true }
            : { ...box, isRevealed: false };
        });
      });
    }, 500);
  }

  function revealClickedBox(event) {
    setCardCount(clickCount + 1);
    setCardStatus((prevStatus) => {
      return prevStatus.map((box) => {
        return box.id === parseInt(event.target.id)
          ? { ...box, isRevealed: true }
          : box;
      });
    });
  }

  function revealAllBoxes() {
    setCardStatus((prevStatus) => {
      return prevStatus.map((box) => {
        return { ...box, isRevealed: true };
      });
    });
  }
  function resetAllboxes() {
    setCardStatus((prevStatus) => {
      return prevStatus.map((box) => {
        return { ...box, isRevealed: false, isMatched: false };
      });
    });
  }

  function toggleMatchAtributte(event) {
    setCardStatus((prevStatus) => {
      return prevStatus.map((box) => {
        return box.color === event.target.getAttribute('color')
          ? {
              ...box,
              isMatched: true,
            }
          : box;
      });
    });
  }

  function resetGame(event) {
    resetAllboxes(event);
    const mixedData = shuffle(cardData);
    setCardStatus(mixedData);
    revealAllBoxes(event);
    setTimeout(() => {
      resetAllboxes(event);
    }, 1000);
  }

  function clickCard(event) {
    revealClickedBox(event);

    pushHistoryIntoArray(event);

    console.log(clickCount);

    setTimeout(() => {
      if (clickCount === 1 && areColorsMatching() === true) {
        console.log('pedaall');
        toggleMatchAtributte(event);
        setTimeout(() => {
          setCardCount(0);
        }, 400);
      }

      if (clickCount === 1 && areColorsMatching() === false) {
        unfocusClickedBoxesAfterDelay();
        setTimeout(() => {
          setCardCount(0);
        }, 550);
      }
    }, 1000);
  }

  const mappedArray = cardStatus.map((card) => (
    <div>
      <Card
        handleClick={(event) => {
          clickCard(event);
        }}
        key={card.id}
        color={card.color}
        isRevealed={card.isRevealed}
        id={card.id}
        clickCount={clickCount}
      ></Card>
    </div>
  ));

  return (
    <div className="center">
      <img src={logo} alt="" />
      <p>Kofeina Memory Game</p>

      <div className="cards">{mappedArray}</div>

      <ScoreBar onClick={resetGame}></ScoreBar>
    </div>
  );
};

export default Cards;
