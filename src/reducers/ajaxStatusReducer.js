import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndSuccess(type) {
  return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallInProgress, action) {
  switch (action.type) {
    case types.BEGIN_AJAX_CALL:
      return state + 1;
    default:
      if (action.type == types.AJAX_CALL_ERROR || actionTypeEndSuccess(action.type)) {
        return state - 1;
      }
      return state;
  }
}
