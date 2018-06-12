import React, { Component } from 'react';
import SignUp from "../../Forms/SignUp/SignUp";
import ConfirmSignUp from "../../Forms/ConfirmSignUp/ConfirmSignUp";
import SignIn from "../../Forms/SignIn/SignIn";


class Authentication extends Component {
  state = {
    activeSectionIndex: 0,
    sections: [
      {title: 'Sign in', comp: SignIn},
      {title: 'Sign up', comp: SignUp},
      {title: 'Confirm email', comp: ConfirmSignUp},
    ]
  };

  handleTabClick = (index) => {
    this.setState({ activeSectionIndex: index })
  };

  render() {
    const ActiveComponent = this.state.sections[this.state.activeSectionIndex].comp;
    return (
      <div className={"card"}>
        <div className={"card-header"}>
          <ul className="nav nav-tabs card-header-tabs">
            {this.state.sections.map((section, index) => {
              const navLinkClass = this.state.activeSectionIndex === index ? 'nav-link active' : 'nav-link';
              return <li className={"nav-item"} key={index}>
                <a className={navLinkClass} onClick={() => this.handleTabClick(index)} style={{cursor: "pointer"}}>{section.title}</a>
              </li>
            })}
          </ul>
        </div>
        <div className={"card-body"}>
          <ActiveComponent/>
        </div>
      </div>
    )
  }
}


export default Authentication;