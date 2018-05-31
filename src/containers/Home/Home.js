import React from 'react';


const home = (props) => {
  return (
    <React.Fragment>
      <div className={"card"}>
        <div className={"card-header"}>
          <h2 className={"card-title"}>Purpose of App</h2>
        </div>
        <div className={"card-body"}>
          To assist in the planning of a user's Old School Runescape goals
        </div>
      </div>
      <div className={"card"}>
        <div className={"card-header"}>
          <h2 className={"card-title"}>Target Audience</h2>
        </div>
        <div className={"card-body"}>
          Anyone who plays Old School Runescape, however, there is a focus on those who play the Ironman mode
        </div>
      </div>
      <div className={"card"}>
        <div className={"card-header"}>
          <h2 className={"card-title"}>Example of Usage</h2>
        </div>
        <div className={"card-body"}>
          Lets say that I have some Herblore items in my bank and I want to see how many doses/xp I would end with if I was to use them all.
          To find out the answer I'd follow the steps below.
          <ol>
            <li><h5>Input your Starting items</h5>
              <ol>
                <li>Click on the <img src={require('../../Assets/images/Inventory.png')} alt={"inventory"}/> icon located at the very top of the page.</li>
                <li>Click on the <img src={require('../../Assets/images/Grimy_guam_leaf.png')} alt={"grimyGuam"}/> tab and enter in any grimy herbs that you have.</li>
                <li>Click on the <img src={require('../../Assets/images/Guam_leaf.png')} alt={"guam"}/> tab and enter in any clean herbs that you have.</li>
                <li>Click on the <img src={require('../../Assets/images/Limpwurt_root.png')} alt={"limpwurtRoot"}/> tab and enter in any secondary ingredients that you have.</li>
              </ol>
            </li>
            <li><h5>Input the Number of Actions you'd like to complete</h5>
              <ol>
                <li>Click on the <img src={require('../../Assets/images/Herblore_icon.png')} alt={"herblore"}/> icon located at the very top of the page.</li>
                <li>Either type the number of herbs you'd like to clean or click the "All" button next to the input field to make all available.</li>
                <li>Click on the <img src={require('../../Assets/images/Attack_potion(3).png')} alt={"attackPotion"}/> tab.</li>
                <li>Either type the number of potions you'd like to make or click the "All" button next to the input field to make all available.</li>
              </ol>
            </li>
            <li><h5>Review your Items</h5>
              <ol>
                <li>Click on the <img src={require('../../Assets/images/Inventory.png')} alt={"inventory"}/> icon located at the very top of the page.</li>
                <li>Click on the <img src={require('../../Assets/images/Grimy_guam_leaf.png')} alt={"grimyGuam"}/> tab and view the "Amount After Actions".</li>
                <li>Click on the <img src={require('../../Assets/images/Guam_leaf.png')} alt={"guam"}/> tab and view the "Amount After Actions".</li>
                <li>Click on the <img src={require('../../Assets/images/Limpwurt_root.png')} alt={"limpwurtRoot"}/> tab and view the "Amount After Actions".</li>
                <li>Click on the <img src={require('../../Assets/images/Attack_potion(1).png')} alt={"attackPotion"}/> tab and view the "Amount After Actions".</li>
              </ol>
            </li>
            <li><h5>Review your XP Gained</h5>
              <ol>
                <li>Click on the <img src={require('../../Assets/images/Stats_icon.png')} alt={"statsIcon"}/> icon located at the very top of the page.</li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </React.Fragment>
  )
};


export default home;