import store from './store';

const isCountLinkedToItem = count => typeof count.fromItemName !== "undefined";


const getCountFromItem = (itemName, location) => {
  const state = store.getState();
  console.log(state);
  console.log(itemName, location);
  const item = state.inventory.find(item => item.name === itemName);
  return item.counts.find(count => count.location === location).count;
};


const getCountFromSelf = count => count.count * (count.isPositive ? 1 : -1);


export const calculateAvailable = (item) => {
  return item.counts.reduce((available, count) => {
    let numberToAdd = 0;
    if (isCountLinkedToItem(count)) {
      numberToAdd = getCountFromItem(count.fromItemName, count.fromItemLocation)
    } else {
      numberToAdd = getCountFromSelf(count);
    }
    return available + numberToAdd;
  }, 0)
};