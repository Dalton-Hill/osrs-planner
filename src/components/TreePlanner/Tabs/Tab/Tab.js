import React from 'react';


const tab = ({ id, name, click}) => {
  return (
    <li className={"nav-item"}>
      <button className="nav-link" onClick={() => click(id)}>{name}</button>
    </li>
  )
};


export default tab;