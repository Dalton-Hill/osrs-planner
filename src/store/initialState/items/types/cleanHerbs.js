import { cleanHerb } from "../allTypeNames";
import {
  avantoe,
  cadantine,
  dwarfWeed,
  guam,
  harralander,
  irit,
  kwuarm,
  lantadyme,
  marrentill,
  ranarrWeed,
  snapdragon,
  tarromin,
  toadflax,
  torstol
} from "../allItemNames";
import {sortItemsByName} from "../utils";


const cleanHerbs = [
  {
    name: avantoe,
    imageName: 'Avantoe.png',
    type: cleanHerb,
    count: 0
  },
  {
    name: cadantine,
    imageName: 'Cadantine.png',
    type: cleanHerb,
    count: 0
  },
  {
    name: dwarfWeed,
    imageName: 'Dwarf_weed.png',
    type: cleanHerb,
    count: 0
  },
  {
    name: guam,
    imageName: 'Guam_leaf.png',
    type: cleanHerb,
    count: 0
  },
  {
    name: harralander,
    imageName: 'Harralander.png',
    type: cleanHerb,
    count: 0
  },
  {
    name: irit,
    imageName: 'Irit_leaf.png',
    type: cleanHerb,
    count: 0
  },
  {
    name: kwuarm,
    imageName: 'Kwuarm.png',
    type: cleanHerb,
    count: 0
  },
  {
    name: lantadyme,
    imageName: 'Lantadyme.png',
    type: cleanHerb,
    count: 0
  },
  {
    name: marrentill,
    imageName: 'Marrentill.png',
    type: cleanHerb,
    count: 0
  },
  {
    name: ranarrWeed,
    imageName: 'Ranarr_weed.png',
    type: cleanHerb,
    count: 0
  },
  {
    name: snapdragon,
    imageName: 'Snapdragon.png',
    type: cleanHerb,
    count: 0
  },
  {
    name: tarromin,
    imageName: 'Tarromin.png',
    type: cleanHerb,
    count: 0
  },
  {
    name: toadflax,
    imageName: 'Toadflax.png',
    type: cleanHerb,
    count: 0
  },
  {
    name: torstol,
    imageName: 'Torstol.png',
    type: cleanHerb,
    count: 0
  },
];


export default sortItemsByName(cleanHerbs);