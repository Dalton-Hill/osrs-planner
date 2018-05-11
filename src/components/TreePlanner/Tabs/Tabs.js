import React from 'react';
import Tab from './Tab/Tab';


const tabs = ({ sections, click }) => {
  return (
    <ul className="nav nav-tabs card-header-tabs">
      {sections.map(section => {
        return (
          <Tab id={section.id} name={section.name} key={section.id} click={click} image_name={section.image_name}/>
        )
      })}
    </ul>
  );
};


export default tabs