import React, { useState } from 'react';
import Card from './Card';

const cardData = [
  { id: 1, color: 'green', isRevealed: false },
  { id: 2, color: 'yellow', isRevealed: false },
  { id: 3, color: 'orange', isRevealed: false },
  { id: 4, color: 'purple', isRevealed: false },
  { id: 5, color: 'blue', isRevealed: false },
  { id: 6, color: 'pink', isRevealed: false },
  { id: 7, color: 'brown', isRevealed: false },
  { id: 8, color: 'cyan', isRevealed: false },
  { id: 9, color: 'green', isRevealed: false },
  { id: 10, color: 'yellow', isRevealed: false },
  { id: 11, color: 'orange', isRevealed: false },
  { id: 12, color: 'purple', isRevealed: false },
  { id: 13, color: 'blue', isRevealed: false },
  { id: 14, color: 'pink', isRevealed: false },
  { id: 15, color: 'brown', isRevealed: false },
  { id: 16, color: 'cyan', isRevealed: false },
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

function Cards() {
  const [cardStatus, setCardStatus] = useState(shuffledData);
  const [clickCount, setCardCount] = useState(0);
  function clickCard(event) {
    console.log(clickCount);

    if (clickCount < 2) {
      setCardCount(clickCount + 1);
      setCardStatus((prevStatus) => {
        return prevStatus.map((box) => {
          return box.id == event.target.id ? { ...box, isRevealed: true } : box;
        });
      });

      if (clickCount == 1) {
        setTimeout(() => {
          console.log('showedone');
          setCardCount(0);
          setCardStatus((prevStatus) => {
            return prevStatus.map((box) => {
              return { ...box, isRevealed: false };
            });
          });
        }, 2000);
      }
    }
  }

  const mappedArray = cardStatus.map((card) => (
    <Card
      handleClick={clickCard}
      key={card.id}
      color={card.color}
      isRevealed={card.isRevealed}
      id={card.id}
    ></Card>
  ));

  return <div className="cards"> {mappedArray}</div>;
}

export default Cards;
