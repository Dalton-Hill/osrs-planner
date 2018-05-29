import firemakingActions from './firemaking/actions';
import woodcuttingActions from './woodcutting/actions';
import fletchingActions from './fletching/actions';
import cleanHerbActions from "./herblore/cleanHerbActions";
import makePotionActions from "./herblore/makePotionActions";


const allActions = [
  ...firemakingActions,
  ...woodcuttingActions,
  ...fletchingActions,
  ...cleanHerbActions,
  ...makePotionActions
];


export default allActions;