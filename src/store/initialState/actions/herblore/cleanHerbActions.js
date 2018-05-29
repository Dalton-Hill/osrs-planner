import { herblore } from "../../skills/allskillNames";
import {
  cleanAvantoe,
  cleanCadantine,
  cleanDwarfWeed,
  cleanGuam,
  cleanHarralander,
  cleanIrit,
  cleanKwuarm,
  cleanLantadyme,
  cleanMarrentill,
  cleanRanarrWeed,
  cleanSnapdragon,
  cleanTarromin,
  cleanToadflax,
  cleanTorstol
} from "../allActionNames";
import {
  avantoe,
  cadantine,
  dwarfWeed,
  grimyAvantoe,
  grimyCadantine,
  grimyDwarfWeed,
  grimyGuam,
  grimyHarralander,
  grimyIrit,
  grimyKwuarm,
  grimyLantadyme,
  grimyMarrentill,
  grimyRanarrWeed,
  grimySnapdragon,
  grimyTarromin,
  grimyToadflax,
  grimyTorstol,
  guam,
  harralander,
  irit,
  kwuarm,
  lantadyme,
  ranarrWeed,
  snapdragon,
  tarromin,
  toadflax,
  torstol
} from "../../items/allItemNames";


const cleanHerbActions = [
  {
    name: cleanAvantoe,
    imageName: 'Avantoe.png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 48}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 10}
    ],
    itemsRequired: [
      {name: grimyAvantoe, count: 1}
    ],
    itemsRewarded: [
      {name: avantoe, count: 1}
    ]
  },
  {
    name: cleanCadantine,
    imageName: 'Cadantine.png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 65}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 12.5}
    ],
    itemsRequired: [
      {name: grimyCadantine, count: 1}
    ],
    itemsRewarded: [
      {name: cadantine, count: 1}
    ]
  },
  {
    name: cleanDwarfWeed,
    imageName: 'Dwarf_weed.png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 70}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 13.8}
    ],
    itemsRequired: [
      {name: grimyDwarfWeed, count: 1}
    ],
    itemsRewarded: [
      {name: dwarfWeed, count: 1}
    ]
  },
  {
    name: cleanGuam,
    imageName: 'Guam_leaf.png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 3}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 2.5}
    ],
    itemsRequired: [
      {name: grimyGuam, count: 1}
    ],
    itemsRewarded: [
      {name: guam, count: 1}
    ]
  },
  {
    name: cleanHarralander,
    imageName: 'Harralander.png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 20}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 6.3}
    ],
    itemsRequired: [
      {name: grimyHarralander, count: 1}
    ],
    itemsRewarded: [
      {name: harralander, count: 1}
    ]
  },
  {
    name: cleanIrit,
    imageName: 'Irit_leaf.png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 40}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 8.8}
    ],
    itemsRequired: [
      {name: grimyIrit, count: 1}
    ],
    itemsRewarded: [
      {name: irit, count: 1}
    ]
  },
  {
    name: cleanKwuarm,
    imageName: 'Kwuarm.png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 54}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 11.3}
    ],
    itemsRequired: [
      {name: grimyKwuarm, count: 1}
    ],
    itemsRewarded: [
      {name: kwuarm, count: 1}
    ]
  },
  {
    name: cleanLantadyme,
    imageName: 'Lantadyme.png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 67}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 13.1}
    ],
    itemsRequired: [
      {name: grimyLantadyme, count: 1}
    ],
    itemsRewarded: [
      {name: lantadyme, count: 1}
    ]
  },
  {
    name: cleanMarrentill,
    imageName: 'Marrentill.png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 5}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 3.8}
    ],
    itemsRequired: [
      {name: grimyMarrentill, count: 1}
    ],
    itemsRewarded: [
      {name: cleanMarrentill, count: 1}
    ]
  },
  {
    name: cleanRanarrWeed,
    imageName: 'Ranarr_weed.png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 25}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 7.5}
    ],
    itemsRequired: [
      {name: grimyRanarrWeed, count: 1}
    ],
    itemsRewarded: [
      {name: ranarrWeed, count: 1}
    ]
  },
  {
    name: cleanSnapdragon,
    imageName: 'Snapdragon.png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 59}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 11.8}
    ],
    itemsRequired: [
      {name: grimySnapdragon, count: 1}
    ],
    itemsRewarded: [
      {name: snapdragon, count: 1}
    ]
  },
  {
    name: cleanTarromin,
    imageName: 'Tarromin.png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 11}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 5}
    ],
    itemsRequired: [
      {name: grimyTarromin, count: 1}
    ],
    itemsRewarded: [
      {name: tarromin, count: 1}
    ]
  },
  {
    name: cleanToadflax,
    imageName: 'Toadflax.png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 30}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 8}
    ],
    itemsRequired: [
      {name: grimyToadflax, count: 1}
    ],
    itemsRewarded: [
      {name: toadflax, count: 1}
    ]
  },
  {
    name: cleanTorstol,
    imageName: 'Torstol.png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 75}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 15}
    ],
    itemsRequired: [
      {name: grimyTorstol, count: 1}
    ],
    itemsRewarded: [
      {name: torstol, count: 1}
    ]
  },
];


const levelRequired = (action) => action.skillsRequired[0].level;


export default cleanHerbActions.sort((a, b) => {
  const aLevelReq = levelRequired(a);
  const bLevelReq = levelRequired(b);
  if (aLevelReq > bLevelReq) return 1;
  if (aLevelReq < bLevelReq) return -1;
  return 0
});