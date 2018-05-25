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
      return actions.updateCount({ state, item: action.item, event: action.event });
    case actions.UPDATE_ACTION_COUNT:
      return actions.updateActionCount({ state, rsAction: action.rsAction, event: action.event });
    default:
      return state
  }
};


export default reducer;