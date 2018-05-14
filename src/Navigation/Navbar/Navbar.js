import React from 'react';
import { Link } from 'react-router-dom';


const navbar = (props) => {
  return (
    <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
      <Link className="navbar-brand" to={"/Home"}>IronCalculator</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>
      <div className={"collapse navbar-collapse"} id={"navbarCollapse"}>
        <ul className={"navbar-nav"}>
          {props.routes.map((route, index) => {
            return <li className={"nav-item"} key={index}><Link className={"nav-link"} to={route.description}>{route.description}</Link></li>
          })}
        </ul>
      </div>
    </nav>
  )
};


export default navbar;