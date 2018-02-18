import { combineReducers } from 'redux';
import about from './about/about_reducer';
import mazegame from './mazegame/mazegame_reducer';


const rootReducers = combineReducers({
  about,
  mazegame
});

export default rootReducers;