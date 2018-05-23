import React from 'react';
import * as styles from './styles';
import { getParentItem } from '../../../store/utils';


const row = ({ fletchingProduct, onUpdateCount }) => {
  const location = 'fletching';
  const parentItem = getParentItem(fletchingProduct);
  const fletchingCount = parentItem.counts.find(count => count.productName === fletchingProduct.name);
  return (
    <tr>
      <td>
        <img src={require('../../../Assets/images/' + fletchingProduct.imageName)} alt={fletchingProduct.name} style={styles.img}/>
        {fletchingProduct.name}
      </td>
      <td>{fletchingCount.levelRequired}</td>
      <td>Items!</td>
      <td><input type={'text'} className={"form-control"} value={fletchingCount.count}
                 onChange={(event) => onUpdateCount(event, parentItem.name, location, fletchingCount.productName)}/></td>
      <td>{(fletchingCount.count * fletchingCount.xpPer).toFixed(2)}</td>
    </tr>
  )
};


export default row;