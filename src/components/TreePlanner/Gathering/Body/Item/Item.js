import React from 'react';


const item = ({ log, change }) => {
  const isCountValid = !isNaN(parseInt(log.count, 10));
  const experienceGained = isCountValid ? (parseInt(log.count, 10) * log.woodcutting_xp).toFixed(2) : 0;
  return (
    <tr>
      <td><img src={require('../../../../../Assets/images/treePlanner/' + log.image_name)} alt={log.name}/><p>{log.name}</p></td>
      <td><input value={log.count} className={"form-control"} onChange={(event) => change(event, log.name)}/></td>
      <td><input className={"form-control"} readOnly={true} value={experienceGained}/></td>
    </tr>
  );
};


export default item;