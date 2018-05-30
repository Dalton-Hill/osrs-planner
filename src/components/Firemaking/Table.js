import React from 'react';
import Row from './Row/Row';


const table = (props) => {
  return (
    <table className={"table"}>
      <thead className={"thead-light"}>
      <tr>
        <th>Action</th>
        <th>LvL</th>
        <th>Cost</th>
        <th>Available</th>
        <th>Burn</th>
      </tr>
      </thead>
      <tbody>
        {props.firemakingActions.map(action => <Row action={action} key={action.name}
                                                   onUpdateActionCount={props.onUpdateActionCount}/>)}
      </tbody>
    </table>
  )
};


export default table;