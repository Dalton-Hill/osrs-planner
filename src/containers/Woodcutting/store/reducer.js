import * as actions from './actions';
import { calculateExperienceGained } from "./utils";

const intialState = {
  startingXP: 0,
  goalXP: 0,
  currentXP: 0,
  xpGained: 0,
  inventory: [
    {
      name: 'Maple Logs',
      imageName: 'Maple_logs.png',
      type: 'log',
      woodcuttingXPGained: 0,
      woodcuttingLevelRequired: 45,
      woodcuttingExperienceRewardedPer: 100,
      countChopped: 0
    },
    {
      name: 'Yew Logs',
      imageName: 'Yew_logs.png',
      type: 'log',
      woodcuttingXPGained: 0,
      woodcuttingLevelRequired: 60,
      woodcuttingExperienceRewardedPer: 175,
      countChopped: 0
    },
    {
      name: 'Magic Logs',
      imageName: 'Magic_logs.png',
      type: 'log',
      woodcuttingXPGained: 0,
      woodcuttingLevelRequired: 75,
      woodcuttingExperienceRewardedPer: 250,
      countChopped: 0
    }
  ]
};


const updateTotalXPGained = (state) => {
  const logs = state.inventory.filter(item => item.type === 'log');
  const totalXPGained = logs.reduce((sum, log) => {
    return sum + log.woodcuttingXPGained;
  }, 0);
  return {...state, xpGained: totalXPGained}
};


const updateChoppedCountAndXPGained = (state, payload) => {
  let newCount = parseInt(payload.event.target.value);
  if (isNaN(newCount)) newCount = 0;
  const newState = {
    ...state,
    inventory: [
      ...state.inventory
    ]
  };
  const logToChange = newState.inventory.find(item => item.name === payload.logName);
  logToChange.countChopped = newCount;
  logToChange.woodcuttingXPGained = calculateExperienceGained(logToChange);
  return newState;
};


const reducer = (state = intialState, action) => {
  switch ( action.type ) {
    case actions.UPDATE_CHOPPED_COUNT:
      return updateTotalXPGained(updateChoppedCountAndXPGained(state, action.payload));
    default:
      return state
  }
};


export default reducer;