import { combineReducers } from 'redux';
import {
  GAME_START,
  GAME_STARTED,
  CARD_REQUEST,
  ADD_MY_DECK,
} from '../actions/types';

let dataState = {
  gameStart: false,
  gameStarting: false,
  deck: [],
  playerHand: [],
  computerHand: [],
  openDeck: [],
  myTurn: true,
};

const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case GAME_START:
      return {
        ...state,
        gameStarting: action.data.gameStarting,
        deck: action.data.cards,
      };
    case GAME_STARTED:
      return {
        ...state,
        gameStart: action.data,
        playerHand: [
          state.deck.shift(),
          state.deck.shift(),
          state.deck.shift(),
        ],
        computerHand: [
          state.deck.shift(),
          state.deck.shift(),
          state.deck.shift(),
        ],
      };
    case CARD_REQUEST: {
      return {
        ...state,
        openDeck: [...state.openDeck, state.deck.shift()],
      };
    }
    case ADD_MY_DECK: {
      const card = state.openDeck.pop();
      return {
        ...state,
        openDeck: state.openDeck.filter(x => x != card),
        playerHand: [...state.playerHand, card],
      };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dataReducer,
});

export default rootReducer;
