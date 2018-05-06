import React from 'react';


const img_style = {height: "30px", width: "30px"};


const item = ({ log, change }) => {
  const isCountValid = !isNaN(parseInt(log.count, 10));
  const experienceGained = isCountValid ? parseInt(log.count, 10) * log.woodcutting_xp : 0;
  return (
    <tr>
      <td><img src={log.image_url} alt={log.name} style={img_style}/><p>{log.name}</p></td>
      <td><input value={log.count} className={"form-control"} onChange={(event) => change(event, log.name)}/></td>
      <td><input className={"form-control"} readOnly={true} value={experienceGained}/></td>
    </tr>
  );
};


export default item;