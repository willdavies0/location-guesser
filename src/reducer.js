import defaultState from './defaultState';
import * as C from './constants';

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case C.SET_CALIBRATED:
      return {
        ...state,
        calibrated:
          action.value !== undefined ? action.value : !state.calibrated
      };
    default:
      return state;
  }
};

export default reducer;
