import { ADD_ITEM, UPDATE_ITEM, INIT_ITEM, DELETE_ITEM } from '../actionTypes';

const initialState = [];

export default function items (state=initialState, action){
  switch (action.type) {
    case INIT_ITEM:
      return action.payload;
    case ADD_ITEM:
      return [...state, action.payload];
    case UPDATE_ITEM:
      return state.map(n => {
        if(n.id === action.payload.id){
          return action.payload
        }else{
          return n
        }
      });
    case DELETE_ITEM:
      return state.filter(n => {
        return n.id === action.payload.id ? '' : n
      });
    default:
      return state
  }
}
