import React from 'react';
import ItemAvailableButton from './ItemAvailableButton/ItemAvailableButton';
import { getItemsRequired } from "../../store/utils";


const itemsAvailableGroup = (props) => {
  const items = getItemsRequired(props.action);
  return (
    <div className={"btn-group"} role={"group"}>
      {items.map(item => <ItemAvailableButton key={item.name} item={item}/>)}
    </div>
  )
};


export default itemsAvailableGroup;