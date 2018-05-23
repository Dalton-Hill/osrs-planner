export const calculateAvailable = (item) => {
  return item.counts.reduce((available, count) => {
    const countMultiplier = count.isPositive ? 1 : -1;
    return available + (countMultiplier * count.count)
  }, 0)
};