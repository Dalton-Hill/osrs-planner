import { fletchingSecondary } from "../allTypeNames";
import { bowString } from "../allItemNames";
import {sortItemsByName} from "../utils";

const fletchingSecondaries = [
  {
    name: bowString,
    imageName: 'Bow_string.png',
    type: fletchingSecondary,
    count: 0
  }
];


export default sortItemsByName(fletchingSecondaries);