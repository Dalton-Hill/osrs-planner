import React from 'react';
import Row from './Row/Row';


const skillTable = (props) => {
  return (
    <table className={"table"}>
      <thead>
      <tr>
        <th>Description</th>
        <th>LvL</th>
        <th>Chopped</th>
        <th>XP</th>
      </tr>
      </thead>
      <tbody>
      {props.logs.map(log => <Row log={log}/>)}
      </tbody>
    </table>
  )
};


export default skillTable;