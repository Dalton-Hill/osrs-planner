import store from './store';
import allSkills from './initialState/skills/allSkills';


const getStateIfNeeded = state => {
  if (typeof state === 'undefined') state = store.getState();
  return state
};


const numberOfItemUsedByAction = (item, action) => {
  let numberUsed = 0;
  const itemsRequiredPerAction = action.itemsRequired.find(req => req.name === item.name).count;
  if (typeof itemsRequiredPerAction !== 'undefined') numberUsed = action.count * itemsRequiredPerAction;
  return numberUsed;
};


const numberOfItemRewardedByAction = (item, action) => {
  let numberRewarded = 0;
  const itemsRewardedPerAction = action.itemsRewarded.find(reward => reward.name === item.name).count;
  if (typeof itemsRewardedPerAction !== 'undefined') numberRewarded = action.count * itemsRewardedPerAction;
  return numberRewarded;
};


export const getItemsByType = (...types) => {
  const state = store.getState();
  let itemsToReturn = [];
  types.forEach(type => {
    itemsToReturn = itemsToReturn.concat(...state.inventory.filter(item => item.type === type))
  });
  return itemsToReturn;
};


export const getItemsRequired = (action, state) => {
  state = getStateIfNeeded(state);
  return action.itemsRequired.map(item => state.inventory.find(itemX => itemX.name === item.name))
};


export const countNeededPerAction = (action, item) => {
  const actionItem = action.itemsRequired.find(itemReq => itemReq.name === item.name);
  if (typeof actionItem !== 'undefined') return actionItem.count;
  return 0;
};


export const actionsThatRequiredItem = (item, state) => {
  state = getStateIfNeeded(state);
  return state.actions.filter(action => typeof action.itemsRequired.find(itemReq => itemReq.name === item.name) !== 'undefined')
};


export const actionsThatRewardedItem = (item, state) => {
  state = getStateIfNeeded(state);
  return state.actions.filter(action => typeof action.itemsRewarded.find(itemRew => itemRew.name === item.name) !== 'undefined')
};


export const calculateItemCountAfterActions = (item, state) => {
  state = getStateIfNeeded(state);
  let count = item.count;
  count = actionsThatRequiredItem(item, state).reduce((count, action) => {
    return count - numberOfItemUsedByAction(item, action);
  }, count);
  return actionsThatRewardedItem(item, state).reduce((count, action) => {
    return count + numberOfItemRewardedByAction(item, action)
  }, count);
};


export const primarySkillForAction = (action) => {
  const primarySkill = action.skillExperienceRewards.reduce((prevReward, reward) => {
    if (reward.amount > prevReward.amount) return reward;
    return prevReward
  }, {name: null, amount: 0});
  return allSkills.find(skill => skill.name === primarySkill.name);
};


export const xpGainedForSkill = skillName => {
  const state = store.getState();
  return state.actions.reduce((totalXP, action) => {
    let skillReward = action.skillExperienceRewards.find(skill => skill.name === skillName);
    if (typeof skillReward !== 'undefined') return totalXP + (action.count * skillReward.amount);
    return totalXP
  }, 0);
};


export const returnMaxPossibleActions = (action, state) => {
  const requiredItems = getItemsRequired(action, state);
  return requiredItems.reduce((minCount, item) => {
    const countAvailable = calculateItemCountAfterActions(item, state) + countNeededPerAction(action, item) * action.count;
    if (typeof minCount === 'undefined') return countAvailable;
    if (countAvailable < minCount) return countAvailable;
    return minCount;
  }, undefined);
};