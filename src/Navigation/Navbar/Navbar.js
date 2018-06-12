import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';


class Navbar extends Component {
  state = {
    activeLinkIndex: null
  };

  linkClickHandler = (indexOfLinkClicked) => {
    this.setState({ activeLinkIndex: indexOfLinkClicked })
  };

  render() {
    return (
      <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
        <Link className="navbar-brand" to={"/Home"} onClick={() => this.setState({ activeLinkIndex: null })}>OSRSDayDream</Link>
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
          <ul className={"navbar-nav"}>
            <li className={"nav-item"}>
              {this.props.isAuthenticated ? <Link className={"nav-link"} to={'/'} onClick={this.props.signOut}>Sign Out</Link> : <Link className={"nav-link"} to={'/Authentication'}>Sign In</Link>}
            </li>
          </ul>
      </nav>
    )
  }
}


const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  }
};


const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch({ type: actions.SIGN_OUT })
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);