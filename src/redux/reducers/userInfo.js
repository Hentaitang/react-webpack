import {GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL} from '../actionTypes';

const initState = {
  isLoading: false,
  userInfo: {},
  errMsg: ''
};

export default function userInfo(state=initState, action){
  switch(action.type){
    case GET_USER_INFO_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.userInfo
      };
    case GET_USER_INFO_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMsg: '请求错误'
      };
    default:
      return state;
  }
}
