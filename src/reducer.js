import defaultState from './defaultState';
import * as C from './constants';

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case C.SET_CALIBRATED:
      return {
        ...state,
        calibrate: {
          ...state.calibrate,
          state:
            action.value !== undefined ? action.value : !state.calibrate.state
        }
      };
    case C.SET_MAGNETOMETER_INTERVAL:
      return {
        ...state,
        magnetometer: {
          ...state.magnetometer,
          interval: action.interval
        }
      };
    default:
      return state;
  }
};

export default reducer;
