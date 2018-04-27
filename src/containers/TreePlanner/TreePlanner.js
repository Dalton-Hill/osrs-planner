import React, { Component } from 'react';
import axios from 'axios'
import Tabs from '../../components/TreePlanner/Tabs/Tabs';
import GatheringBody from '../../components/TreePlanner/Gathering/Body';
import FiremakingBody from '../../components/TreePlanner/Firemaking/Body';
import FletchingBody from '../../components/TreePlanner/Fletching/Body';


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
    const trees = [...this.state.trees];
    const treeToChangeIndex = trees.findIndex(tree => tree.log.name === logName);
    trees[treeToChangeIndex].log.count = event.target.value;
    this.setState({trees: trees})
  };

  componentDidMount() {
    axios.get('https://8y35tqer0g.execute-api.us-east-1.amazonaws.com/dev/tree')
      .then(resp => {
        const trees = resp.data.items;
        trees.sort((tree1, tree2) => {
          if (tree1.name < tree2.name) return -1;
          if (tree1.name > tree2.name) return 1;
          return 0;
        });
        this.setState({trees: trees});
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
          <Body trees={this.state.trees} handleLogCountChange={this.handleLogCountChange}/>
        </div>
      </div>
    )
  }
}


export default TreePlanner;