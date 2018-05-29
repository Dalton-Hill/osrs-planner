import { herblore } from "../../skills/allskillNames";
import {
  agilityDose, amylaseCrystal, antidotePlusDose, antidotePlusPlusDose, antifireDose,
  antipoisonDose, antivenomDose, antivenomPlusDose,
  ashes,
  attackDose,
  avantoe,
  cadantine,
  chocolateDust, coconutMilk,
  combatDose,
  compostDose, crushedBirdsNest, crushedSuperiorDragonBones,
  defenceDose,
  dragonScaleDust,
  dwarfWeed,
  energyDose, extendedAntifireDose, extendedSuperAntifireDose,
  eyeOfNewt,
  fishingDose,
  garlic,
  goatHornDust,
  guam,
  guthixBalanceDose,
  harralander,
  hunterDose,
  irit, jangerberries,
  kebbitTeethDust,
  kwuarm,
  lantadyme, lavaScaleShard,
  limpwurtRoot, magicDose, magicRoots,
  marrentill,
  mortMyreFungi, nailBeastNails, potatoCactus,
  prayerDose,
  ranarrWeed, rangingDose,
  redSpidersEggs,
  restoreDose, sanfewSerumDose, saradominBrewDose,
  serum207Dose,
  silverDust, snakeWeed,
  snapdragon,
  snapeGrass, staminaDose,
  strengthDose, superAntifireDose,
  superAntipoisonDose,
  superAttackDose, superCombatDose, superDefenceDose,
  superEnergyDose,
  superRestoreDose,
  superStrengthDose,
  tarromin,
  toadflax,
  toadsLegs,
  torstol,
  unicornHornDust,
  volcanicAsh,
  whiteBerries, wineOfZamorak, yewRoots, zamorakDose, zulrahsScales
} from "../../items/allItemNames";
import {
  makeAttackPotion,
  makeAntipoisonPotion,
  makeStrengthPotion,
  makeSerum207Potion,
  makeCompostPotion,
  makeRestorePotion,
  makeGuthixBalancePotion,
  makeEnergyPotion,
  makeDefencePotion,
  makeAgilityPotion,
  makeCombatPotion,
  makePrayerPotion,
  makeSuperAttackPotion,
  makeSuperAntipoisonPotion,
  makeFishingPotion,
  makeSuperEnergyPotion,
  makeHunterPotion,
  makeSuperStrengthPotion,
  makeSuperRestorePotion,
  makeSanfewSerumPotion,
  makeSuperDefencePotion,
  makeAntidotePlusPotion,
  makeAntifirePotion,
  makeRangingPotion,
  makeMagicPotion,
  makeStaminaPotion,
  makeZamorakBrewPotion,
  makeAntidotePlusPLusPotion,
  makeSaradominBrewPotion,
  makeExtendedAntifirePotion,
  makeAntivenomPotion,
  makeSuperCombatPotion,
  makeSuperAntifirePotion,
  makeAntivenomPlusPotion,
  makeExtendedSuperAntifirePotion
} from "../../actions/allActionNames";


const makePotionActions = [
  {
    name: makeAttackPotion,
    imageName: 'Attack_potion(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 3}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 25}
    ],
    itemsRequired: [
      {name: guam, count: 1},
      {name: eyeOfNewt, count: 1},
    ],
    itemsRewarded: [
      {name: attackDose, count: 3}
    ]
  },
  {
    name: makeAntipoisonPotion,
    imageName: 'Antipoison(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 5}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 37.5}
    ],
    itemsRequired: [
      {name: marrentill, count: 1},
      {name: unicornHornDust, count: 1},
    ],
    itemsRewarded: [
      {name: antipoisonDose, count: 3}
    ]
  },
  {
    name: makeStrengthPotion,
    imageName: 'Strength_potion(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 12}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 50}
    ],
    itemsRequired: [
      {name: tarromin, count: 1},
      {name: limpwurtRoot, count: 1},
    ],
    itemsRewarded: [
      {name: strengthDose, count: 3}
    ]
  },
  {
    name: makeSerum207Potion,
    imageName: 'Serum_207_(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 15}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 50}
    ],
    itemsRequired: [
      {name: tarromin, count: 1},
      {name: ashes, count: 1},
    ],
    itemsRewarded: [
      {name: serum207Dose, count: 3}
    ]
  },
  {
    name: makeCompostPotion,
    imageName: 'Compost_potion(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 21}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 60}
    ],
    itemsRequired: [
      {name: harralander, count: 1},
      {name: volcanicAsh, count: 1},
    ],
    itemsRewarded: [
      {name: compostDose, count: 3}
    ]
  },
  {
    name: makeRestorePotion,
    imageName: 'Restore_potion(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 22}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 62.5}
    ],
    itemsRequired: [
      {name: harralander, count: 1},
      {name: redSpidersEggs, count: 1},
    ],
    itemsRewarded: [
      {name: restoreDose, count: 3}
    ]
  },
  {
    name: makeGuthixBalancePotion,
    imageName: 'Guthix_balance_(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 22}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 62.5}
    ],
    itemsRequired: [
      {name: harralander, count: 1},
      {name: redSpidersEggs, count: 1},
      {name: garlic, count: 1},
      {name: silverDust, count: 1},
    ],
    itemsRewarded: [
      {name: guthixBalanceDose, count: 3}
    ]
  },
  {
    name: makeEnergyPotion,
    imageName: 'Energy_potion(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 26}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 67.5}
    ],
    itemsRequired: [
      {name: harralander, count: 1},
      {name: chocolateDust, count: 1},
    ],
    itemsRewarded: [
      {name: energyDose, count: 3}
    ]
  },
  {
    name: makeDefencePotion,
    imageName: 'Defence_potion(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 30}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 75}
    ],
    itemsRequired: [
      {name: ranarrWeed, count: 1},
      {name: whiteBerries, count: 1},
    ],
    itemsRewarded: [
      {name: defenceDose, count: 3}
    ]
  },
  {
    name: makeAgilityPotion,
    imageName: 'Agility_potion(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 34}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 80}
    ],
    itemsRequired: [
      {name: toadflax, count: 1},
      {name: toadsLegs, count: 1},
    ],
    itemsRewarded: [
      {name: agilityDose, count: 3}
    ]
  },
  {
    name: makeCombatPotion,
    imageName: 'Combat_potion(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 36}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 84}
    ],
    itemsRequired: [
      {name: harralander, count: 1},
      {name: goatHornDust, count: 1},
    ],
    itemsRewarded: [
      {name: combatDose, count: 3}
    ]
  },
  {
    name: makePrayerPotion,
    imageName: 'Prayer_potion(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 38}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 87.5}
    ],
    itemsRequired: [
      {name: ranarrWeed, count: 1},
      {name: snapeGrass, count: 1},
    ],
    itemsRewarded: [
      {name: prayerDose, count: 3}
    ]
  },
  {
    name: makeSuperAttackPotion,
    imageName: 'Super_attack(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 45}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 100}
    ],
    itemsRequired: [
      {name: irit, count: 1},
      {name: eyeOfNewt, count: 1},
    ],
    itemsRewarded: [
      {name: superAttackDose, count: 3}
    ]
  },
  {
    name: makeSuperAntipoisonPotion,
    imageName: 'Superantipoison(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 48}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 106.3}
    ],
    itemsRequired: [
      {name: irit, count: 1},
      {name: unicornHornDust, count: 1},
    ],
    itemsRewarded: [
      {name: superAntipoisonDose, count: 3}
    ]
  },
  {
    name: makeFishingPotion,
    imageName: 'Fishing_potion(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 50}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 112.5}
    ],
    itemsRequired: [
      {name: avantoe, count: 1},
      {name: snapeGrass, count: 1},
    ],
    itemsRewarded: [
      {name: fishingDose, count: 3}
    ]
  },
  {
    name: makeSuperEnergyPotion,
    imageName: 'Super_energy(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 52}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 117.5}
    ],
    itemsRequired: [
      {name: avantoe, count: 1},
      {name: mortMyreFungi, count: 1},
    ],
    itemsRewarded: [
      {name: superEnergyDose, count: 3}
    ]
  },
  {
    name: makeHunterPotion,
    imageName: 'Hunter_potion(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 53}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 120}
    ],
    itemsRequired: [
      {name: avantoe, count: 1},
      {name: kebbitTeethDust, count: 1},
    ],
    itemsRewarded: [
      {name: hunterDose, count: 3}
    ]
  },
  {
    name: makeSuperStrengthPotion,
    imageName: 'Super_strength(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 55}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 125}
    ],
    itemsRequired: [
      {name: kwuarm, count: 1},
      {name: limpwurtRoot, count: 1},
    ],
    itemsRewarded: [
      {name: superStrengthDose, count: 3}
    ]
  },
  {
    name: makeSuperRestorePotion,
    imageName: 'Super_restore(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 63}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 142.5}
    ],
    itemsRequired: [
      {name: snapdragon, count: 1},
      {name: redSpidersEggs, count: 1},
    ],
    itemsRewarded: [
      {name: superRestoreDose, count: 3}
    ]
  },
  {
    name: makeSanfewSerumPotion,
    imageName: 'Sanfew_serum(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 65}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 160}
    ],
    itemsRequired: [
      {name: snapdragon, count: 1},
      {name: redSpidersEggs, count: 1},
      {name: snakeWeed, count: 1},
      {name: nailBeastNails, count: 1},
    ],
    itemsRewarded: [
      {name: sanfewSerumDose, count: 3}
    ]
  },
  {
    name: makeSuperDefencePotion,
    imageName: 'Super_defence(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 66}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 150}
    ],
    itemsRequired: [
      {name: cadantine, count: 1},
      {name: whiteBerries, count: 1},
    ],
    itemsRewarded: [
      {name: superDefenceDose, count: 3}
    ]
  },
  {
    name: makeAntidotePlusPotion,
    imageName: 'Antidote+(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 68}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 155}
    ],
    itemsRequired: [
      {name: coconutMilk, count: 1},
      {name: toadflax, count: 1},
      {name: yewRoots, count: 1},
    ],
    itemsRewarded: [
      {name: antidotePlusDose, count: 3}
    ]
  },
  {
    name: makeAntifirePotion,
    imageName: 'Antifire_potion(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 69}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 157.5}
    ],
    itemsRequired: [
      {name: lantadyme, count: 1},
      {name: dragonScaleDust, count: 1},
    ],
    itemsRewarded: [
      {name: antifireDose, count: 3}
    ]
  },
  {
    name: makeRangingPotion,
    imageName: 'Ranging_potion(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 72}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 162.5}
    ],
    itemsRequired: [
      {name: dwarfWeed, count: 1},
      {name: wineOfZamorak, count: 1},
    ],
    itemsRewarded: [
      {name: rangingDose, count: 3}
    ]
  },
  {
    name: makeMagicPotion,
    imageName: 'Magic_potion(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 76}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 172.5}
    ],
    itemsRequired: [
      {name: lantadyme, count: 1},
      {name: potatoCactus, count: 1},
    ],
    itemsRewarded: [
      {name: magicDose, count: 3}
    ]
  },
  {
    name: makeStaminaPotion,
    imageName: 'Stamina_potion(1).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 77}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 25.5}
    ],
    itemsRequired: [
      {name: superEnergyDose, count: 1},
      {name: amylaseCrystal, count: 1},
    ],
    itemsRewarded: [
      {name: staminaDose, count: 1}
    ]
  },
  {
    name: makeZamorakBrewPotion,
    imageName: 'Zamorak_brew(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 78}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 175}
    ],
    itemsRequired: [
      {name: torstol, count: 1},
      {name: jangerberries, count: 1},
    ],
    itemsRewarded: [
      {name: zamorakDose, count: 3}
    ]
  },
  {
    name: makeAntidotePlusPLusPotion,
    imageName: 'Antidote++(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 79}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 177.5}
    ],
    itemsRequired: [
      {name: coconutMilk, count: 1},
      {name: irit, count: 1},
      {name: magicRoots, count: 1},
    ],
    itemsRewarded: [
      {name: antidotePlusPlusDose, count: 3}
    ]
  },
  {
    name: makeSaradominBrewPotion,
    imageName: 'Saradomin_brew(3).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 81}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 180}
    ],
    itemsRequired: [
      {name: toadflax, count: 1},
      {name: crushedBirdsNest, count: 1},
    ],
    itemsRewarded: [
      {name: saradominBrewDose, count: 3}
    ]
  },
  {
    name: makeExtendedAntifirePotion,
    imageName: 'Extended_antifire(1).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 84}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 27.5}
    ],
    itemsRequired: [
      {name: antifireDose, count: 1},
      {name: lavaScaleShard, count: 1},
    ],
    itemsRewarded: [
      {name: extendedAntifireDose, count: 1}
    ]
  },
  {
    name: makeAntivenomPotion,
    imageName: 'Anti-venom(1).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 87}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 30}
    ],
    itemsRequired: [
      {name: zulrahsScales, count: 5},
      {name: antidotePlusPlusDose, count: 1},
    ],
    itemsRewarded: [
      {name: antivenomDose, count: 1}
    ]
  },
  {
    name: makeSuperCombatPotion,
    imageName: 'Super_combat_potion(4).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 90}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 150}
    ],
    itemsRequired: [
      {name: superAttackDose, count: 4},
      {name: superStrengthDose, count: 4},
      {name: superDefenceDose, count: 4},
      {name: torstol, count: 1},
    ],
    itemsRewarded: [
      {name: superCombatDose, count: 4}
    ]
  },
  {
    name: makeSuperAntifirePotion,
    imageName: 'Super_antifire_potion(4).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 92}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 130}
    ],
    itemsRequired: [
      {name: antifireDose, count: 4},
      {name: crushedSuperiorDragonBones, count: 1},
    ],
    itemsRewarded: [
      {name: superAntifireDose, count: 4}
    ]
  },
  {
    name: makeAntivenomPlusPotion,
    imageName: 'Anti-venom+(4).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 94}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 125}
    ],
    itemsRequired: [
      {name: antivenomDose, count: 4},
      {name: torstol, count: 1},
    ],
    itemsRewarded: [
      {name: antivenomPlusDose, count: 4}
    ]
  },
  {
    name: makeExtendedSuperAntifirePotion,
    imageName: 'Extended_super_antifire(4).png',
    count: 0,
    skillsRequired: [
      {name: herblore, level: 98}
    ],
    skillExperienceRewards: [
      {name: herblore, amount: 40}
    ],
    itemsRequired: [
      {name: superAntifireDose, count: 1},
      {name: lavaScaleShard, count: 1},
    ],
    itemsRewarded: [
      {name: extendedSuperAntifireDose, count: 1}
    ]
  },
];


const levelRequired = (action) => action.skillsRequired[0].level;


export default makePotionActions.sort((a, b) => {
  const aLevelReq = levelRequired(a);
  const bLevelReq = levelRequired(b);
  if (aLevelReq > bLevelReq) return 1;
  if (aLevelReq < bLevelReq) return -1;
  return 0
});