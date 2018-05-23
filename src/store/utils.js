import store from './store';

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


export const getImageNameFromItem = (itemName) => {
  const state = store.getState();
  return state.inventory.find(item => item.name === itemName).imageName;
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