const intialState = {
  inventory: [
    {
      name: 'Maple Logs',
      imageName: 'Maple_logs.png',
      type: 'log',
      woodcuttingLevelRequired: 45,
      woodcuttingExperienceRewarded: 100,
      firemakingExperienceRewarded: 135,
      counts: {
        starting: 0,
        chopped: 0,
        burned: 0,
        fletched: 0
      }
    },
    {
      name: 'Yew Logs',
      imageName: 'Yew_logs.png',
      type: 'log',
      woodcuttingLevelRequired: 60,
      woodcuttingExperienceRewarded: 175,
      firemakingExperienceRewarded: 202.5,
      counts: {
        starting: 0,
        chopped: 0,
        burned: 0,
        fletched: 0
      }
    },
    {
      name: 'Magic Logs',
      imageName: 'Magic_logs.png',
      type: 'log',
      woodcuttingLevelRequired: 75,
      woodcuttingExperienceRewarded: 250,
      firemakingExperienceRewarded: 303.8,
      counts: {
        starting: 0,
        chopped: 0,
        burned: 0,
        fletched: 0
      }
    }
  ]
};

const reducer = (state = intialState, action) => {
  return state
};


export default reducer;