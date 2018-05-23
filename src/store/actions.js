export const UPDATE_COUNT = 'UPDATE_COUNT';


const isCountMatch = (count, location, productName) => {
  if (count.location !== location) return false;
  return !(typeof productName !== "undefined" && count.productName !== productName);
};


export const updateCount = ({ state, itemName, location, productName, newCount }) => {
  if (isNaN(newCount) || !newCount) newCount = 0;
  return {
    ...state,
    inventory: [
      ...state.inventory.map(item => {
        if (item.name !== itemName) return item;
        return {
          ...item,
          counts: [
            ...item.counts.map(count => {
              if (!isCountMatch(count, location, productName)) return count;
              return {
                ...count,
                count: newCount
              }
            })
          ]
        }
      })
    ]
  }
};
