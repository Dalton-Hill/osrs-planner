import React from 'react';
import Tab from './Tab/Tab';


const tabs = ({ sections, activeSectionIndex, click }) => {
  return (
    <ul className="nav nav-tabs card-header-tabs">
      {sections.map((section, index) => {
        return (
          <Tab id={section.id} name={section.name} key={section.name} click={() => click(index)} image_name={section.imageName}
               active={index === activeSectionIndex}/>
        )
      })}
    </ul>
  );
};


export default tabs