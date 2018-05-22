import * as actions from './actions';

const intialState = {
  inventory: [
    {
      name: 'Maple Logs',
      imageName: 'Maple_logs.png',
      type: 'log',
      counts: [
        {location: 'inventory', count: 0, isPositive: true, imageName: "Inventory.png"},
        {location: 'woodcutting', count: 0, isPositive: true, xpPer: 100, levelRequired: 45, imageName: "woodcutting_icon.png"},
        {location: 'firemaking', count: 0, isPositive: false, imageName: "Firemaking_icon.png"},
        {location: 'fletching', count: 0, isPositive: false, imageName: "Fletching_icon.png"},
      ]
    },
    {
      name: 'Yew Logs',
      imageName: 'Yew_logs.png',
      type: 'log',
      counts: [
        {location: 'inventory', count: 0, isPositive: true, imageName: "Inventory.png"},
        {location: 'woodcutting', count: 0, isPositive: true, xpPer: 175, levelRequired: 60, imageName: "woodcutting_icon.png"},
        {location: 'firemaking', count: 0, isPositive: false, imageName: "Firemaking_icon.png"},
        {location: 'fletching', count: 0, isPositive: false, imageName: "Fletching_icon.png"},
      ]
    },
    {
      name: 'Magic Logs',
      imageName: 'Magic_logs.png',
      type: 'log',
      counts: [
        {location: 'inventory', count: 0, isPositive: true, imageName: "Inventory.png"},
        {location: 'woodcutting', count: 0, isPositive: true, xpPer: 250, levelRequired: 75, imageName: "woodcutting_icon.png"},
        {location: 'firemaking', count: 0, isPositive: false, imageName: "Firemaking_icon.png"},
        {location: 'fletching', count: 0, isPositive: false, imageName: "Fletching_icon.png"},
      ]
    }
  ]
};


const reducer = (state = intialState, action) => {
  switch ( action.type ) {
    case actions.UPDATE_COUNT:
      return actions.updateCount(state, action.itemName, action.location, action.newCount);
    default:
      return state
  }
};


export default reducer;