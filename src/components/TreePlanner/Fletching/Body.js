import React from 'react';
import Item from './Item';


const unpackProducts = (log, treeIndex) => {
  const products = [];
  log.fletching_products.forEach((product, productIndex) => {
    const { next_product } = product;
    product.path = [treeIndex, 'log', 'fletching_products', productIndex];
    next_product.path = [treeIndex, 'log', 'fletching_products', productIndex, ['next_product']];
    product.requiredItems = [log];
    next_product.requiredItems = [product];
    products.push(product);
    products.push(next_product);
  });
  return products;
};


const body = ({ trees, handleFletchingProductChange }) => {
  const fletching_products = [];
  trees.forEach((tree, treeIndex) => {
    fletching_products.push(...unpackProducts(tree.log, treeIndex))
  });
  return (
    <div>
      <h5 className="card-title">Fletching</h5>
      <table className={"table"}>
        <thead>
        <tr>
          <th scope={"col"}>Item</th>
          <th scope={"col"}>Available</th>
          <th scope={"col"}>Make</th>
          <th scope={"col"}>Required Items</th>
          <th scope={"col"}>XP Gained</th>
          <th scope={"col"}>Alch</th>
        </tr>
        </thead>
        <tbody>
        {fletching_products.map(fletching_product => {
          return <Item fletching_product={fletching_product} key={fletching_product.name}
                       change={handleFletchingProductChange}/>
        })}
        </tbody>
      </table>
    </div>
  )
};


export default body;