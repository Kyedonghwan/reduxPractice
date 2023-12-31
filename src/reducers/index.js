import { CREATE_TODO, DELETE_TODO } from "../actions";

const reducers = (state=[], action) => {
  switch(action.type) {
    case CREATE_TODO:
      return [{text: action.payload, id: Date.now()}, ...state];
    case DELETE_TODO:
      return state.filter(item => 
        item.id !== action.payload
      );
    default:
      return state;
  }
}

export default reducers;