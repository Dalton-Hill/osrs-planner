import React from 'react';
import Row from './Row/Row';


const table = (props) => {
  return (
    <table className={"table"}>
      <thead className={"thead-light"}>
      <tr>
        <th>Description</th>
        <th>LvL</th>
        <th>Chopped</th>
        <th>XP</th>
      </tr>
      </thead>
      <tbody>
      {props.logs.map(log => <Row log={log} key={log.name} onChoppedCountChange={props.onChoppedCountChange}/>)}
      </tbody>
    </table>
  )
};


export default table;