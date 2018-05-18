export const UPDATE_COUNT = 'UPDATE_COUNT';


export const updateCount = (state, itemName, location, newCount) => {
  return {
    ...state,
    inventory: [
      ...state.inventory.map(item => {
        if (item.name !== itemName) return item;
        return {
          ...item,
          counts: [
            item.counts.map(count => {
              if (count.location !== location) return count;
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
