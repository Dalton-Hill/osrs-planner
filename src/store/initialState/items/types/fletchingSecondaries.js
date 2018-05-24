const fletchingSecondaries = [
  {
    name: 'Bow string',
    imageName: 'Bow_string.png',
    type: 'fletching secondary',
    counts: [
      {location: 'items', count: 0, isPositive: true, imageName: "Inventory.png"},
      {fromItemName: 'Magic longbow', fromItemLocation: 'fletching', imageName: 'Magic_longbow.png'},
      {fromItemName: 'Maple longbow', fromItemLocation: 'fletching', imageName: 'Maple_longbow.png'},
    ],
    requiredSecondaryItems: []
  }
];


export default fletchingSecondaries;