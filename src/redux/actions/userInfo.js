import {GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL} from '../actionTypes';

export function getUserInfoRequest(){
  return {
    type: GET_USER_INFO_REQUEST
  }
}

export function getUserInfoSuccess(userInfo){
  return {
    type: GET_USER_INFO_SUCCESS,
    userInfo
  }
}

export function getUserInfoFail(){
  return {
    type: GET_USER_INFO_FAIL
  }
}

export function getUserInfo(){
  return function(dispatch){
    dispatch(getUserInfoRequest());

    setTimeout(()=>{
      return fetch('http://localhost:8080/api/user.json')
        .then(res => {
          return res.json()
        })
        .then(json => {
          dispatch(getUserInfoSuccess(json))
        })
        .catch(()=>{
          dispatch(getUserInfoFail());
        })
    }, 3000);
  }
}
