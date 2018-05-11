import React from 'react';


const tab = ({ id, name, image_name, click}) => {
  return (
    <li className={"nav-item"}>
      <img src={require('../../../../Assets/images/skillIcons/' + image_name)} alt={name} className="nav-link" onClick={() => click(id)}/>
    </li>
  )
};


export default tab;