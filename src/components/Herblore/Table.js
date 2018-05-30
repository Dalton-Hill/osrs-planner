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
        <th>Make</th>
      </tr>
      </thead>
      <tbody>
        {props.herbloreActions.map(herbloreAction => <Row action={herbloreAction} key={herbloreAction.name}
                                                          onUpdateActionCount={props.onUpdateActionCount}
                                                          onClickMakeAll={props.onClickMakeAll}/>)}
      </tbody>
    </table>
  )
};


export default table;