import * as actions from './actions';
import allItems from './initialState/items/allItems';
import allActions from './initialState/actions/allActions';


const initialState = {
  inventory: [
    ...allItems
  ],
  actions: [
    ...allActions
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