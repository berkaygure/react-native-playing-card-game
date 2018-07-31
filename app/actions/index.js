import cards from '../assets/cards';
import { GAME_START, GAME_STARTED, CARD_REQUEST, ADD_MY_DECK } from './types';

const card_type = ['clubs', 'diamonds', 'spades', 'hearths'];
const card_numbers = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
];

export const dealCards = () => {
  return dispatch => {
    dispatch({
      type: GAME_START,
      data: {
        gameStarting: true,
        cards: shuffleCards(createCards()),
      },
    });
  };
};

export const cardRequest = () => {
  return dispatch => {
    dispatch({
      type: CARD_REQUEST,
    });
  };
};

export const startGame = (value = true) => {
  return dispatch => {
    dispatch({
      type: GAME_STARTED,
      data: value,
    });
  };
};

export const addMyDeck = () => {
  return dispatch => {
    dispatch({
      type: ADD_MY_DECK,
      data: null,
    });
  };
};

createCards = () => {
  const cards = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 13; j++) {
      cards.push(getCard(i, j));
    }
  }

  return cards;
};

shuffleCards = cards => {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
};

getCard = (typeIndex, cardIndex) => {
  return {
    type: card_type[typeIndex],
    number: card_numbers[cardIndex],
    image: cards[card_type[typeIndex]]['_' + card_numbers[cardIndex]],
  };
};
