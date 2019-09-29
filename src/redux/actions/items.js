import { ADD_ITEM, UPDATE_ITEM, INIT_ITEM, DELETE_ITEM } from '../actionTypes';

export function addItem(payload){
  return {
    type: ADD_ITEM,
    payload
  }
}

export function updateItem(payload){
  return {
    type: UPDATE_ITEM,
    payload
  }
}

export function initItem(payload){
  return {
    type: INIT_ITEM,
    payload
  }
}

export function deleteItem(payload){
  return {
    type: DELETE_ITEM,
    payload
  }
}
