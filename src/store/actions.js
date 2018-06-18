import {returnMaxPossibleActions} from "./utils";
import {inventoryAPI, actionsAPI} from "./apiInstances";

export const UPDATE_COUNT = 'UPDATE_COUNT';
export const UPDATE_ACTION_COUNT = 'UPDATE_ACTION_COUNT';
export const MAKE_ALL_ACTION = 'MAKE_ALL_ACTION';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';


export const UPLOAD_INVENTORY = 'UPLOAD_INVENTORY';
export const DOWNLOAD_INVENTORY = 'DOWNLOAD_INVENTORY';
export const UPLOAD_ACTIONS = 'UPLOAD_ACTIONS';
export const DOWNLOAD_ACTIONS = 'DOWNLOAD_ACTIONS';


export const updateCount = ({ state, item, event }) => {
  let newCount = parseInt(event.target.value, 10);
  if (isNaN(newCount) || !newCount) newCount = 0;
  return {
    ...state,
    inventory: [
      ...state.inventory.map(mappedItem => {
        if (mappedItem.name !== item.name) return mappedItem;
        return {
          ...mappedItem,
          count: newCount
        }
      })
    ]
  }
};


export const updateActionCount = ({ state, rsAction, event }) => {
  let newCount = parseInt(event.target.value, 10);
  if (isNaN(newCount) || !newCount) newCount = 0;
  return {
    ...state,
    actions: [
      ...state.actions.map(mappedAction => {
        if (mappedAction.name !== rsAction.name) return mappedAction;
        return {
          ...mappedAction,
          count: newCount
        }
      })
    ]
  }
};


export const makeAllAction = ({ state, rsAction }) => {
  const maxPossibleActions = returnMaxPossibleActions(rsAction, state);
  return {
    ...state,
    actions: [
      ...state.actions.map(mappedAction => {
        if (mappedAction.name !== rsAction.name) return mappedAction;
        return {
          ...mappedAction,
          count: maxPossibleActions
        }
      })
    ]
  }
};


export const signIn = ({ state, idTokenPayload, idToken }) => {
  return {
    ...state,
    idToken,
    idTokenPayload,
    isAuthenticated: true
  }
};


export const signOut = ({ state }) => {
  return {
    ...state,
    idToken: null,
    idTokenPayload: null,
    isAuthenticated: false
  }
};


export const uploadInventory = (idToken, inventory) => {
  return dispatch => {
    inventoryAPI.post('', {
      token: idToken,
      stateName: "inventory",
      inventory,
      intent: 'put'
    })
      .then(data => {
        dispatch({ type: UPLOAD_INVENTORY })
      })
      .catch(err => {
        dispatch({ type: UPLOAD_INVENTORY })
      })
  }
};


export const downloadInventory = (idToken) => {
  return dispatch => {
    inventoryAPI.post('', {
      token: idToken,
      stateName: "inventory",
      intent: 'get'
    })
      .then(responseObject => {
        dispatch({type: DOWNLOAD_INVENTORY, inventory: responseObject.data.inventory})
      })
      .catch(err => {
        dispatch({type: DOWNLOAD_INVENTORY})
      })
  }
};


export const uploadActions = (idToken, actions) => {
  return dispatch => {
    actionsAPI.post('', {
      token: idToken,
      stateName: "actions",
      actions,
      intent: 'put'
    })
      .then(data => {
        dispatch({ type: UPLOAD_ACTIONS })
      })
      .catch(err => {
        dispatch({ type: UPLOAD_ACTIONS })
      })
  }
};


export const downloadActions = (idToken) => {
  return dispatch => {
    actionsAPI.post('', {
      token: idToken,
      stateName: "actions",
      intent: 'get'
    })
      .then(responseObject => {
        dispatch({type: DOWNLOAD_ACTIONS, actions: responseObject.data.actions})
      })
      .catch(err => {
        dispatch({type: DOWNLOAD_ACTIONS})
      })
  }
};