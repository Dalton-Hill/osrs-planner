import store from './store';
import allSkills from './initialState/skills/allSkills';


export const getItemsByType = (...types) => {
  const state = store.getState();
  let itemsToReturn = [];
  types.forEach(type => {
    itemsToReturn = itemsToReturn.concat(...state.inventory.filter(item => item.type === type))
  });
  return itemsToReturn;
};


export const getItemsRequired = (action) => {
  const state = store.getState();
  return action.itemsRequired.map(item => state.inventory.find(itemX => itemX.name === item.name))
};


export const countNeededPerAction = (action, item) => {
  const actionItem = action.itemsRequired.find(itemReq => itemReq.name === item.name);
  if (typeof actionItem !== 'undefined') return actionItem.count;
  return 0;
};


export const actionsThatRequiredItem = item => {
  const state = store.getState();
  return state.actions.filter(action => typeof action.itemsRequired.find(itemReq => itemReq.name === item.name) !== 'undefined')
};


export const actionsThatRewardedItem = item => {
  const state = store.getState();
  return state.actions.filter(action => typeof action.itemsRewarded.find(itemRew => itemRew.name === item.name) !== 'undefined')
};


export const calculateItemCountAfterActions = item => {
  let count = item.count;
  count = actionsThatRequiredItem(item).reduce((count, action) => {return count - action.count}, count);
  return actionsThatRewardedItem(item).reduce((count, action) => {return count + action.count}, count);
};


export const primarySkillForAction = (action) => {
  const primarySkill = action.skillExperienceRewards.reduce((prevReward, reward) => {
    if (reward.amount > prevReward.amount) return reward;
    return prevReward
  }, {name: null, amount: 0});
  return allSkills.find(skill => skill.name === primarySkill.name);
};