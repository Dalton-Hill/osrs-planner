import fletchingProducts from './types/fletchingProducts';
import fletchingSecondaries from './types/fletchingSecondaries';
import grimyHerbs from './types/grimyHerbs';
import cleanHerbs from './types/cleanHerbs';
import logs from './types/logs';
import misc from './types/misc';


const allItems = [
  ...fletchingSecondaries,
  ...fletchingProducts,
  ...grimyHerbs,
  ...cleanHerbs,
  ...logs,
  ...misc,
];


export default allItems;