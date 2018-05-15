import React from 'react';


const item = ({ tree, change }) => {
  const { log } = tree;
  const logsToBurn = log.countToBurn > log.count ? log.count : log.countToBurn;
  const xpGained = isNaN(logsToBurn) ? 0 : (logsToBurn * log.firemaking_xp).toFixed(2);
  return (
    <tr>
      <td><img src={require('../../../Assets/images/treePlanner/' + log.image_name)} alt={log.name}/><p>{log.name}</p></td>
      <td><input className={"form-control"} value={log.count - logsToBurn} readOnly={true}/></td>
      <td><input className={"form-control"} value={logsToBurn} onChange={(event) => change(event, log.name)}/></td>
      <td><input className={"form-control"} value={xpGained} readOnly={true}/></td>
    </tr>
  )
};


export default item;