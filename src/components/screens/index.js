import * as C from '../../constants';
import HomeScreen from './Home';
import PlayScreen from './Play';
import ScoreScreen from './Score';

export default [
  { name: C.SCREENS.HOME, component: HomeScreen },
  { name: C.SCREENS.PLAY, component: PlayScreen },
  { name: C.SCREENS.SCORE, component: ScoreScreen }
];
