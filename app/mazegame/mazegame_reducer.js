import ACTION from '../action_constants';

function mazegame(state = {} , action) {
  let tempState = Object.assign({},state);
  switch (action.type) {
    case  'GAMEOVER_MAZE':
    tempState.gameover = false;         
    return tempState;

     case  'ERROR':
          tempState.Errors = action.error;         
          return tempState;

    default:
      return state;
  }
}

export default mazegame;