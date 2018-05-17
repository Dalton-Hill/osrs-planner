import React from 'react';
import * as styles from './styles';


const formatNumber = (number) => {
  let strNumber = number.toString();
  if (isNaN(strNumber)) return strNumber;

  const indexOfDecimal = strNumber.indexOf('.');
  const wholeNumber = indexOfDecimal === -1 ? strNumber : strNumber.slice(0, indexOfDecimal);
  let wholeNumArray = wholeNumber.split('');
  console.log(placeCommas(wholeNumArray, wholeNumArray.length - 1));
  return strNumber;
};


const placeCommas = (str, currentPosition) => {
  const length = str.join('').replace(',', '').length;
  if (currentPosition === 0) return str;
  if ((currentPosition - length) % 3 === 0) {
    return placeCommas([...str.splice(0, currentPosition), ',', ...str.splice(currentPosition)], currentPosition - 1)
  }
};


const skillExperienceForm = (props) => {
  return (
    <form style={styles.form}>
      <div className="form-group">
        <label htmlFor={"startingXPInput"}>Starting XP</label>
        <input id={"startingXPInput"} type="text" className="form-control" value={formatNumber(props.startingXP)}
        onChange={(event) => props.onChangeStartingXP(event)}/>
      </div>
      <div className="form-group">
        <label htmlFor={"goalXPInput"}>Goal XP</label>
        <input id={"goalXPInput"} type="text" className="form-control" value={props.goalXP}
               onChange={(event) => props.onChangeGoalXP(event)}/>
      </div>
    </form>
  )
};


export default skillExperienceForm;