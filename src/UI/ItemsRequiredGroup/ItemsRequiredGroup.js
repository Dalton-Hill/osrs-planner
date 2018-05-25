import React from 'react';
import ItemRequiredButton from './ItemRequiredButton/ItemRequiredButton';
import { getItemsRequired } from "../../store/utils";


const itemsRequiredGroup = (props) => {
  const items = getItemsRequired(props.action);
  return (
    <div className={"btn-group"} role={"group"}>
      {items.map(item => <ItemRequiredButton key={item.name} item={item} action={props.action}/>)}
    </div>
  )
};


export default itemsRequiredGroup;