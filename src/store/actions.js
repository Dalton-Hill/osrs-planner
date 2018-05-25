export const UPDATE_COUNT = 'UPDATE_COUNT';
export const UPDATE_ACTION_COUNT = 'UPDATE_ACTION_COUNT';


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
