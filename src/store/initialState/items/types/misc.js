import { ashes } from "../allItemNames";
import { misc as miscType } from "../allTypeNames";
import {sortItemsByName} from "../utils";


const misc = [
  {
    name: ashes,
    imageName: 'Ashes.png',
    type: miscType,
    count: 0
  }
];


export default sortItemsByName(misc);