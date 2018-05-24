import * as actions from './actions';
import inventory from './initialState/inventory/inventory';


const initialState = {
  inventory: [
    ...inventory
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