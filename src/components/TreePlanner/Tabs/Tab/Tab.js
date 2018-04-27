import React from 'react';


const tab = ({ id, name, image_src, click}) => {
  return (
    <li className={"nav-item"}>
      <img src={image_src} alt={name} className="nav-link" onClick={() => click(id)}/>
    </li>
  )
};


export default tab;