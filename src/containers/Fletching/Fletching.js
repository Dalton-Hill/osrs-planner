import React, { Component } from 'react';
import { connect } from 'react-redux';
import FletchingTable from '../../components/Fletching/Table';
import SkillProgressBar from '../../UI/Progress/SkillProgressBar/SkillProgressBar';
import SkillExperienceForm from '../../Forms/SkillExperienceForm/SkillExperienceForm';
import { getParentItem } from '../../store/utils';
import * as actions from '../../store/actions';


class Fletching extends Component {
  state = {
    startingXP: 0,
    goalXP: 0
  };

  onChangeStartingXP = (event) => {
    let newStartingXP = parseFloat(event.target.value);
    if (isNaN(newStartingXP) || !newStartingXP) newStartingXP = 0;
    this.setState({ startingXP: newStartingXP})
  };

  onChangeGoalXP = (event) => {
    let newGoalXP = parseFloat(event.target.value);
    if (isNaN(newGoalXP) || !newGoalXP) newGoalXP = 0;
    this.setState({ goalXP: newGoalXP})
  };

  render() {
    let gainedXP = 0;
    if (typeof this.props.fletchingProducts !== "undefined") {
      gainedXP = this.props.fletchingProducts.reduce((totalXP, fletchingProduct) => {
        const parentItem = getParentItem(fletchingProduct);
        const fletchingProductCount = parentItem.counts.find(count => count.productName === fletchingProduct.name);
        return totalXP + fletchingProductCount.count * fletchingProductCount.xpPer;
      }, 0);
    }

    return (
      <div className={"card"}>
        <div className={"card-header"}>
          <h2 className={"card-title"}>Fletching</h2>
        </div>
        <div className={"card-body"}>
          <SkillExperienceForm startingXP={this.state.startingXP} goalXP={this.state.goalXP}
                               onChangeStartingXP={this.onChangeStartingXP}
                               onChangeGoalXP={this.onChangeGoalXP}/>
          <SkillProgressBar percent={(this.state.startingXP + gainedXP) / this.state.goalXP}/>
          <FletchingTable fletchingProducts={this.props.fletchingProducts} onUpdateCount={this.props.onUpdateCount}/>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    fletchingProducts: state.inventory.filter(item => item.type === 'fletching product')
  }
};


const mapDispatchToProps = dispatch => {
  return {
    onUpdateCount: (event, itemName, location, productName) => {
      return (
        dispatch(
          {
            type: actions.UPDATE_COUNT,
            itemName: itemName,
            location: location,
            productName: productName,
            newCount: parseInt(event.target.value, 10)})
      )
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Fletching);