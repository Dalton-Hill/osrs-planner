export const sortItemsByName = (items) => {
  const copyItems = [...items];
  copyItems.sort((a, b) => {
    const aName = a.name.toUpperCase();
    const bName = b.name.toUpperCase();
    if (aName < bName) return -1;
    else if (aName > bName) return 1;
    return 0;
  });
  return copyItems;
};