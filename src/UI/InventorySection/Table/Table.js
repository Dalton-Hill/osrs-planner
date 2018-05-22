import React from 'react';
import Row from './Row/Row';


const table = (props) => {
  return (
    <table className={"table"}>
      <thead className={"thead-light"}>
      <tr>
        <th>Description</th>
        <th>Amount</th>
        <th>Usage</th>
      </tr>
      </thead>
      <tbody>
      {props.items.map(item => <Row item={item} key={item.name} onUpdateCount={props.onUpdateCount}/>)}
      </tbody>
    </table>
  )
};


export default table;