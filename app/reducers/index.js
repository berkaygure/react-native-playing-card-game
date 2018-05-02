import { combineReducers } from 'redux';
import { GAME_START, GAME_STARTED, CARD_REQUEST } from '../actions';

let dataState = {
  gameStart: false,
  gameStarting: false,
  deck: [],
  playerHand: [],
  computerHand: [],
  openDeck: [],
  myTurn: false,
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
        openDeck: [state.deck.shift(), state.deck.shift(), state.deck.shift()],
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
