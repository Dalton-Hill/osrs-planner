import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles';

class navbar extends Component {
  state = {
    activeLinkIndex: null
  };

  linkClickHandler = (indexOfLinkClicked) => {
    this.setState({ activeLinkIndex: indexOfLinkClicked })
  };

  render() {
    return (
      <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
        <Link className="navbar-brand" to={"/Home"} onClick={() => this.setState({ activeLinkIndex: null })}>IronCalculator</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className={"collapse navbar-collapse"} id={"navbarCollapse"}>
          <ul className={"navbar-nav"}>
            {this.props.routes.map((route, index) => {
              const linkClass = index === this.state.activeLinkIndex ? "nav-link active" : "nav-link";
              const linkStyle = index === this.state.activeLinkIndex ? styles.linkActive : null;
              return (
                <li className={"nav-item"} key={index}>
                  <Link className={linkClass} to={route.description} onClick={() => this.linkClickHandler(index)} style={linkStyle}>
                    <img src={require('../../Assets/images/' + route.logoName)} alt={route.logoName}
                    style={styles.image}/>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}


export default navbar;