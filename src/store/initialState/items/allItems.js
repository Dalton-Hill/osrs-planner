import fletchingProducts from './types/fletchingProducts';
import fletchingSecondaries from './types/fletchingSecondaries';
import logs from './types/logs';
import misc from './types/misc';


const allItems = [
  ...logs,
  ...fletchingProducts,
  ...fletchingSecondaries,
  ...misc
];


export default allItems;