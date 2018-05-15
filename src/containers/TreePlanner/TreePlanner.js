import React, { Component } from 'react';
import Tabs from '../../components/TreePlanner/Tabs/Tabs';
import GatheringBody from '../../components/TreePlanner/Gathering/Body/Body';
import FiremakingBody from '../../components/TreePlanner/Firemaking/Body';
import FletchingBody from '../../components/TreePlanner/Fletching/Body';
import defaultTrees from './trees';
import { updatePath, returnPathAttr } from './utils';


class TreePlanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSectionId: 1,
      sections: [
        {id: 1, name: 'Gathering', body: GatheringBody, image_name: 'woodcutting_icon.png'},
        {id: 2, name: 'Firemaking', body: FiremakingBody, image_name: 'Firemaking_icon.png'},
        {id: 3, name: 'Fletching', body: FletchingBody, image_name: 'Fletching_icon.png'}
      ],
      trees: defaultTrees
    }
  }
  handleSectionClick = (id) => {
    this.setState({ activeSectionId: id})
  };

  handleLogCountChange = (event, logName) => {
    let intValue = parseInt(event.target.value, 10);
    if (isNaN(intValue)) {
      intValue = 0;
    }
    const trees = [...this.state.trees];
    const treeToChangeIndex = trees.findIndex(tree => tree.log.name === logName);
    if (trees[treeToChangeIndex].log.count > intValue) {
      this.capBurnCount(intValue, treeToChangeIndex);
      this.capFletchCount(intValue - trees[treeToChangeIndex].log.countToBurn, treeToChangeIndex);
    }
    trees[treeToChangeIndex].log.count = intValue;
    this.setState({trees: trees});
  };

  capBurnCount = (cap, treeIndex) => {
    const trees = [...this.state.trees];
    if (trees[treeIndex].log.countToBurn > cap) {
      trees[treeIndex].log.countToBurn = cap;
      this.setState({ trees });
    }
  };

  capFletchCount = (cap, treeIndex) => {
    const trees = [...this.state.trees];
    trees[treeIndex].log.fletching_products.forEach(fp => {
      if (fp.count > cap) {
        fp.count = cap;
        if (fp.next_product.count > cap) fp.next_product.count = cap;
      }
    });
    this.setState({ trees });
  };

  handleBurnCountChange = (event, logName) => {
    let intValue = parseInt(event.target.value, 10);
    if (isNaN(intValue)) intValue = 0;
    const trees = [...this.state.trees];
    const treeToChangeIndex = trees.findIndex(tree => tree.log.name === logName);
    const logCount = trees[treeToChangeIndex].log.count;
    const countToBurn = (intValue <= logCount ? intValue : logCount);
    if (countToBurn > trees[treeToChangeIndex].log.countToBurn) {
      this.capFletchCount(logCount - countToBurn, treeToChangeIndex);
    }
    trees[treeToChangeIndex].log.countToBurn = countToBurn;
    this.setState({ trees })
  };

  handleFletchingProductChange = (event, pathToItem, maxPossibleProd) => {
    let intValue = parseInt(event.target.value, 10);
    if (isNaN(intValue)) intValue = 0;
    const trees = [...this.state.trees];
    const oldValue = returnPathAttr(trees, pathToItem, 'count');
    if (intValue > maxPossibleProd + oldValue) intValue = maxPossibleProd + oldValue;
    updatePath(trees, pathToItem, 'count', intValue);
    if (typeof pathToItem.find(section => section === 'next_product') === 'undefined') {  // if this is the parent product
      const childPath = [...pathToItem, 'next_product'];
      const childCount = returnPathAttr(trees, childPath, 'count');
      if (childCount > intValue) updatePath(trees, childPath, 'count', intValue);
    }
    this.setState({ trees })
  };

  render() {
    const Body = this.state.sections.find(({ id }) => id === this.state.activeSectionId).body;
    return (
      <div className="card text-center">
        <div className="card-header">
          <Tabs sections={this.state.sections} activeSectionId={this.state.activeSectionId} click={this.handleSectionClick}/>
        </div>
        <div className="card-body">
          <Body trees={this.state.trees} handleLogCountChange={this.handleLogCountChange}
                handleBurnCountChange={this.handleBurnCountChange}
                handleFletchingProductChange={this.handleFletchingProductChange}/>
        </div>
      </div>
    )
  }
}


export default TreePlanner;