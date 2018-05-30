import React from 'react';
import Row from './Row/Row';


const table = (props) => {
  return (
    <table className={"table"}>
      <thead className={"thead-light"}>
      <tr>
        <th>Skill</th>
        <th>XP Gained</th>
      </tr>
      </thead>
      <tbody>
        {props.skills.map(skill => <Row skill={skill} key={skill.name}/>)}
      </tbody>
    </table>
  )
};


export default table;