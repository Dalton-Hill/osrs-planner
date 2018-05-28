import React from 'react';
import Row from './Row/Row';


const table = (props) => {
  return (
    <table className={"table"}>
      <thead className={"thead-light"}>
      <tr>
        <th>Action</th>
        <th>LvL</th>
        <th>Items Required Per Action</th>
        <th>Items Available</th>
        <th>Make</th>
        <th>XP</th>
      </tr>
      </thead>
      <tbody>
        {props.fletchingActions.map(fletchingAction => <Row action={fletchingAction} key={fletchingAction.name} onUpdateActionCount={props.onUpdateActionCount}/>)}
      </tbody>
    </table>
  )
};


export default table;