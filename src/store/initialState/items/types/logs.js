import { mapleLogs, yewLogs, magicLogs } from "../allItemNames";
import { log } from '../allTypeNames';
import { sortItemsByName } from '../utils';

const logs = [
  {
    name: mapleLogs,
    imageName: 'Maple_logs.png',
    type: log,
    count: 0
  },
  {
    name: yewLogs,
    imageName: 'Yew_logs.png',
    type: log,
    count: 0
  },
  {
    name: magicLogs,
    imageName: 'Magic_logs.png',
    type: log,
    count: 0
  }
];


export default sortItemsByName(logs);