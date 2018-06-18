import allItems from './initialState/items/allItems';
import allActions from './initialState/actions/allActions';
import allSkills from "./initialState/skills/allSkills";
import * as actions from './actions';


const initialState = {
  isAuthenticated: false,
  idTokenPayload: null,
  idToken: null,
  inventory: [
    ...allItems
  ],
  actions: [
    ...allActions
  ],
  skills: [
    ...allSkills
  ]
};


const reducer = (state = initialState, action) => {
  switch ( action.type ) {
    case actions.UPDATE_COUNT:
      return actions.updateCount({ state, item: action.item, event: action.event });
    case actions.UPDATE_ACTION_COUNT:
      return actions.updateActionCount({ state, rsAction: action.rsAction, event: action.event });
    case actions.MAKE_ALL_ACTION:
      return actions.makeAllAction({ state, rsAction: action.rsAction });
    case actions.SIGN_IN:
      return actions.signIn({ state, idTokenPayload: action.idTokenPayload, idToken: action.idToken });
    case actions.SIGN_OUT:
      return actions.signOut({ state });
    case actions.UPLOAD_INVENTORY:
      return state;
    case actions.DOWNLOAD_INVENTORY:
      const inventory = typeof action.inventory === "undefined" ? state.inventory : action.inventory;
      return {
        ...state,
        inventory
      };
    case actions.UPLOAD_ACTIONS:
      return state;
    case actions.DOWNLOAD_ACTIONS:
      const actionsDownload = typeof action.actions === "undefined" ? state.actions : action.actions;
      return {
        ...state,
        actions: actionsDownload
      };
    default:
      return state
  }
};


export default reducer;