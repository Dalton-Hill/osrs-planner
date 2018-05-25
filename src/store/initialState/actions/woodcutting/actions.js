import { woodcutting } from "../../skills/allskillNames";
import { mapleLogs, yewLogs, magicLogs } from "../../items/allItemNames";
import { chopMapleTree, chopYewTree, chopMagicTree } from "../allActionNames";


const actions = [
  {
    name: chopMapleTree,
    imageName: 'Maple_tree.png',
    count: 0,
    skillsRequired: [
      {name: woodcutting, level: 45}
    ],
    skillExperienceRewards: [
      {name: woodcutting, amount: 100}
    ],
    itemsRequired: [],
    itemsRewarded: [
      {name: mapleLogs, count: 1}
    ]
  },
  {
    name: chopYewTree,
    imageName: 'Yew_tree.png',
    count: 0,
    skillsRequired: [
      {name: woodcutting, level: 60}
    ],
    skillExperienceRewards: [
      {name: woodcutting, amount: 175}
    ],
    itemsRequired: [],
    itemsRewarded: [
      {name: yewLogs, count: 1}
    ]
  },
  {
    name: chopMagicTree,
    imageName: 'Magic_tree.png',
    count: 0,
    skillsRequired: [
      {name: woodcutting, level: 75}
    ],
    skillExperienceRewards: [
      {name: woodcutting, amount: 250}
    ],
    itemsRequired: [],
    itemsRewarded: [
      {name: magicLogs, count: 1}
    ]
  }
];


export default actions;