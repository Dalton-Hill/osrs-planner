import * as actions from './actions';
import { items } from './initialState/items';


const initialState = {
  inventory: [
    ...items
  ]
};


const reducer = (state = initialState, action) => {
  switch ( action.type ) {
    case actions.UPDATE_COUNT:
      return actions.updateCount(state, action.itemName, action.location, action.newCount);
    default:
      return state
  }
};


export default reducer;