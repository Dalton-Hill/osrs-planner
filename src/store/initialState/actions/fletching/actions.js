import { fletching } from "../../skills/allskillNames";
import {
  bowString,
  mapleLogs,
  mapleLongbowUnstrung,
  mapleLongbow,
  yewLogs,
  yewLongbowUnstrung,
  yewLongbow,
  magicLogs,
  magicLongbowUnstrung,
  magicLongbow
} from "../../items/allItemNames";
import { 
  fletchMapleLongbow, 
  fletchMapleLongbowUnstrung, 
  fletchYewLongbow, 
  fletchYewLongbowUnstrung, 
  fletchMagicLongbow,
  fletchMagicLongbowUnstrung
} from "../allActionNames";


const actions = [
  {
    name: fletchMapleLongbowUnstrung,
    imageName: 'Maple_longbow_(u).png',
    skillsRequired: [
      {name: fletching, level: 55}
    ],
    skillExperienceRewards: [
      {name: fletching, amount: 58.3}
    ],
    itemsRequired: [
      {name: mapleLogs, count: 1}
    ],
    itemsRewarded: [
      {name: mapleLongbowUnstrung, count: 1}
    ]
  },
  {
    name: fletchMapleLongbow,
    imageName: 'Maple_longbow.png',
    skillsRequired: [
      {name: fletching, level: 55}
    ],
    skillExperienceRewards: [
      {name: fletching, amount: 58.2}
    ],
    itemsRequired: [
      {name: mapleLongbowUnstrung, count: 1},
      {name: bowString, count: 1}
    ],
    itemsRewarded: [
      {name: mapleLongbow, count: 1}
    ]
  },
  {
    name: fletchYewLongbowUnstrung,
    imageName: 'Yew_longbow_(u).png',
    skillsRequired: [
      {name: fletching, level: 70}
    ],
    skillExperienceRewards: [
      {name: fletching, amount: 75}
    ],
    itemsRequired: [
      {name: yewLogs, count: 1}
    ],
    itemsRewarded: [
      {name: yewLongbowUnstrung, count: 1}
    ]
  },
  {
    name: fletchYewLongbow,
    imageName: 'Yew_longbow.png',
    skillsRequired: [
      {name: fletching, level: 70}
    ],
    skillExperienceRewards: [
      {name: fletching, amount: 75}
    ],
    itemsRequired: [
      {name: yewLongbowUnstrung, count: 1},
      {name: bowString, count: 1}
    ],
    itemsRewarded: [
      {name: yewLongbow, count: 1}
    ]
  },
  {
    name: fletchMagicLongbowUnstrung,
    imageName: 'Magic_longbow_(u).png',
    skillsRequired: [
      {name: fletching, level: 85}
    ],
    skillExperienceRewards: [
      {name: fletching, amount: 91.5}
    ],
    itemsRequired: [
      {name: magicLogs, count: 1}
    ],
    itemsRewarded: [
      {name: magicLongbowUnstrung, count: 1}
    ]
  },
  {
    name: fletchMagicLongbow,
    imageName: 'Magic_longbow.png',
    skillsRequired: [
      {name: fletching, level: 85}
    ],
    skillExperienceRewards: [
      {name: fletching, amount: 91.5}
    ],
    itemsRequired: [
      {name: magicLongbowUnstrung, count: 1},
      {name: bowString, count: 1}
    ],
    itemsRewarded: [
      {name: magicLongbow, count: 1}
    ]
  }
];


export default actions;