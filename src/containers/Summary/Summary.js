import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '../../components/Summary/Table';


class Summary extends Component {
  render() {
    return (
      <div className={"card"}>
        <div className={"card-header"}>
          <h2 className={"card-title"}>Summary</h2>
        </div>
        <div className={"card-body"}>
          <Table skills={this.props.skills}/>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    skills: state.skills
  }
};


export default connect(mapStateToProps)(Summary);