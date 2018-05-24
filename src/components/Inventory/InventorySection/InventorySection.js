import React from 'react';
import Table from './Table/Table';


const inventorySection = (props) => {
  return (
    <div className={"card-body"}>
      <Table items={props.items} onUpdateCount={props.onUpdateCount}/>
    </div>
  )
};


export default inventorySection