import fletchingProducts from './fletchingProducts';
import fletchingSecondaries from './fletchingSecondaries';
import logs from './logs';


const inventory = [
  ...logs,
  ...fletchingProducts,
  ...fletchingSecondaries
];


export default inventory;