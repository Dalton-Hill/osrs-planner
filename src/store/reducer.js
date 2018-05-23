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
      return actions.updateCount({ state, itemName: action.itemName, location: action.location, productName: action.productName, newCount: action.newCount });
    default:
      return state
  }
};


export default reducer;