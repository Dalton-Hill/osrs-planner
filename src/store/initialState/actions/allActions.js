import firemakingActions from './firemaking/actions';
import woodcuttingActions from './woodcutting/actions';
import fletchingActions from './fletching/actions';
import cleanHerbActions from "./herblore/cleanHerbActions";


const allActions = [
  ...firemakingActions,
  ...woodcuttingActions,
  ...fletchingActions,
  ...cleanHerbActions
];


export default allActions;