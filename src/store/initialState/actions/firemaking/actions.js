import { firemaking } from "../../skills/allskillNames";
import { mapleLogs, yewLogs, magicLogs, ashes } from "../../items/allItemNames";
import { burnMapleLog, burnYewLog, burnMagicLog } from "../allActionNames";


const actions = [
  {
    name: burnMapleLog,
    imageName: 'Maple_logs.png',
    count: 0,
    skillsRequired: [
      {name: firemaking, level: 45}
    ],
    skillExperienceRewards: [
      {name: firemaking, amount: 135}
    ],
    itemsRequired: [
      {name: mapleLogs, count: 1}
    ],
    itemsRewarded: [
      {name: ashes, count: 1}
    ]
  },
  {
    name: burnYewLog,
    imageName: 'Yew_logs.png',
    count: 0,
    skillsRequired: [
      {name: firemaking, level: 60}
    ],
    skillExperienceRewards: [
      {name: firemaking, amount: 202.5}
    ],
    itemsRequired: [
      {name: yewLogs, count: 1}
    ],
    itemsRewarded: [
      {name: ashes, count: 1}
    ]
  },
  {
    name: burnMagicLog,
    imageName: 'Magic_logs.png',
    count: 0,
    skillsRequired: [
      {name: firemaking, level: 75}
    ],
    skillExperienceRewards: [
      {name: firemaking, amount: 303.8}
    ],
    itemsRequired: [
      {name: magicLogs, count: 1}
    ],
    itemsRewarded: [
      {name: ashes, count: 1}
    ]
  }
];


export default actions;