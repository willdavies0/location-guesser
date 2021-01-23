import HomeScreen from './Home';
import PlayScreen from './Play';
import ScoreScreen from './Score';
import CalibrateScreen from './Calibrate';

import * as C from '../../constants';

export default [
  { name: C.SCREENS.HOME, component: HomeScreen },
  { name: C.SCREENS.PLAY, component: PlayScreen },
  { name: C.SCREENS.SCORE, component: ScoreScreen },
  { name: C.SCREENS.CALIBRATE, component: CalibrateScreen }
];
