import React from 'react';
import Row from './Row/Row';


const table = (props) => {
  return (
    <table className={"table"}>
      <thead className={"thead-light"}>
      <tr>
        <th>Action</th>
        <th>LvL</th>
        <th>Chopped</th>
      </tr>
      </thead>
      <tbody>
      {props.woodcuttingActions.map(action => <Row action={action} key={action.name}
                                                   onUpdateActionCount={props.onUpdateActionCount}/>)}
      </tbody>
    </table>
  )
};


export default table;