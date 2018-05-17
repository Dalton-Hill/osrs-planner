export const calculateExperienceGained = log => {
  let xpGained = log.countChopped * log.woodcuttingExperienceRewardedPer;
  if (isNaN(xpGained)) return 0;
  return xpGained
};
