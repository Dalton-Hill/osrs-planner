import firemakingActions from './firemaking/actions';
import woodcuttingActions from './woodcutting/actions';
import fletchingActions from './fletching/actions';


const allActions = [
  ...firemakingActions,
  ...woodcuttingActions,
  ...fletchingActions
];


export default allActions;