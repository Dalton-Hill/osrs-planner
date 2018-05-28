import fletchingProducts from './types/fletchingProducts';
import fletchingSecondaries from './types/fletchingSecondaries';
import grimyHerbs from './types/grimyHerbs';
import cleanHerbs from './types/cleanHerbs';
import herbloreSecondaries from './types/herbloreSecondaries';
import herbTars from './types/herbTars';
import potionDoses from './types/potionDoses';
import logs from './types/logs';
import misc from './types/misc';


const allItems = [
  ...fletchingSecondaries,
  ...fletchingProducts,
  ...grimyHerbs,
  ...cleanHerbs,
  ...herbloreSecondaries,
  ...herbTars,
  ...potionDoses,
  ...logs,
  ...misc,
];


export default allItems;