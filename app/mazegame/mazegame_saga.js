import { delay } from 'redux-saga';
import { call,put, takeEvery,select} from 'redux-saga/effects';
import {PostDataWithOutToken,postDataWithToken,getDataWithToken} from '../util/ajax';
import API from '../api_config';
import { browserHistory } from 'react-router';
import ACTION from '../action_constants';
import CONSTANTS from '../common_constants';
import history from '../history';


function* maze(action) {
  try {
    if(action.data.length==0){
      yield put({type:'GAMEOVER_MAZE'});
    }
  } catch (e) {
    console.error("error",e.message);
  }
}



export {
    maze,
};
