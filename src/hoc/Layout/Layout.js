import React from 'react';
import Navbar from '../../Navigation/Navbar/Navbar';


const layout = (props) => {
  return (
    <div className={"container"}>
      <Navbar routes={props.routes}/>
      <div>
        {props.children}
      </div>
    </div>
  )
};


export default layout;