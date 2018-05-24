const fletchingProducts = [
  {
    name: 'Maple longbow (u)',
    imageName: 'Maple_longbow_(u).png',
    type: 'fletching product',
    counts: [
      {location: 'inventory', count: 0, isPositive: true, imageName: "Inventory.png"},
      {fromItemName: 'Maple Logs', fromItemLocation: 'fletching', imageName: 'Maple_logs.png'},
      {location: 'fletching', count: 0, isPositive: false, xpPer: 58.2 , levelRequired: 55, imageName: "Fletching_icon.png", productName: "Maple longbow"}
    ],
    requiredSecondaryItems: []
  },
  {
    name: 'Maple longbow',
    imageName: 'Maple_longbow.png',
    type: 'fletching product',
    counts: [
      {location: 'inventory', count: 0, isPositive: true, imageName: "Inventory.png"},
      {fromItemName: 'Maple longbow (u)', fromItemLocation: 'fletching', imageName: 'Maple_longbow_(u).png'}
    ],
    requiredSecondaryItems: [
      {name: 'Bow string', numberRequired: 1}
    ]
  },
  {
    name: 'Yew longbow (u)',
    imageName: 'Yew_longbow_(u).png',
    type: 'fletching product',
    counts: [
      {location: 'inventory', count: 0, isPositive: true, imageName: "Inventory.png"},
      {fromItemName: 'Yew Logs', fromItemLocation: 'fletching', imageName: 'Yew_logs.png'},
      {location: 'fletching', count: 0, isPositive: false, xpPer: 75, levelRequired: 70, imageName: "Fletching_icon.png", productName: "Yew longbow"}
    ],
    requiredSecondaryItems: []
  },
  {
    name: 'Yew longbow',
    imageName: 'Yew_longbow.png',
    type: 'fletching product',
    counts: [
      {location: 'inventory', count: 0, isPositive: true, imageName: "Inventory.png"},
      {fromItemName: 'Yew longbow (u)', fromItemLocation: 'fletching', imageName: 'Yew_longbow_(u).png'}
    ],
    requiredSecondaryItems: [
      {name: 'Bow string', numberRequired: 1}
    ]
  },
  {
    name: 'Magic longbow (u)',
    imageName: 'Magic_longbow_(u).png',
    type: 'fletching product',
    counts: [
      {location: 'inventory', count: 0, isPositive: true, imageName: "Inventory.png"},
      {fromItemName: 'Magic Logs', fromItemLocation: 'fletching', imageName: 'Magic_logs.png'},
      {location: 'fletching', count: 0, isPositive: false, xpPer: 91.5, levelRequired: 85, imageName: "Fletching_icon.png", productName: "Magic longbow"}
    ],
    requiredSecondaryItems: []
  },
  {
    name: 'Magic longbow',
    imageName: 'Magic_longbow.png',
    type: 'fletching product',
    counts: [
      {location: 'inventory', count: 0, isPositive: true, imageName: "Inventory.png"},
      {fromItemName: 'Magic longbow (u)', fromItemLocation: 'fletching', imageName: 'Magic_longbow_(u).png'}
    ],
    requiredSecondaryItems: [
      {name: 'Bow string', numberRequired: 1}
    ]
  }
];


export default fletchingProducts;