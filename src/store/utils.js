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


export const actionsThatRequiredItem = item => {
  const state = store.getState();
  return state.actions.filter(action => typeof action.itemsRequired.find(itemReq => itemReq.name === item.name) !== 'undefined')
};


export const actionsThatRewardedItem = item => {
  const state = store.getState();
  return state.actions.filter(action => typeof action.itemsRewarded.find(itemRew => itemRew.name === item.name) !== 'undefined')
};


export const primarySkillForAction = (action) => {
  const primarySkill = action.skillExperienceRewards.reduce((prevReward, reward) => {
    if (reward.amount > prevReward.amount) return reward;
    return prevReward
  }, {name: null, amount: 0});
  return allSkills.find(skill => skill.name === primarySkill.name);
};


export const isCountLinkedToItem = count => typeof count.fromItemName !== "undefined";

export const getParentItem = item => {
  const state = store.getState();
  const dependantCount = item.counts.find(count => isCountLinkedToItem(count));
  if (typeof dependantCount !== "undefined") {
    return state.inventory.find(item => item.name === dependantCount.fromItemName);
  }
};

export const getCountFromItemLocation = (itemName, location) => {
  const state = store.getState();
  const item = state.inventory.find(item => item.name === itemName);
  return item.counts.find(count => count.location === location).count;
};

export const getImageNameFromItemLocation = (itemName, location) => {
  const state = store.getState();
  const item = state.inventory.find(item => item.name === itemName);
  return item.counts.find(count => count.location === location).imageName;
};


const getCountFromSelf = count => count.count * (count.isPositive ? 1 : -1);


export const calculateAvailable = (item) => {
  return item.counts.reduce((available, count) => {
    let numberToAdd = 0;
    if (isCountLinkedToItem(count)) {
      numberToAdd = getCountFromItemLocation(count.fromItemName, count.fromItemLocation)
    } else {
      numberToAdd = getCountFromSelf(count);
    }
    return available + numberToAdd;
  }, 0)
};