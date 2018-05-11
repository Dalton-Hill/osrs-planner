import React from 'react';
import { Link } from 'react-router-dom';


const navbar = (props) => {
  return (
    <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
      <div className={"collapse navbar-collapse"}>
        <ul className={"navbar-nav mr-auto"}>
          {props.routes.map((route, index) => {
            return <li className={"nav-item"} key={index}><Link className={"nav-link"} to={route.description}>{route.description}</Link></li>
          })}
        </ul>
      </div>
    </nav>
  )
};


export default navbar;