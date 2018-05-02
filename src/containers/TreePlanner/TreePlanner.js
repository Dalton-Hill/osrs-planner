import React, { Component } from 'react';
import axios from 'axios'
import Tabs from '../../components/TreePlanner/Tabs/Tabs';
import GatheringBody from '../../components/TreePlanner/Gathering/Body';
import FiremakingBody from '../../components/TreePlanner/Firemaking/Body';
import FletchingBody from '../../components/TreePlanner/Fletching/Body';


const updatePath = (obj, path, attribute, value) => {
  if (path.length) {
    updatePath(obj[path.splice(0, 1)], path, attribute, value)
  } else {
    console.log(obj, value);
    obj[attribute] = value
  }
};


const returnPathAttr = (obj, path, attribute) => {
  if (path.length) {
    return returnPathAttr(obj[path.splice(0, 1)], path, attribute)
  } else {
    return obj[attribute]
  }
};


class TreePlanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptionId: 1,
      sections: [
        {id: 1, name: 'Gathering', body: GatheringBody, image_src: 'https://vignette.wikia.nocookie.net/2007scape/images/f/f4/Woodcutting_icon.png/revision/latest/scale-to-width-down/17?cb=20180424011002'},
        {id: 2, name: 'Firemaking', body: FiremakingBody, image_src: 'https://vignette.wikia.nocookie.net/2007scape/images/9/9b/Firemaking_icon.png/revision/latest/scale-to-width-down/21?cb=20180424010933'},
        {id: 3, name: 'Fletching', body: FletchingBody, image_src: 'https://vignette.wikia.nocookie.net/2007scape/images/9/93/Fletching_icon.png/revision/latest/scale-to-width-down/21?cb=20180424011032'}
      ],
      trees: []
    }
  }
  handleSectionClick = (id) => {
    this.setState({ selectedOptionId: id})
  };

  handleLogCountChange = (event, logName) => {
    let intValue = parseInt(event.target.value, 10);
    if (isNaN(intValue)) {
      intValue = 0;
    }
    const trees = [...this.state.trees];
    const treeToChangeIndex = trees.findIndex(tree => tree.log.name === logName);
    const currentBurnCount = trees[treeToChangeIndex].log.countToBurn;
    trees[treeToChangeIndex].log.count = intValue;
    trees[treeToChangeIndex].log.countToBurn = intValue < currentBurnCount ? intValue : currentBurnCount;
    this.setState({trees: trees});
  };

  handleBurnCountChange = (event, logName) => {
    let intValue = parseInt(event.target.value, 10);
    if (isNaN(intValue)) intValue = 0;
    const trees = [...this.state.trees];
    const treeToChangeIndex = trees.findIndex(tree => tree.log.name === logName);
    const logCount = trees[treeToChangeIndex].log.count;
    const countToBurn = (intValue <= logCount ? intValue : logCount);
    trees[treeToChangeIndex].log.countToBurn = countToBurn;
    trees[treeToChangeIndex].log.fletching_products.forEach((prod, index) => {
      this.setNewCap(logCount - countToBurn, [treeToChangeIndex, 'log', 'fletching_products', index], 'count')
    });
    this.setState({ trees })
  };

  handleFletchingProductChange = (event, pathToItem, maxPossibleProd) => {
    let intValue = parseInt(event.target.value, 10);
    if (isNaN(intValue)) intValue = 0;
    if (intValue > maxPossibleProd) intValue = maxPossibleProd;
    const trees = [...this.state.trees];
    const copyPath = [...pathToItem];
    updatePath(trees, pathToItem, 'count', intValue);
    this.setState({ trees });
    if (typeof copyPath.find(section => section === 'next_product') === 'undefined') {
      const childPath = [...copyPath, 'next_product'];
      this.setNewCap(intValue, childPath, 'count')
    }
  };

  setNewCap = (cap, pathToItem, attr) => {
    const trees = [...this.state.trees];
    const copyPath = [...pathToItem];
    const currentCount = returnPathAttr(trees, pathToItem, 'count');
    console.log(cap, currentCount);
    if (cap < currentCount) {
      updatePath(trees, copyPath, attr, cap);
      this.setState({ trees })
    }
  };

  componentDidMount() {
    axios.get('https://8y35tqer0g.execute-api.us-east-1.amazonaws.com/dev/tree')
      .then(resp => {
        let trees = resp.data.items;
        trees.sort((tree1, tree2) => {
          if (tree1.log.woodcutting_xp < tree2.log.woodcutting_xp) return -1;
          if (tree1.log.woodcutting_xp > tree2.log.woodcutting_xp) return 1;
          return 0;
        });
        this.setState({ trees });
      })
      .catch(err => {console.log(err)})
  }
  render() {
    const Body = this.state.sections.find(({ id }) => id === this.state.selectedOptionId).body;
    return (
      <div className="card text-center">
        <div className="card-header">
          <Tabs sections={this.state.sections} click={this.handleSectionClick}/>
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