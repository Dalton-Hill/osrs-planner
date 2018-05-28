import { potionDose } from "../allTypeNames";
import {
  agilityDose, antidotePlusDose, antidotePlusPlusDose, antifireDose,
  antipoisonDose, antivenomDose, antivenomPlusDose,
  attackDose,
  combatDose,
  compostDose,
  defenseDose,
  energyDose, extendedAntifireDose, extendedSuperAntifireDose,
  fishingDose,
  guthixBalanceDose,
  hunterDose, magicDose,
  prayerDose, rangingDose,
  relicymsBalmDose,
  restoreDose,
  sanfewSerumDose, saradominBrewDose,
  serum207Dose, staminaDose,
  strengthDose, superAntifireDose,
  superAntipoisonDose,
  superAttackDose, superCombatDose,
  superDefenceDose,
  superEnergyDose,
  superRestoreDose,
  superStrengthDose, zamorakDose,
} from "../allItemNames";


const potionDoses = [
  {
    name: attackDose,
    imageName: 'Attack_potion(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: antipoisonDose,
    imageName: 'Antipoison(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: relicymsBalmDose,
    imageName: 'Relicyms_balm(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: strengthDose,
    imageName: 'Strength_potion(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: serum207Dose,
    imageName: 'Serum_207_(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: compostDose,
    imageName: 'Compost_potion(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: restoreDose,
    imageName: 'Restore_potion(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: guthixBalanceDose,
    imageName: 'Guthix_balance_(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: energyDose,
    imageName: 'Energy_potion(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: defenseDose,
    imageName: 'Defence_potion(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: agilityDose,
    imageName: 'Agility_potion(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: combatDose,
    imageName: 'Combat_potion(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: prayerDose,
    imageName: 'Prayer_potion(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: superAttackDose,
    imageName: 'Super_attack(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: superAntipoisonDose,
    imageName: 'Superantipoison(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: fishingDose,
    imageName: 'Fishing_potion(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: superEnergyDose,
    imageName: 'Super_energy(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: hunterDose,
    imageName: 'Hunter_potion(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: superStrengthDose,
    imageName: 'Super_strength(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: superRestoreDose,
    imageName: 'Super_restore(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: sanfewSerumDose,
    imageName: 'Sanfew_serum(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: superDefenceDose,
    imageName: 'Super_defence(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: antidotePlusDose,
    imageName: 'Antidote+(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: antifireDose,
    imageName: 'Antifire_potion(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: rangingDose,
    imageName: 'Ranging_potion(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: magicDose,
    imageName: 'Magic_potion(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: staminaDose,
    imageName: 'Stamina_potion(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: zamorakDose,
    imageName: 'Zamorak_brew(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: antidotePlusPlusDose,
    imageName: 'Antidote++(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: saradominBrewDose,
    imageName: 'Saradomin_brew(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: extendedAntifireDose,
    imageName: 'Extended_antifire(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: antivenomDose,
    imageName: 'Anti-venom(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: superCombatDose,
    imageName: 'Super_combat_potion(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: superAntifireDose,
    imageName: 'Super_antifire_potion(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: antivenomPlusDose,
    imageName: 'Anti-venom+(1).png',
    type: potionDose,
    count: 0
  },
  {
    name: extendedSuperAntifireDose,
    imageName: 'Extended_super_antifire(1).png',
    type: potionDose,
    count: 0
  },
];


export default potionDoses;