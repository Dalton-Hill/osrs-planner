const fletchingSecondaries = [
  {
    name: 'Bow string',
    imageName: 'Bow_string.png',
    type: 'fletching secondary',
    counts: [
      {location: 'inventory', count: 0, isPositive: true, imageName: "Inventory.png"},
      {location: 'fletching', count: 0, isPositive: false, imageName: "Fletching_icon.png", productName: "Magic longbow"},
      {location: 'fletching', count: 0, isPositive: false, imageName: "Fletching_icon.png", productName: "Maple longbow"},
    ],
    requiredSecondaryItems: []
  }
];


export default fletchingSecondaries;