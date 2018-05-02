import React from 'react';


const unpackRequiredPictures = (requiredItems) => {
  if (typeof requiredItems !== 'undefined') {
    return (
      requiredItems.map((item, index) => <img src={item.image_url} alt={item.name} key={item.name + index}/>)
    )
  }
};

const maxPossibleProduct = (requiredItems) => {
  if (typeof requiredItems !== 'undefined') {
    let possibleProduct = 1000000;
    requiredItems.forEach(item => {
      let count = typeof item.countToBurn === 'undefined' ? item.count : item.count - item.countToBurn;
      possibleProduct = item.count < possibleProduct ? count : possibleProduct
    });
    return possibleProduct >= 0 ? possibleProduct : 0;
  }
};


const item = ({ fletching_product, change }) => {
  const { image_url, name, xp_reward, count, high_alchemy_value, requiredItems, path } = fletching_product;
  const maxPossibleProd = maxPossibleProduct(requiredItems);
  const limitedCount = count <= maxPossibleProd ? count : maxPossibleProd;  // Count that cannot exceed maxPossibleProd
  const high_alch_total = high_alchemy_value * (limitedCount);
  return (
    <tr>
      <td><img src={image_url} alt={name}/>{name}</td>
      <td><input className={"form-control"} value={maxPossibleProd} readOnly={true}/></td>
      <td><input className={"form-control"} value={limitedCount} onChange={(event) => change(event, path, maxPossibleProd)}/></td>
      <td>{unpackRequiredPictures(requiredItems)}</td>
      <td>{xp_reward * (limitedCount)}</td>
      <td>{isNaN(high_alch_total) ? null : high_alch_total}</td>
    </tr>
  )
};


export default item;